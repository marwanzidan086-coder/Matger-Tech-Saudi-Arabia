'use client';

import { useState, useEffect, useMemo, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { type Product } from '@/lib/types';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem, CommandSeparator, CommandGroup } from '@/components/ui/command';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { SearchIcon, X, Loader2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { searchProducts } from '@/ai/flows/product-search-flow';
import Link from 'next/link';
import Fuse from 'fuse.js';

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [localResults, setLocalResults] = useState<Product[]>([]);
  const [aiResults, setAiResults] = useState<Product[]>([]);
  const [isAiSearchLoading, setIsAiSearchLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const fuse = useMemo(() => new Fuse(products, {
    keys: ['name', 'description', 'category'],
    includeScore: true,
    threshold: 0.4,
  }), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  useEffect(() => {
    if (searchParams.get('q')) {
      setOpen(false);
    }
  }, [searchParams]);

  useEffect(() => {
    // Reset AI results when query changes
    setAiResults([]);
    setIsAiSearchLoading(false);

    if (query.length <= 2) {
      setLocalResults([]);
      return;
    }

    const results = fuse.search(query).map(result => result.item);
    setLocalResults(results);

  }, [query, fuse]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query) {
      router.push(`/search?q=${query}`);
      setOpen(false);
    }
  };
  
  const handleSelectResult = () => {
    setOpen(false);
  };
  
  const handleAiSearch = async () => {
    setIsAiSearchLoading(true);
    try {
      const response = await searchProducts({ query });
      const foundProducts = response.results
        .map(res => products.find(p => p.slug === res.slug))
        .filter((p): p is Product => !!p);
      setAiResults(foundProducts);
    } catch (error) {
      console.error("AI Search failed:", error);
      setAiResults([]); // Or show an error message
    } finally {
      setIsAiSearchLoading(false);
    }
  };

  const hasLocalResults = localResults.length > 0;
  const hasAiResults = aiResults.length > 0;

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground"
        aria-label="بحث"
      >
        <SearchIcon className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 top-[10vh] translate-y-0 sm:top-1/4">
            <DialogHeader>
              <DialogTitle className="sr-only">بحث المنتجات</DialogTitle>
              <DialogDescription className="sr-only">ابحث في جميع المنتجات في المتجر.</DialogDescription>
            </DialogHeader>
            <Command shouldFilter={false} className="[&_[cmdk-list]]:max-h-[400px]">
              <div className="flex items-center border-b px-3">
                  <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <CommandInput
                    value={query}
                    onValueChange={setQuery}
                    onKeyDown={handleKeyDown}
                    placeholder="ابحث عن منتج..."
                    className="h-11"
                  />
                   <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
                      <X className="h-4 w-4" />
                  </Button>
              </div>
              <CommandList>
                <CommandEmpty>{query.length > 2 ? "لا توجد نتائج." : "اكتب كلمتين على الأقل للبحث..."}</CommandEmpty>
                
                {hasLocalResults && (
                  <CommandGroup heading="نتائج فورية">
                    {localResults.slice(0, 5).map((product) => (
                      <Link key={`local-${product.id}`} href={`/products/${product.slug}`} passHref>
                        <CommandItem onSelect={handleSelectResult} className="cursor-pointer">
                          <div className="flex items-center gap-4">
                            <Image src={product.images[0]} alt={product.name} width={40} height={40} className="rounded-md object-cover" data-ai-hint="product image"/>
                            <div className="flex flex-col">
                              <span>{product.name}</span>
                              <span className="text-xs text-primary">{product.price.toFixed(2)} ر.س</span>
                            </div>
                          </div>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {hasAiResults && (
                   <CommandGroup heading="نتائج البحث المتقدم">
                    {aiResults.map((product) => (
                      <Link key={`ai-${product.id}`} href={`/products/${product.slug}`} passHref>
                        <CommandItem onSelect={handleSelectResult} className="cursor-pointer">
                          <div className="flex items-center gap-4">
                             <Sparkles className="h-4 w-4 text-primary shrink-0" />
                            <Image src={product.images[0]} alt={product.name} width={40} height={40} className="rounded-md object-cover" data-ai-hint="product image"/>
                            <div className="flex flex-col">
                              <span>{product.name}</span>
                              <span className="text-xs text-primary">{product.price.toFixed(2)} ر.س</span>
                            </div>
                          </div>
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                )}

                {query.length > 2 && !hasAiResults && (
                  <>
                    {hasLocalResults && <CommandSeparator />}
                    <div className="p-2 text-center">
                       <Button onClick={handleAiSearch} disabled={isAiSearchLoading} variant="link" className="text-sm">
                          {isAiSearchLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              جاري البحث...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              لم تجد ما تبحث عنه؟ جرب البحث الذكي
                            </>
                          )}
                       </Button>
                    </div>
                  </>
                )}
              </CommandList>
            </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
