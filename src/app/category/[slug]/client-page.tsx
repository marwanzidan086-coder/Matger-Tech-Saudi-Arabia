
'use client';

import { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Clock } from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Category } from '@/lib/types';

type CategoryClientPageProps = {
  initialProducts: Product[];
  category: Category;
};

type SortOption = 'newest' | 'price-asc' | 'price-desc';


export default function CategoryClientPage({ initialProducts, category }: CategoryClientPageProps) {
  const [sortOption, setSortOption] = useState<SortOption>('newest');

  const sortedProducts = useMemo(() => {
    let sorted = [...initialProducts];

    switch (sortOption) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
         // Assuming products are ordered by ID, we can reverse to get "newest"
        sorted.sort((a, b) => parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]));
        break;
    }
    return sorted;
  }, [sortOption, initialProducts]);

  const Icon = category.icon;

  const sortButtons: { label: string; value: SortOption, icon: React.ElementType }[] = [
    { label: 'الأحدث', value: 'newest', icon: Clock },
    { label: 'السعر: من الأقل للأعلى', value: 'price-asc', icon: ArrowUpDown },
    { label: 'السعر: من الأعلى للأقل', value: 'price-desc', icon: ArrowUpDown },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="mb-4 rounded-full bg-primary/10 p-4 border-2 border-primary/20">
            <Icon className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          {category.name}
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
      </div>

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

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground mb-4">
            لا توجد منتجات في هذا القسم حاليًا.
          </p>
          <Button asChild>
            <Link href="/categories">العودة إلى الأقسام</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
