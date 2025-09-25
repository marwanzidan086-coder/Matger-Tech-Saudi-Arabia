'use client';

import { useEffect, useState } from 'react';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

// Function to get a specified number of random items from an array
function getRandomItems<T>(arr: T[], num: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  useEffect(() => {
    // Filter products to find those in the same category, excluding the current one
    const similarCategoryProducts = products.filter(p => 
      p.category === currentProduct.category && p.id !== currentProduct.id
    );

    // Get up to 4 random products from the filtered list
    const randomRecommendations = getRandomItems(similarCategoryProducts, 4);
    
    setRecommendations(randomRecommendations);
  }, [currentProduct]);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-headline font-bold text-center mb-6">قد يعجبك أيضاً</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map(product => (
          <ProductCard key={product.id} product={product} size="small" />
        ))}
      </div>
    </div>
  );
}
