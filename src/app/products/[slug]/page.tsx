

'use client';

import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { AddToWishlistButton } from '@/components/AddToWishlistButton';
import { OrderNowButton } from '@/components/OrderNowButton';
import SimilarProducts from '@/components/SimilarProducts';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Truck, Clock } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductFaq from '@/components/ProductFaq';
import ProductStory from '@/components/ProductStory';
import Image from 'next/image';
import { cn } from '@/lib/utils';


function ParsedDescription({ description }: { description: string }) {
    const intro = useMemo(() => {
        const parts = description.split(/###(FEATURES|DETAILS)###/);
        return parts[0] || '';
    }, [description]);

    return (
        <div>
            <p className="text-base leading-relaxed text-foreground/80">
                {intro.trim()}
            </p>
        </div>
    );
}

function ProductFeatures({ description }: { description: string }) {
    const { features, details } = useMemo(() => {
        const parts = description.split(/###(FEATURES|DETAILS)###/);
        
        const featuresIndex = description.includes('###FEATURES###') ? parts.findIndex(p => p === 'FEATURES') + 1 : -1;
        const featuresList = featuresIndex !== -1 
          ? parts[featuresIndex].trim().split('\n').map(f => f.replace(/^- /, '')).filter(f => f) 
          : [];

        const detailsIndex = description.includes('###DETAILS###') ? parts.findIndex(p => p === 'DETAILS') + 1 : -1;
        const detailsList = detailsIndex !== -1
          ? parts[detailsIndex].trim().split('\n').map(d => {
              const [key, ...valueParts] = d.replace(/^- /, '').split(':');
              return { key: key.trim(), value: valueParts.join(':').trim() };
            }).filter(d => d.key && d.value)
          : [];
          
        return { features: featuresList, details: detailsList };
    }, [description]);

    if (features.length === 0 && details.length === 0) {
        return null;
    }

    return (
        <div className="space-y-6">
            {features.length > 0 && (
                <div>
                    <h3 className="text-xl font-bold mb-3">أبرز المميزات</h3>
                    <ul className="space-y-2 list-disc list-inside text-foreground/80">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            )}
            {details.length > 0 && (
                 <div>
                    <h3 className="text-xl font-bold mb-3">المواصفات الفنية</h3>
                    <ul className="space-y-2 text-foreground/80">
                        {details.map((detail, index) => (
                            <li key={index} className="flex justify-between border-b pb-2">
                                <span className="font-semibold">{detail.key}</span>
                                <span>{detail.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


// --- Main Product Page Component ---
export default function ProductPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const product = products.find((p) => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  const mainImage = product.images[activeImage];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Product Images */}
        <div className="flex flex-col gap-4 md:sticky top-24 self-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-lg">
                <Image
                    src={mainImage}
                    alt={`${product.name} - main image`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    key={mainImage}
                    priority
                />
            </div>
            <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={cn(
                    "relative aspect-square w-full rounded-md overflow-hidden border-2 transition-all",
                    activeImage === index ? 'border-primary shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    )}
                >
                    <Image
                    src={image}
                    alt={`${product.name} - thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="10vw"
                    />
                </button>
                ))}
            </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
            <p className="text-3xl font-bold font-mono text-primary">
              {product.price.toFixed(2)} ر.س
            </p>
          </div>

          <Card className="bg-muted/40 border-dashed">
            <CardContent className="p-6">
              <ParsedDescription description={product.description} />
            </CardContent>
          </Card>

          {product.story && <ProductStory story={product.story} />}
          
          <ProductFeatures description={product.description} />

          <ProductFaq product={product} />

          <Card>
            <CardContent className="p-4 grid grid-cols-3 gap-4 text-center">
                {product.warranty && (
                    <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="h-8 w-8 text-primary"/>
                        <span className="text-sm font-semibold text-muted-foreground">ضمان لمدة {product.warranty}</span>
                    </div>
                )}
                <div className="flex flex-col items-center gap-2">
                    <Truck className="h-8 w-8 text-primary"/>
                    <span className="text-sm font-semibold text-muted-foreground">شحن سريع</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Clock className="h-8 w-8 text-primary"/>
                    <span className="text-sm font-semibold text-muted-foreground">دعم فني 24/7</span>
                </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 pt-4">
            <OrderNowButton product={product} />
            <div className="grid grid-cols-2 gap-3">
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
