import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { AddToWishlistButton } from '@/components/AddToWishlistButton';
import FeatureIcons from '@/components/FeatureIcons';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex justify-center items-start">
          <div className="relative aspect-square w-full max-w-md bg-card rounded-lg shadow-lg overflow-hidden">
             <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                data-ai-hint="product image"
              />
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold font-mono text-primary">
            {product.price.toFixed(2)} د.م
          </p>
          <div className="text-lg leading-relaxed">
            <p>{product.description}</p>
          </div>

          <FeatureIcons productDescription={product.description} />
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
