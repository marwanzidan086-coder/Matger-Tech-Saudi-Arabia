import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { AddToWishlistButton } from './AddToWishlistButton';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square w-full bg-muted overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
            data-ai-hint="product image"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-base font-semibold flex-grow">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-2 text-lg font-bold text-primary">
          {product.price.toFixed(2)} د.م
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <AddToCartButton product={product} />
          <AddToWishlistButton product={product} />
        </div>
      </div>
    </div>
  );
}
