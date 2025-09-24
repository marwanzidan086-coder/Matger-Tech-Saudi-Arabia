'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import { type Product } from '@/lib/types';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem } from '@/components/ui/command';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { SearchIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Fuse from 'fuse.js';

const fuseOptions = {
  keys: ['name', 'description'],
  includeScore: true,
  threshold: 0.3, // Adjust this value to make the search more or less fuzzy
  minMatchCharLength: 2,
};

export default function Search() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const fuse = new Fuse(products, fuseOptions);

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
    // If the user navigates to a search page directly, open the dialog
    if (searchParams.get('q')) {
      setOpen(true);
      setQuery(searchParams.get('q') || '');
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    router.push(`/search?q=${query}`);
  };

  const handleSelectResult = (slug: string) => {
    setOpen(false);
    router.push(`/products/${slug}`);
  };
  
  const searchResults = query.length > 1 ? fuse.search(query).map(result => result.item) : [];

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
        <DialogContent className="p-0 top-1/4 sm:top-1/4">
           <form onSubmit={handleSearch}>
              <Command shouldFilter={false} className="[&_[cmdk-list]]:max-h-[300px] [&_[cmdk-list]]:sm:max-h-[400px]">
                <div className="flex items-center border-b px-3">
                    <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                    <CommandInput
                      value={query}
                      onValueChange={setQuery}
                      placeholder="ابحث عن منتج..."
                      className="h-11"
                    />
                     <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
                <CommandList>
                  <CommandEmpty>{query.length > 1 ? "لا توجد نتائج." : "ابدأ في الكتابة للبحث."}</CommandEmpty>
                  {searchResults.slice(0, 10).map((product) => (
                    <CommandItem
                      key={product.id}
                      value={product.name}
                      onSelect={() => handleSelectResult(product.slug)}
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
                  ))}
                  {searchResults.length > 5 && (
                    <CommandItem 
                        value="show-all"
                        onSelect={() => {
                            if (!query.trim()) return;
                            setOpen(false);
                            router.push(`/search?q=${query}`);
                        }}
                        className="cursor-pointer justify-center text-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                       عرض كل النتائج ({searchResults.length})
                    </CommandItem>
                  )}
                </CommandList>
              </Command>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}