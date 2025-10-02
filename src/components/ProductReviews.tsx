
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Star, MessageSquare, Trash2, Send, Loader2 } from 'lucide-react';
import { type Product, type Review } from '@/lib/types';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { addReview } from '@/app/actions';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

function StarRating({ rating, setRating, interactive = false }: { rating: number; setRating?: (rating: number) => void; interactive?: boolean; }) {
  return (
    <div className="flex items-center gap-1" dir="ltr">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-6 w-6 transition-colors ${interactive ? 'cursor-pointer' : ''} ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 hover:text-gray-400'
          }`}
          onClick={() => interactive && setRating && setRating(i + 1)}
        />
      ))}
    </div>
  );
}

export default function ProductReviews({ product }: { product: Product }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReviewIds, setUserReviewIds] = useLocalStorage<string[]>(`user_review_ids_${product.id}`, []);
  
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, 'products', product.id, 'reviews'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedReviews: Review[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedReviews.push({
          id: doc.id,
          author: data.author,
          rating: data.rating,
          comment: data.comment,
          createdAt: data.createdAt?.toDate(),
        });
      });
      setReviews(fetchedReviews);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching reviews:", error);
      setIsLoading(false);
      toast({
        title: 'خطأ',
        description: 'لم نتمكن من تحميل المراجعات.',
        variant: 'destructive'
      });
    });

    return () => unsubscribe();
  }, [product.id, toast]);
  
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  }, [reviews]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating > 0 && newComment.trim() !== '' && newAuthor.trim() !== '') {
      setIsSubmitting(true);
      const result = await addReview({
        productId: product.id,
        author: newAuthor,
        rating: newRating,
        comment: newComment,
      });

      if (result.success && result.reviewId) {
        setUserReviewIds(prev => [...prev, result.reviewId!]);
        setNewRating(0);
        setNewComment('');
        setNewAuthor('');
        setShowForm(false);
        toast({
          title: 'شكراً لك!',
          description: 'تمت إضافة مراجعتك بنجاح.',
          variant: 'success'
        });
      } else {
        toast({
          title: 'خطأ',
          description: result.message || 'لم نتمكن من إضافة مراجعتك.',
          variant: 'destructive'
        });
      }
      setIsSubmitting(false);
    }
  };

  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, 1);
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">
        <MessageSquare className="h-6 w-6 text-primary" />
        مراجعات العملاء
      </h3>

      {reviews.length > 0 && (
        <div className="flex flex-col items-center gap-2">
          <StarRating rating={averageRating} />
          <p className="text-sm text-muted-foreground">
            متوسط التقييم {averageRating.toFixed(1)} من {reviews.length} مراجعة
          </p>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex justify-center items-center h-24">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {reviews.length > 0 ? (
            reviewsToShow.map((review) => (
              <div key={review.id} className="p-4 border rounded-lg bg-muted/30 relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold">{review.author}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-foreground/80 pr-2">{review.comment}</p>
                {userReviewIds.includes(review.id) && (
                   <div className="absolute top-1 left-1">
                      {/* Placeholder for delete button if needed in future */}
                   </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-4">لا توجد مراجعات لهذا المنتج حتى الآن. كن أول من يكتب مراجعة!</p>
          )}
        </div>
      )}


      {reviews.length > 1 && !showAllReviews && (
        <div className="text-center">
            <Button onClick={() => setShowAllReviews(true)} variant="outline">عرض المزيد من المراجعات</Button>
        </div>
      )}
      
      {!showForm && (
        <div className="text-center">
            <Button onClick={() => setShowForm(true)}>أضف مراجعتك</Button>
        </div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="p-4 border rounded-lg space-y-4 bg-muted/20 animate-in fade-in-50">
          <h4 className="font-bold text-lg">شاركنا رأيك</h4>
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="اسمك" 
              value={newAuthor} 
              onChange={(e) => setNewAuthor(e.target.value)} 
              required 
            />
          </div>
          <div className="space-y-2">
            <label>تقييمك:</label>
            <StarRating rating={newRating} setRating={setNewRating} interactive={true} />
          </div>
          <div className="space-y-2">
            <Textarea 
              placeholder="اكتب تعليقك هنا..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setShowForm(false)} disabled={isSubmitting}>إلغاء</Button>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="me-2 h-4 w-4 animate-spin"/> : <Send className="me-2 h-4 w-4"/>}
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال المراجعة'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
