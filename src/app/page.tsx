import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const visibleProducts = products.slice(0, 12);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            اكتشف مستقبل التكنولوجيا
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            أحدث المنتجات التقنية التي تلهم حياتك اليومية، بأسعار تنافسية وجودة لا تضاهى.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold text-lg">
            <Link href="/categories">
              تصفح جميع المنتجات
            </Link>
          </Button>
        </div>

        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8 mt-16">
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
            <Button asChild size="lg" variant="outline">
              <Link href="/categories">
                عرض كل المنتجات
              </Link>
            </Button>
          </div>
      </div>
    </>
  );
}
