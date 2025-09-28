
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { AddToWishlistButton } from './AddToWishlistButton';
import { AddToCompareButton } from './AddToCompareButton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Global navigation lock to prevent multiple clicks
let isNavigating = false;

const productCardVariants = cva(
  "group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
  {
    variants: {
      size: {
        default: "",
        small: "text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type ProductCardProps = {
  product: Product;
} & VariantProps<typeof productCardVariants>;

export default function ProductCard({ 
  product, 
  size,
 }: ProductCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset the lock when the component mounts or when navigation might have completed
    isNavigating = false;
    // Also reset its own loading state if it was stuck
    setIsLoading(false);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If a navigation is already in progress, prevent new clicks
      if (isNavigating) {
          e.preventDefault();
          return;
      }
      
      // Set the lock, show loading indicator, and then navigate.
      isNavigating = true;
      setIsLoading(true);
      router.push(`/products/${product.slug}`);
  };

  const isCardLoading = isLoading && isNavigating;

  return (
    <div className={cn(productCardVariants({ size }), isCardLoading && 'animated-border')}>
      {isCardLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-lg">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
        </div>
      )}
      <Link href={`/products/${product.slug}`} onClick={handleClick} className="block cursor-pointer" aria-disabled={isCardLoading}>
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className={cn(
                "object-cover transition-all duration-300 group-hover:scale-105",
                isCardLoading && "opacity-50"
            )}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className={cn("flex flex-1 flex-col", size === 'small' ? 'p-2' : 'p-3')}>
        <h3 className={cn("font-semibold", size === 'small' ? 'text-sm h-10' : 'text-base h-12 overflow-hidden')}>
          <Link href={`/products/${product.slug}`} onClick={handleClick} className="cursor-pointer" aria-disabled={isCardLoading}>{product.name}</Link>
        </h3>
        <p className={cn("mt-1 font-bold text-primary", size === 'small' ? 'text-base' : 'text-lg')}>
          {product.price.toFixed(2)} ر.س
        </p>
        <div className={cn("mt-auto pt-3 flex flex-col gap-2")}>
            <div className="flex items-center gap-2">
              <AddToCartButton product={product} size="icon" variant="outline" iconOnly={true} className="w-full" />
              <AddToWishlistButton product={product} size="icon" variant="outline" iconOnly={true} className="w-full" />
            </div>
            <AddToCompareButton product={product} size={size === 'small' ? 'sm' : 'default'} variant="outline" />
        </div>
      </div>
    </div>
  );
}
