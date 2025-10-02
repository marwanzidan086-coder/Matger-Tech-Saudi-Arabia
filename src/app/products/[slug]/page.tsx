

'use client';
import { Suspense } from 'react';
import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { AddToWishlistButton } from '@/components/AddToWishlistButton';
import { AddToCompareButton } from '@/components/AddToCompareButton';
import { OrderNowButton } from '@/components/OrderNowButton';
import SimilarProducts from '@/components/SimilarProducts';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Truck, Clock, Check, List, Settings, Loader2 } from 'lucide-react';
import ProductFaq from '@/components/ProductFaq';
import ProductQnA from '@/components/ProductQnA';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductStory from '@/components/ProductStory';
import ProductReviews from '@/components/ProductReviews';


// --- Main Product Page Component ---
function ProductPageContent() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Parse description
  const [mainDesc, featuresAndDetails] = product.description.split('###FEATURES###');
  const [features, details] = featuresAndDetails ? featuresAndDetails.split('###DETAILS###') : ['', ''];

  const featuresList = features ? features.split('\n').map(f => f.trim()).filter(f => f.startsWith('-')).map(f => f.substring(1).trim()) : [];
  const detailsList = details ? details.split('\n').map(d => d.trim()).filter(d => d.startsWith('-')).map(d => d.substring(1).trim()) : [];


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        <ProductImageGallery images={product.images} productName={product.name} />

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">{product.name}</h1>
            <p className="text-3xl font-bold font-mono text-primary">
              {product.price.toFixed(2)} ر.س
            </p>
          </div>

          <ProductStory story={product.story || ''} />

          <Card className="bg-muted/40 border-dashed">
             <CardContent className="p-6 space-y-6">
              <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground/80">
                {mainDesc.trim()}
              </p>

              {featuresList.length > 0 && (
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><List className="h-5 w-5 text-primary"/>أهم المميزات:</h3>
                  <ul className="space-y-2 pr-4">
                    {featuresList.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {detailsList.length > 0 && (
                 <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Settings className="h-5 w-5 text-primary"/>تفاصيل سريعة:</h3>
                  <ul className="space-y-2 pr-4">
                    {detailsList.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2">
                         <ShieldCheck className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </CardContent>
          </Card>

          <ProductReviews product={product} />
          
          <ProductFaq product={product} />

          <ProductQnA product={product} />

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
            <div className="grid grid-cols-3 gap-3">
                <AddToCartButton product={product} className="col-span-1" />
                <AddToWishlistButton product={product} />
                <AddToCompareButton product={product} />
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-12" />
      
      <SimilarProducts currentProduct={product} />
    </div>
  );
}

export default function ProductPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">جاري تحميل المنتج...</p>
            </div>
        }>
            <ProductPageContent />
        </Suspense>
    )
}
