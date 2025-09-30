
'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Hero from '@/components/Hero';
import GiftAdvisor from '@/components/GiftAdvisor';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import type { Product } from '@/lib/types';

// Helper function to find a product by its slug
const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export default function Home() {
  // Manually select the most requested products by their slugs
  const popularProductSlugs = [
    'smart-health-monitoring-ring', // خاتم تتبع الصحة
    'dlc-multi-use-lantern-power-bank', // فانوس الكشتات
    '4k-gaming-console-with-controllers', // جهاز الألعاب
    'smart-portable-cinema-projector', // السينما المتنقلة
    'electronic-tasbeeh-ring', // خاتم التسبيح
    '3-camera-dash-cam-1080p', // داش كام
    'dlc-camping-stove', // موقد الرحلات
    'denx-large-solar-spotlight', // كشاف الطاقة الشمسية
  ];

  const visibleProducts = popularProductSlugs.map(slug => getProductBySlug(slug)).filter((p): p is Product => !!p);

  return (
    <>
      <Hero />
      
      <GiftAdvisor />
      
      <Separator className="my-12" />

      <div id="products" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
          الأكثر طلبًا
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
            <Button asChild size="lg" className="font-bold text-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
              <Link href="/all-products">
                عرض جميع المنتجات
                <ArrowLeft className="me-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
