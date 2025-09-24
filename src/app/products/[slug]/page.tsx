import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { AddToWishlistButton } from '@/components/AddToWishlistButton';
import { OrderNowButton } from '@/components/OrderNowButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SimilarProducts from '@/components/SimilarProducts';
import { Separator } from '@/components/ui/separator';

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
           <Carousel className="w-full max-w-md" dir="ltr">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="pl-4">
                    <div className="relative aspect-square">
                      <Image
                        src={image}
                        alt={`${product.name} - image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint="product image"
                      />
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute start-2" />
            <CarouselNext className="absolute end-2" />
          </Carousel>
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold font-mono text-primary">
            {product.price.toFixed(2)} ج.م
          </p>
          <div
              className="text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br />') }}
          />

          <div className="flex flex-col gap-4 pt-4">
            <OrderNowButton product={product} />
            <div className="grid grid-cols-2 gap-4">
                <AddToCartButton product={product} />
                <AddToWishlistButton product={product} />
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-12" />
      <SimilarProducts currentProduct={product} />
    </div>
  );
}
