import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <div id="products" className="container mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">
          منتجاتنا
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
