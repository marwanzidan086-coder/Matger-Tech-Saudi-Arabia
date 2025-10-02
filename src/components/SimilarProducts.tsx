'use client';

import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

// This is the new static recommendation function.
function getStaticRecommendations(currentProduct: Product): Product[] {
  // 1. Filter for products in the same category, excluding the current one.
  const similarCategoryProducts = products.filter(p => 
    p.category === currentProduct.category && p.id !== currentProduct.id
  );
  
  // 2. Create a "shuffled" but consistent list based on the product ID.
  // This ensures the same "random" products appear every time for the same product.
  const shuffled = [...similarCategoryProducts].sort((a, b) => {
    // A simple seeding mechanism using product IDs
    const idA = parseInt(a.id.replace('product-', ''), 10);
    const idB = parseInt(b.id.replace('product-', ''), 10);
    const seed = parseInt(currentProduct.id.replace('product-', ''), 10);
    
    // This creates a pseudo-random but deterministic order
    const valA = (idA * seed) % 100;
    const valB = (idB * seed) % 100;

    return valA - valB;
  });

  // 3. Return the first 4 products from the shuffled list.
  return shuffled.slice(0, 4);
}

export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We keep the loading state briefly to ensure a smooth UI experience
    // but the logic is now instantaneous.
    setIsLoading(true);
    const staticRecs = getStaticRecommendations(currentProduct);
    setRecommendations(staticRecs);
    setIsLoading(false);
  }, [currentProduct]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
        <p className="mt-2 text-muted-foreground">جاري تحميل منتجات مشابهة...</p>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null; // Don't show anything if no recommendations are found
  }

  return (
    <div>
      <h2 className="text-2xl font-headline font-bold text-center mb-6">قد يعجبك أيضاً</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {recommendations.map(product => (
          <ProductCard key={product.id} product={product} size="small" />
        ))}
      </div>
    </div>
  );
}
