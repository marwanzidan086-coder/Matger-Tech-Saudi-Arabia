
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
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const visibleProducts = products.slice(0, 8);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsLoading(true);
    // A short delay to allow the loading overlay to be visible
    setTimeout(() => {
        router.push(href);
    }, 300);
  };

  // Hide the loading overlay when the new page is ready
  const handleRouteChangeComplete = () => {
    setIsLoading(false);
  };

  // Listen to route changes to hide the loader
  // This is a simplified example. For a more robust solution,
  // you might use Next.js's router events if available in your version.
  if (typeof window !== 'undefined') {
    window.addEventListener('next-route-change', handleRouteChangeComplete);
  }


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
            <Button asChild size="lg" className="font-bold text-lg bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50">
              <Link href="/all-products" onClick={(e) => handleNavigate(e, '/all-products')}>
                عرض جميع المنتجات
                <ArrowLeft className="me-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
