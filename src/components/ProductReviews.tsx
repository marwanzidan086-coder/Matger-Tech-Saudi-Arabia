'use client';

import { Star, MessageSquare, User } from 'lucide-react';
import { type Product } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}


export default function ProductReviews({ product }: { product: Product }) {
  if (!product.reviews || product.reviews.length === 0) {
    return null;
  }

  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">
        <MessageSquare className="h-6 w-6 text-primary" />
        مراجعات العملاء
      </h3>

      <div className="flex flex-col items-center gap-2">
        <StarRating rating={averageRating} />
        <p className="text-sm text-muted-foreground">
          متوسط التقييم {averageRating.toFixed(1)} من {product.reviews.length} مراجعة
        </p>
      </div>
      
      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {product.reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{review.author}</span>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-foreground/80">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
