
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { Card, CardContent } from './ui/card';

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="grid grid-cols-5 gap-4 items-center">
          
          <div className="col-span-2 md:col-span-1">
             <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square w-full bg-muted rounded-md overflow-hidden">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 30vw, 15vw"
                    />
                </div>
             </Link>
          </div>
          
          <div className="col-span-3 md:col-span-4 flex flex-col sm:flex-row sm:items-center sm:justify-between h-full gap-4">
            <div className="flex flex-col h-full justify-between">
              <h3 className="text-lg font-semibold line-clamp-2 leading-tight">
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="text-xl font-mono font-bold text-primary mt-1">
                  {product.price.toFixed(2)} ر.س
              </p>
            </div>
             <div className="mt-2 sm:mt-0 flex-shrink-0">
                <AddToCartButton product={product} size="lg" className="w-full sm:w-auto" />
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
