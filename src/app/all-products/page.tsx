
'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Clock, Search, Mic, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import Fuse from 'fuse.js';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SortOption = 'newest' | 'price-asc' | 'price-desc';

const fuse = new Fuse(products, {
  keys: ['name', 'category'],
  threshold: 0.4,
});

export default function AllProductsPage() {
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let productsToShow = products;

    if (searchQuery.trim()) {
      productsToShow = fuse.search(searchQuery.trim()).map(result => result.item);
    }
    
    let sorted = [...productsToShow];

    switch (sortOption) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
         sorted.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
        break;
    }
    return sorted;
  }, [searchQuery, sortOption]);
  
  const handleVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('متصفحك لا يدعم ميزة البحث الصوتي.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setSearchQuery(speechResult);
    };
    
    recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
    };

    recognition.start();
  };


  const sortButtons: { label: string; value: SortOption, icon: React.ElementType }[] = [
    { label: 'الأحدث', value: 'newest', icon: Clock },
    { label: 'السعر: من الأقل للأعلى', value: 'price-asc', icon: ArrowUpDown },
    { label: 'السعر: من الأعلى للأقل', value: 'price-desc', icon: ArrowUpDown },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          جميع المنتجات
        </h1>
        <p className="text-muted-foreground mt-2">
          تصفح مجموعتنا الكاملة من المنتجات المميزة.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
        <div className="relative w-full md:w-1/3">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
           <Input 
             placeholder={isListening ? "جاري الاستماع..." : "ابحث بالاسم..."}
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="pl-10 pr-10"
           />
           <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            onClick={handleVoiceSearch} 
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground"
            aria-label="بحث صوتي"
            >
              {isListening ? <Loader2 className="h-5 w-5 animate-spin"/> : <Mic className="h-5 w-5" />}
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
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
      </div>

      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
            لم يتم العثور على منتجات تطابق بحثك.
            </p>
        </div>
      )}
    </div>
  );
}
