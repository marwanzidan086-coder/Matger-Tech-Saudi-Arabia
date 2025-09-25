
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProductListItem({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-3">
        <div className="grid grid-cols-5 gap-3 items-center">
          
          <div className="col-span-2 md:col-span-1">
             <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-square w-full bg-muted rounded-md overflow-hidden">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 30vw, 15vw"
                        data-ai-hint="product image"
                    />
                </div>
             </Link>
          </div>
          
          <div className="col-span-3 md:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-base font-semibold line-clamp-2 leading-tight">
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="text-lg font-mono font-bold text-primary mt-1">
                  {product.price.toFixed(2)} ر.س
              </p>
            </div>
             <div className="mt-2">
                <AddToCartButton product={product} size="sm" className="w-full sm:w-auto" />
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
