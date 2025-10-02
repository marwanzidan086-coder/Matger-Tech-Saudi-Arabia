'use client';

import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

// New, more intelligent static recommendation function
function getStaticRecommendations(currentProduct: Product): Product[] {
  const allOtherProducts = products.filter(p => p.id !== currentProduct.id);

  // --- Step 1: Find products with very similar names (keyword matching) ---
  const currentProductNameWords = currentProduct.name.toLowerCase().split(' ');
  // Use significant words from the name, ignoring common short words.
  const keywords = currentProductNameWords.filter(word => word.length > 3);

  const similarByName: Product[] = [];
  if (keywords.length > 0) {
    for (const p of allOtherProducts) {
      const pNameLower = p.name.toLowerCase();
      // If any keyword from the current product is in the other product's name
      if (keywords.some(keyword => pNameLower.includes(keyword))) {
        similarByName.push(p);
      }
    }
  }

  // --- Step 2: Get other products from the same category ---
  const similarByCategory = allOtherProducts.filter(p => p.category === currentProduct.category);

  // --- Step 3: Combine and de-duplicate the lists ---
  // Start with name-based matches, then add category matches until we have enough.
  const combined = [...similarByName, ...similarByCategory];
  const uniqueRecommendations = combined.filter(
    (product, index, self) => index === self.findIndex((p) => p.id === product.id)
  );

  // 4. Return the first 4 products from the combined list.
  return uniqueRecommendations.slice(0, 4);
}


export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
