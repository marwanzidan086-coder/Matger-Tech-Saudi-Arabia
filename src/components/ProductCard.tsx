
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
import React, { useState } from 'react';
import { useLoading } from '@/contexts/LoadingContext';


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
  const { isTransitioning, startTransition } = useLoading();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (isTransitioning) return;

      setIsClicked(true);
      startTransition(() => {
        router.push(`/products/${product.slug}`);
      });
  };

  const isCardLoading = isClicked && isTransitioning;
  const isAnyCardLoading = !isClicked && isTransitioning;

  if (isCardLoading) {
    return (
      <div className="animated-border">
        <div className={cn(productCardVariants({ size }), "h-full w-full")}>
           <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg">
             <Loader2 className="h-12 w-12 text-primary animate-spin" />
           </div>
          <div className="relative aspect-square w-full bg-muted overflow-hidden opacity-50">
            <Image
              src={(product.images && product.images.length > 0) ? product.images[0] : `https://picsum.photos/seed/${product.id}/600/600`}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className={cn("flex flex-1 flex-col opacity-50", size === 'small' ? 'p-2' : 'p-3')}>
             <h3 className={cn("font-semibold", size === 'small' ? 'text-sm h-10' : 'text-base h-12 overflow-hidden')}>
                {product.name}
            </h3>
            <p className={cn("mt-1 font-bold text-primary", size === 'small' ? 'text-base' : 'text-lg')}>
              {product.price.toFixed(2)} ر.س
            </p>
            <div className={cn("mt-auto pt-3 flex flex-col gap-2")}>
                <div className="flex items-center gap-2">
                  <AddToCartButton product={product} size="icon" variant="outline" iconOnly={true} className="w-full" disabled />
                  <AddToWishlistButton product={product} size="icon" variant="outline" iconOnly={true} className="w-full" disabled />
                </div>
                <AddToCompareButton product={product} size={size === 'small' ? 'sm' : 'default'} variant="outline" disabled />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      productCardVariants({ size }),
      isAnyCardLoading && "opacity-50 pointer-events-none"
    )}>
      <Link 
        href={`/products/${product.slug}`} 
        onClick={handleClick} 
        className="block cursor-pointer"
        aria-disabled={isTransitioning}
        data-product-card-link
      >
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
          <Image
            src={(product.images && product.images.length > 0) ? product.images[0] : `https://picsum.photos/seed/${product.id}/600/600`}
            alt={product.name}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className={cn("flex flex-1 flex-col", size === 'small' ? 'p-2' : 'p-3')}>
        <h3 className={cn("font-semibold", size === 'small' ? 'text-sm h-10' : 'text-base h-12 overflow-hidden')}>
          <Link 
            href={`/products/${product.slug}`} 
            onClick={handleClick} 
            className="cursor-pointer" 
            aria-disabled={isTransitioning}
            data-product-card-link
           >{product.name}</Link>
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
