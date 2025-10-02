
'use client';

import { useState, useMemo } from 'react';
import { Star, MessageSquare, Trash2, Send } from 'lucide-react';
import { type Product, type Review } from '@/lib/types';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useLocalStorage } from '@/hooks/use-local-storage';

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
  const [reviews, setReviews] = useLocalStorage<Review[]>(`reviews_${product.id}`, product.reviews || []);
  const [userReviewIds, setUserReviewIds] = useLocalStorage<string[]>(`user_review_ids_${product.id}`, []);
  
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    return reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  }, [reviews]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newRating > 0 && newComment.trim() !== '' && newAuthor.trim() !== '') {
      const newReviewId = `review_${Date.now()}_${Math.random()}`;
      const newReview: Review = {
        id: newReviewId,
        author: newAuthor,
        rating: newRating,
        comment: newComment,
      };
      setReviews(prev => [newReview, ...prev]);
      setUserReviewIds(prev => [...prev, newReviewId]);
      
      setNewRating(0);
      setNewComment('');
      setNewAuthor('');
      setShowForm(false);
    }
  };

  const handleDelete = (reviewId: string) => {
    setReviews(prev => prev.filter(r => r.id !== reviewId));
    setUserReviewIds(prev => prev.filter(id => id !== reviewId));
  }

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
                 <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-1 left-1 h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(review.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                 </Button>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground py-4">لا توجد مراجعات لهذا المنتج حتى الآن. كن أول من يكتب مراجعة!</p>
        )}
      </div>

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
            <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>إلغاء</Button>
            <Button type="submit">
                <Send className="me-2 h-4 w-4"/>
                إرسال المراجعة
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
