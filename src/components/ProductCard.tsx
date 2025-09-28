
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { AddToWishlistButton } from './AddToWishlistButton';
import { AddToCompareButton } from './AddToCompareButton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useTransition } from 'react';


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
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If another transition is already happening, prevent a new one.
    if (isPending) {
        e.preventDefault();
        return;
    }
    // This marks the navigation as a transition, allowing us to show a pending UI.
    startTransition(() => {
        // The navigation will happen here. We don't need to manually call router.push.
        // The Link component's default behavior will trigger the navigation within the transition.
    });
  };

  return (
    <div className={cn(
        productCardVariants({ size }), 
        isPending && 'opacity-75',
      )}>
       {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      <Link href={`/products/${product.slug}`} className="block" onClick={handleClick}>
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
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
        <div className={cn("mt-auto pt-3 flex flex-col gap-2")}>
            <div className="flex items-center gap-2">
              <AddToCartButton product={product} size="icon" variant="outline" iconOnly={true} className="flex-grow" />
              <AddToWishlistButton product={product} size="icon" iconOnly={true} />
            </div>
            <AddToCompareButton product={product} size={size === 'small' ? 'sm' : 'default'} variant="outline" />
        </div>
      </div>
    </div>
  );
}
