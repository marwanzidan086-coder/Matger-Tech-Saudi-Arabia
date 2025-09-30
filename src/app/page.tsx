
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Hero from '@/components/Hero';
import GiftAdvisor from '@/components/GiftAdvisor';
import { Separator } from '@/components/ui/separator';
import LoadingOverlay from '@/components/LoadingOverlay';

export default function Home() {
  const visibleProducts = products.slice(0, 8);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(href);
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <Hero onNavigate={handleNavigate} />
      
      <GiftAdvisor />
      
      <Separator className="my-12" />

      <div id="products" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
          أحدث المنتجات
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {visibleProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
        <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/all-products" onClick={(e) => handleNavigate(e, '/all-products')}>
                عرض جميع المنتجات
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
