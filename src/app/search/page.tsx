
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchProducts } from '@/ai/flows/product-search-flow';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductListItem from '@/components/ProductListItem';
import { Loader2, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setIsLoading(false);
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setIsLoading(true);
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
      ) : results.length > 0 ? (
        <div className="max-w-4xl mx-auto space-y-6">
          {results.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[40vh]">
            <Alert className="max-w-md text-center">
                <div className="mx-auto w-fit mb-2">
                    <Search className="h-8 w-8"/>
                </div>
                <AlertTitle className="font-bold">لا توجد نتائج بحث</AlertTitle>
                <AlertDescription>
                    لم نتمكن من العثور على أي منتجات تطابق بحثك &quot;{query}&quot;. حاول استخدام كلمات مختلفة.
                </AlertDescription>
            </Alert>
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
