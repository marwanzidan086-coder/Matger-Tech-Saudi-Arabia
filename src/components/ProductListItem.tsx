
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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="md:col-span-1">
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
          <div className="md:col-span-3 flex flex-col h-full">
            <h3 className="text-xl font-bold">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4 line-clamp-2">
                {product.description.split('###')[0].trim()}
            </p>
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-2xl font-mono font-bold text-primary">
                    {product.price.toFixed(2)} ر.س
                </p>
                <div className="flex items-center gap-2">
                    <AddToCartButton product={product} variant="default" size="lg" />
                    <Button asChild variant="outline" size="lg">
                        <Link href={`/products/${product.slug}`}>
                            <span>التفاصيل</span>
                            <ArrowLeft className="me-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
