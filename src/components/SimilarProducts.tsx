'use client';

import { useEffect, useState } from 'react';
import { suggestSimilarProducts } from '@/ai/flows/similar-products-flow';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

// Fallback function if AI fails
function getFallbackRecommendations(currentProduct: Product): Product[] {
  const similarCategoryProducts = products.filter(p => 
    p.category === currentProduct.category && p.id !== currentProduct.id
  );
  const shuffled = [...similarCategoryProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await suggestSimilarProducts({
          productId: currentProduct.id,
          productName: currentProduct.name,
          productDescription: currentProduct.description,
        });
        
        if (response.recommendations && response.recommendations.length > 0) {
          const foundProducts = response.recommendations
            .map(res => products.find(p => p.slug === res.slug))
            .filter((p): p is Product => !!p);
          setRecommendations(foundProducts);
        } else {
           // Use fallback if AI returns no recommendations
           setRecommendations(getFallbackRecommendations(currentProduct));
        }

      } catch (e) {
        console.error("Failed to fetch AI recommendations, using fallback.", e);
        // Use fallback if AI call fails
        setRecommendations(getFallbackRecommendations(currentProduct));
        if (e instanceof Error && (e.message.includes('API key') || e.message.includes('GEMINI_API_KEY'))) {
          // Don't show a scary error to the user, just log it. The fallback is enough.
          console.error('AI feature is disabled. Missing Gemini API key.');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, [currentProduct]);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
        <p className="mt-2 text-muted-foreground">جاري البحث عن منتجات قد تعجبك...</p>
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
