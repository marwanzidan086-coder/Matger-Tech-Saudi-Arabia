
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { AddToWishlistButton } from './AddToWishlistButton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';


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


export default function ProductCard({ product, size }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className={cn(productCardVariants({ size }), isLoading && 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-lg shadow-primary/30')}>
      <Link href={`/products/${product.slug}`} className="block" onClick={handleClick}>
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
           {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
            data-ai-hint="product image"
          />
        </div>
      </Link>
      <div className={cn("flex flex-1 flex-col", size === 'small' ? 'p-2' : 'p-3')}>
        <h3 className={cn("font-semibold", size === 'small' ? 'text-sm h-10' : 'text-base h-12 overflow-hidden')}>
          <Link href={`/products/${product.slug}`} onClick={handleClick}>{product.name}</Link>
        </h3>
        <p className={cn("mt-1 font-bold text-primary", size === 'small' ? 'text-base' : 'text-lg')}>
          {product.price.toFixed(2)} ر.س
        </p>
        <div className={cn("mt-3 flex gap-2", size === 'small' ? 'flex-col' : 'flex-col')}>
          <AddToCartButton product={product} size={size === 'small' ? 'sm' : 'default'} />
          <AddToWishlistButton product={product} size={size === 'small' ? 'sm' : 'default'} />
        </div>
      </div>
    </div>
  );
}
