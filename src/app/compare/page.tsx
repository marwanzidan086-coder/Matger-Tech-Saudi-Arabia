'use client';

import { Suspense } from 'react';
import { useComparison } from '@/contexts/ComparisonContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Product } from '@/lib/types';
import { compareProducts } from '@/ai/flows/compare-products-flow';
import { ComparisonResult } from '@/lib/types';
import { Loader2, GitCompareArrows, Sparkles, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ProductCard from '@/components/ProductCard';
import { Separator } from '@/components/ui/separator';


function ComparisonPageContent() {
  const { comparisonList } = useComparison();
  const router = useRouter();
  const [product1, setProduct1] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [result, setResult] = useState<ComparisonResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (comparisonList.length < 2) {
      router.replace('/');
      return;
    }
    setProduct1(comparisonList[0]);
    setProduct2(comparisonList[1]);
  }, [comparisonList, router]);

  useEffect(() => {
    if (!product1 || !product2) return;

    const runComparison = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const p1Data = { name: product1.name, description: product1.description, price: product1.price, category: product1.category, warranty: product1.warranty };
        const p2Data = { name: product2.name, description: product2.description, price: product2.price, category: product2.category, warranty: product2.warranty };

        const response = await compareProducts({ product1: p1Data, product2: p2Data });
        setResult(response);
      } catch (e) {
        console.error("AI comparison failed:", e);
        if (e instanceof Error && (e.message.includes('API key') || e.message.includes('GEMINI_API_KEY'))) {
            setError('ميزة المقارنة الذكية معطلة حاليًا. تحتاج إلى مفتاح Gemini API صالح لتفعيلها.');
        } else {
            setError('حدث خطأ أثناء تحليل المقارنة. الرجاء المحاولة مرة أخرى.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    runComparison();

  }, [product1, product2]);

  if (!product1 || !product2) {
    return <div className="flex items-center justify-center min-h-[60vh]"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <GitCompareArrows className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          مقارنة المنتجات
        </h1>
        <p className="text-muted-foreground mt-2">
          نظرة مفصلة لمساعدتك على اتخاذ القرار الصحيح.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12">
        <ProductCard product={product1} />
        <ProductCard product={product2} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>التحليل الذكي</CardTitle>
          <CardDescription>يقوم خبيرنا الذكي بتحليل الفروقات لمساعدتك.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-lg font-semibold">جاري تحليل المنتجات...</p>
              <p className="text-muted-foreground">يقوم الذكاء الاصطناعي بمقارنة المواصفات الآن.</p>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>خطأ في التحليل</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && !isLoading && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-center">جدول المقارنة</h3>
                <div className="border rounded-lg p-4 space-y-4">
                  {result.comparisonTable.map((row, index) => (
                    <div key={index}>
                      <div className="text-center font-bold text-lg mb-3">{row.feature}</div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground truncate">{product1.name}</p>
                          <p className="mt-1 text-base">{row.product1Value}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground truncate">{product2.name}</p>
                          <p className="mt-1 text-base">{row.product2Value}</p>
                        </div>
                      </div>
                      {index < result.comparisonTable.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Alert className="border-primary/20 bg-primary/5">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <AlertTitle className="text-xl font-bold text-primary mb-2">خلاصة الخبير</AlertTitle>
                  <AlertDescription className="text-base leading-relaxed whitespace-pre-wrap">
                    {result.summary}
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link href="/">العودة إلى المتجر</Link>
        </Button>
      </div>
    </div>
  );
}


export default function ComparePage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">جاري تحميل صفحة المقارنة...</p>
            </div>
        }>
            <ComparisonPageContent />
        </Suspense>
    )
}
