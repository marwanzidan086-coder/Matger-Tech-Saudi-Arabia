import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Hero from '@/components/Hero';
import GiftAdvisor from '@/components/GiftAdvisor';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  // Show the first 8 products on the home page
  const visibleProducts = products.slice(0, 8);

  return (
    <>
      <Hero />
      
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
              <Link href="/all-products">
                مزيد من المنتجات
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
