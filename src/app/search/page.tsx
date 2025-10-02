
'use client';

import { Suspense, useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { searchProducts } from '@/ai/flows/product-search-flow';
import { products } from '@/data/products';
import { Product } from '@/lib/types';
import ProductListItem from '@/components/ProductListItem';
import { Loader2, Search, Sparkles, ArrowUpDown, Clock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Fuse from 'fuse.js';
import ProductCard from '@/components/ProductCard';

type SortOption = 'relevance' | 'newest' | 'price-asc' | 'price-desc';

function getSessionCache(key: string) {
    if (typeof window === 'undefined') return null;
    const cached = sessionStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
}

function setSessionCache(key: string, value: any) {
    if (typeof window === 'undefined') return;
    sessionStorage.setItem(key, JSON.stringify(value));
}

const fuse = new Fuse(products, {
  keys: ['name', 'description', 'category'],
  includeScore: true,
  threshold: 0.3,
});

const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

const popularProductSlugs = [
    'smart-health-monitoring-ring',
    'dlc-multi-use-lantern-power-bank',
    '4k-gaming-console-with-controllers',
    'smart-portable-cinema-projector',
    'electronic-tasbeeh-ring',
    '3-camera-dash-cam-1080p',
    'dlc-camping-stove',
    'denx-large-solar-spotlight',
];

const popularProducts = popularProductSlugs.map(slug => getProductBySlug(slug)).filter((p): p is Product => !!p);


function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  const [localResults, setLocalResults] = useState<Product[]>([]);
  const [aiResults, setAiResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('relevance');


  useEffect(() => {
    setIsLoading(true);
    setAiResults([]);
    setLocalResults([]);
    setSortOption('relevance');
    
    if (!query) {
      setIsLoading(false);
      return;
    }
    
    const cacheKey = `ai_search_${query}`;
    const cachedResults = getSessionCache(cacheKey);

    if (cachedResults) {
        setAiResults(cachedResults);
    }

    const results = fuse.search(query).map(result => result.item);
    setLocalResults(results);
    setIsLoading(false);

  }, [query]);

  const handleAiSuggestion = async () => {
    if (!query) return;
    setIsAiLoading(true);
    try {
      const response = await searchProducts({ query });
      const foundProducts = response.results
        .map(res => products.find(p => p.slug === res.slug))
        .filter((p): p is Product => !!p);
      
      const cacheKey = `ai_search_${query}`;
      setSessionCache(cacheKey, foundProducts);
      setAiResults(foundProducts);

    } catch (error) {
      console.error("AI suggestion failed:", error);
      setAiResults([]);
    } finally {
      setIsAiLoading(false);
    }
  };
  
  const displayedProducts = useMemo(() => {
    const combined = [...aiResults, ...localResults];
    const uniqueProducts = combined.filter(
      (product, index, self) => index === self.findIndex((p) => p.id === product.id)
    );

    switch (sortOption) {
      case 'price-asc':
        return uniqueProducts.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return uniqueProducts.sort((a, b) => b.price - a.price);
      case 'newest':
         return uniqueProducts.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
      case 'relevance':
      default:
        return uniqueProducts; // Default order is already by relevance
    }
  }, [aiResults, localResults, sortOption]);

  const hasResults = displayedProducts.length > 0;
  const noResultsFound = !isLoading && !hasResults;

  const sortButtons: { label: string; value: SortOption, icon: React.ElementType }[] = [
    { label: 'الأكثر صلة', value: 'relevance', icon: Search },
    { label: 'الأحدث', value: 'newest', icon: Clock },
    { label: 'السعر: من الأقل للأعلى', value: 'price-asc', icon: ArrowUpDown },
    { label: 'السعر: من الأعلى للأقل', value: 'price-desc', icon: ArrowUpDown },
  ];

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
      ) : (
        <>
          {hasResults && (
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
              <p className="font-semibold hidden sm:block">ترتيب حسب:</p>
              {sortButtons.map(({ label, value, icon: Icon }) => (
                <Button
                  key={value}
                  variant={sortOption === value ? 'default' : 'outline'}
                  onClick={() => setSortOption(value)}
                  className={cn("gap-2 transition-all", sortOption === value && "scale-105 shadow-md")}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Button>
              ))}
            </div>
          )}

          {hasResults && (
            <div className="max-w-4xl mx-auto space-y-6">
              {aiResults.length > 0 && sortOption === 'relevance' && (
                <Alert variant="default" className="border-primary/30 bg-primary/5 text-primary-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <AlertTitle className="font-bold text-primary">نتائج البحث الذكي</AlertTitle>
                    <AlertDescription className="text-primary/90">
                        هذه هي أفضل النتائج التي وجدها خبيرنا الذكي لك.
                    </AlertDescription>
                </Alert>
              )}
              {displayedProducts.map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}

          {noResultsFound && (
            <div className="text-center py-10">
                <Alert className="max-w-md mx-auto text-center border-dashed mb-10">
                    <div className="mx-auto w-fit mb-2">
                        <Search className="h-8 w-8"/>
                    </div>
                    <AlertTitle className="font-bold">لا توجد نتائج بحث</AlertTitle>
                    <AlertDescription>
                        لم نتمكن من العثور على منتجات تطابق بحثك.
                    </AlertDescription>
                </Alert>
                <div className="mt-8">
                    <h3 className="text-2xl font-headline font-bold mb-6">ربما تعجبك هذه المنتجات</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                        {popularProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
          )}
        </>
      )}

      {query && !isLoading && !noResultsFound && (
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
