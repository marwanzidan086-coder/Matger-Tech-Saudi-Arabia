
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { AddToWishlistButton } from './AddToWishlistButton';
import { AddToCompareButton } from './AddToCompareButton';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
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
  const [isPending, startTransition] = useTransition();
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent new clicks if a transition is already pending
    if (isPending) {
        e.preventDefault();
        return;
    }
    e.preventDefault();
    setActiveProductId(product.id);
    startTransition(() => {
      router.push(`/products/${product.slug}`);
    });
  };

  const isLoading = isPending && activeProductId === product.id;

  return (
    <div className={cn(productCardVariants({ size }), isLoading && 'opacity-60')}>
      <Link href={`/products/${product.slug}`} onClick={handleClick} className="block cursor-pointer">
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
               {/* Spinning border element */}
               <div className="absolute inset-0 rounded-lg ring-2 ring-primary animate-spin" />
               {/* Central loader icon */}
              <Loader2 className="h-12 w-12 text-white animate-spin" />
            </div>
          )}
        </div>
      </Link>
      <div className={cn("flex flex-1 flex-col", size === 'small' ? 'p-2' : 'p-3')}>
        <h3 className={cn("font-semibold", size === 'small' ? 'text-sm h-10' : 'text-base h-12 overflow-hidden')}>
          <Link href={`/products/${product.slug}`} onClick={handleClick} className="cursor-pointer">{product.name}</Link>
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

