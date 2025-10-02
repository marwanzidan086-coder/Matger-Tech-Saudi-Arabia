
'use client';

import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';
import { similarProductsMap } from '@/data/similar-products-map';

// This function now uses the manually curated map for recommendations.
function getStaticRecommendations(currentProduct: Product): Product[] {
  // 1. Look for the current product's ID in our manual map.
  const recommendedIds = similarProductsMap[currentProduct.id];

  // 2. If no specific recommendations are found, fall back to a simple category-based logic.
  if (!recommendedIds || recommendedIds.length === 0) {
    const fallbackRecs = products
      .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
      .slice(0, 4);
    return fallbackRecs;
  }
  
  // 3. Map the recommended IDs back to the full product objects.
  const recommendedProducts = recommendedIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is Product => !!p); // Filter out any undefined products just in case

  return recommendedProducts;
}


export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // The recommendations are now fetched from our highly accurate manual mapping.
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

