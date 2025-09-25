

'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { AddToWishlistButton } from '@/components/AddToWishlistButton';
import { OrderNowButton } from '@/components/OrderNowButton';
import SimilarProducts from '@/components/SimilarProducts';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Truck, Clock, Zap, BatteryCharging, Droplets, Usb, Speaker, Bluetooth, Weight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Helper Component to Render Description ---
const ICONS_MAP: { [key: string]: React.ComponentType<LucideProps> } = {
  'صوت': Speaker,
  'bassup': Speaker,
  'بطارية': BatteryCharging,
  'شحن': Usb,
  'ماء': Droplets,
  'بلوتوث': Bluetooth,
  'وزن': Weight,
  'إضاءة': Zap,
  'باور بانك': BatteryCharging,
  'مغناطيسي': Zap,
};

const getIconForFeature = (feature: string) => {
  const lowerFeature = feature.toLowerCase();
  for (const key in ICONS_MAP) {
    if (lowerFeature.includes(key)) {
      return ICONS_MAP[key];
    }
  }
  return Zap; // Default icon
};


function ParsedDescription({ description }: { description: string }) {
  const { intro, features, details } = useMemo(() => {
    const parts = description.split(/###(FEATURES|DETAILS)###/);
    const intro = parts[0] || '';
    
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
      
    return { intro, features: featuresList, details: detailsList };
  }, [description]);

  return (
    <div>
      <p className="text-base leading-relaxed text-foreground/80 mb-8">
        {intro.trim()}
      </p>

      {features.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary drop-shadow-lg">✨ مميزات المنتج ✨</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => {
              const Icon = getIconForFeature(feature);
              return (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {details.length > 0 && (
         <div>
          <h3 className="text-xl font-bold mb-3 text-primary drop-shadow-lg">🚀 تفاصيل سريعة 🚀</h3>
            <ul className="space-y-2">
                {details.map(({ key, value }, index) => (
                    <li key={index} className="flex justify-between border-b pb-2">
                        <span className="font-semibold text-foreground/90">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
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

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 md:sticky top-24 self-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border shadow-lg group">
                <Image
                    src={mainImage}
                    alt={`${product.name} - main image`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    key={mainImage}
                    data-ai-hint="product image"
                />
                {product.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handlePrevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors"
                      aria-label="الصورة السابقة"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition-colors"
                      aria-label="الصورة التالية"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </>
                )}
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
                            data-ai-hint="product image"
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

          <Card>
            <CardContent className="p-4 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="h-8 w-8 text-primary"/>
                    <span className="text-sm font-semibold text-muted-foreground">ضمان لمدة عامين</span>
                </div>
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
