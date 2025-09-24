'use client';

import { useState, useEffect, useCallback, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { type Product } from '@/lib/types';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem } from '@/components/ui/command';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { SearchIcon, X, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { searchProducts } from '@/ai/flows/product-search-flow';
import Link from 'next/link';


export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();

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
    const q = searchParams.get('q');
    if (q) {
      setOpen(false);
    }
  }, [searchParams]);

  useEffect(() => {
    if (query.length <= 2) {
      setSearchResults([]);
      return;
    }

    const timerId = setTimeout(() => {
        startTransition(async () => {
            const response = await searchProducts({ query });
            const foundProducts = response.results
                .map(res => products.find(p => p.slug === res.slug))
                .filter((p): p is Product => !!p);
            setSearchResults(foundProducts);
        });
    }, 300); // Debounce search

    return () => clearTimeout(timerId);

  }, [query]);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query) {
      e.preventDefault();
      router.push(`/search?q=${query}`);
      setOpen(false);
    }
  };
  
  const handleSelectResult = () => {
    setOpen(false);
  };


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
            <DialogHeader className="sr-only">
              <DialogTitle>بحث المنتجات</DialogTitle>
              <DialogDescription>ابحث في جميع المنتجات في المتجر.</DialogDescription>
            </DialogHeader>
            <Command shouldFilter={false} className="[&_[cmdk-list]]:max-h-[300px] [&_[cmdk-list]]:sm:max-h-[400px]">
              <div className="flex items-center border-b px-3">
                  <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  <CommandInput
                    value={query}
                    onValueChange={setQuery}
                    onKeyDown={handleKeyDown}
                    placeholder="ابحث عن منتج..."
                    className="h-11"
                  />
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                   <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
                      <X className="h-4 w-4" />
                  </Button>
              </div>
              <CommandList>
                <CommandEmpty>{query.length > 2 && !isPending ? "لا توجد نتائج." : "اكتب كلمتين على الأقل للبحث..."}</CommandEmpty>
                {searchResults.slice(0, 10).map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`} passHref>
                    <CommandItem
                        onSelect={handleSelectResult}
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="rounded-md object-cover"
                            data-ai-hint="product image"
                        />
                        <div className="flex flex-col">
                            <span>{product.name}</span>
                            <span className="text-xs text-primary">{product.price.toFixed(2)} ج.م</span>
                        </div>
                        </div>
                    </CommandItem>
                  </Link>
                ))}
              </CommandList>
            </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
