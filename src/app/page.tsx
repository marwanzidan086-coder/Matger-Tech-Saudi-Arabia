'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Hero from '@/components/Hero';
import GiftAdvisor from '@/components/GiftAdvisor';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const PRODUCTS_PER_PAGE = 12;

export default function Home() {
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMoreProducts = () => {
    setIsLoadingMore(true);
    // Simulate a network request for a better UX
    setTimeout(() => {
      setVisibleProducts((prev) => prev + PRODUCTS_PER_PAGE);
      setIsLoadingMore(false);
    }, 500);
  };

  const hasMoreProducts = visibleProducts < products.length;

  return (
    <>
      <Hero />
      <GiftAdvisor />
      <div id="products" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
          منتجاتنا
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
        {hasMoreProducts && (
          <div className="text-center mt-10">
            <Button onClick={loadMoreProducts} size="lg" disabled={isLoadingMore}>
              {isLoadingMore ? (
                <>
                  <Loader2 className="me-2 h-5 w-5 animate-spin" />
                  جاري التحميل...
                </>
              ) : (
                'تحميل المزيد من المنتجات'
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
