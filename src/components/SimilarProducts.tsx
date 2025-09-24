'use client';

import { useEffect, useState } from 'react';
import { suggestSimilarProducts } from '@/ai/flows/similar-products-flow';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export default function SimilarProducts({ currentProduct }: { currentProduct: Product }) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        const result = await suggestSimilarProducts({
          productId: currentProduct.id,
          productName: currentProduct.name,
          productDescription: currentProduct.description,
        });
        
        if (result && result.recommendations) {
          const recommendedProducts = result.recommendations
            .map(rec => products.find(p => p.slug === rec.slug))
            .filter((p): p is Product => !!p); // Filter out any undefined products
          setRecommendations(recommendedProducts);
        }

      } catch (e) {
        console.error("Failed to generate similar products:", e);
        if (e instanceof Error && (e.message.includes('API key') || e.message.includes('GEMINI_API_KEY'))) {
             // Silently fail if API key is not set, as it is not a critical feature
        } else {
          setError('فشل في تحميل المنتجات المشابهة.');
        }
      } finally {
        setIsLoading(false);
      }
    }
    getRecommendations();
  }, [currentProduct]);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-headline font-bold text-center mb-6">قد يعجبك أيضاً</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
             <div key={i} className="flex flex-col space-y-3">
                <div className="rounded-lg bg-muted aspect-square animate-pulse"></div>
                <div className="space-y-2">
                    <div className="h-4 w-4/5 rounded-md bg-muted animate-pulse"></div>
                    <div className="h-4 w-2/5 rounded-md bg-muted animate-pulse"></div>
                </div>
             </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Don't render the section if there are no recommendations or if there was a silent fail
  if (recommendations.length === 0 || error) {
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
