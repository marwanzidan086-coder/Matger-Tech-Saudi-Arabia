
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchProducts } from '@/ai/flows/product-search-flow';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductListItem from '@/components/ProductListItem';
import { Loader2, Search, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setIsLoading(true);
      // For demonstration, we simulate a local search first or directly use AI.
      // In a real app, you might use Fuse.js here before calling the AI.
      try {
        const response = await searchProducts({ query });
        const foundProducts = response.results
          .map(res => products.find(p => p.slug === res.slug))
          .filter((p): p is Product => !!p);
        setResults(foundProducts);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleAiSuggestion = async () => {
    if (!query) return;
    setIsAiLoading(true);
    try {
      const response = await searchProducts({ query });
      const foundProducts = response.results
        .map(res => products.find(p => p.slug === res.slug))
        .filter((p): p is Product => !!p);
      setResults(foundProducts); 
    } catch (error) {
      console.error("AI suggestion failed:", error);
    } finally {
      setIsAiLoading(false);
    }
  };


  const noResults = !isLoading && results.length === 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          نتائج البحث
        </h1>
        {query && (
          <p className="text-muted-foreground mt-2">
            أنت تبحث عن: &quot;{query}&quot;
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">جاري البحث...</p>
        </div>
      ) : noResults ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] gap-8">
            <Alert className="max-w-md text-center border-dashed">
                <div className="mx-auto w-fit mb-2">
                    <Search className="h-8 w-8"/>
                </div>
                <AlertTitle className="font-bold">لا توجد نتائج بحث</AlertTitle>
                <AlertDescription>
                    لم نتمكن من العثور على منتجات تطابق بحثك. حاول استخدام كلمات مختلفة أو استخدم المساعدة الذكية.
                </AlertDescription>
            </Alert>
        </div>
      ) : (
         <div className="max-w-4xl mx-auto space-y-6">
          {results.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}

      {query && !isLoading && (
        <div className="text-center mt-12">
            <Button 
              onClick={handleAiSuggestion} 
              disabled={isAiLoading}
              size="default"
              className="font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
          >
            {isAiLoading ? (
              <Loader2 className="me-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="me-2 h-4 w-4" />
            )}
            ✨ بحـث ذكـي ✨
          </Button>
        </div>
      )}
    </div>
  );
}


export default function SearchPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">جاري تحميل صفحة البحث...</p>
            </div>
        }>
            <SearchResults />
        </Suspense>
    )
}
