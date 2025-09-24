'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Gift, Bot, Sparkles, Send, Loader2 } from 'lucide-react';

import { suggestGift } from '@/ai/flows/gift-advisor-flow';
import type { GiftAdvisorOutput } from '@/ai/flows/gift-advisor-flow.d';
import { products } from '@/data/products';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import ProductCard from './ProductCard';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

// The Zod schema is now defined directly in the client component
// to avoid bundling issues between server and client.
const formSchema = z.object({
  recipient: z.string().min(1, 'هذا الحقل مطلوب'),
  interests: z.string().min(1, 'هذا الحقل مطلوب'),
  budget: z.string().min(1, 'هذا الحقل مطلوب'),
});
type GiftAdvisorFormValues = z.infer<typeof formSchema>;

export default function GiftAdvisor() {
  const [recommendations, setRecommendations] = useState<GiftAdvisorOutput['recommendations']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<GiftAdvisorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipient: '',
      interests: '',
      budget: '',
    },
  });

  const onSubmit = async (values: GiftAdvisorFormValues) => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    try {
      const result = await suggestGift(values);
      if (result && result.recommendations && result.recommendations.length > 0) {
        setRecommendations(result.recommendations);
      } else {
        setError('لم أتمكن من العثور على توصيات مناسبة. جرب تغيير كلمات البحث.');
      }
    } catch (e) {
      console.error(e);
      // Specific error for missing API key
      if (e instanceof Error && (e.message.includes('API key') || e.message.includes('GEMINI_API_KEY'))) {
        setError('ميزة خبير الهدايا معطلة حاليًا. تحتاج إلى مفتاح Gemini API صالح لتفعيلها.');
      } else {
        setError('حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getProductBySlug = (slug: string) => {
    return products.find(p => p.slug === slug);
  }

  return (
    <div id="gift-advisor" className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-xl shadow-primary/10">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4 border-2 border-primary/20">
            <Gift className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline font-bold flex items-center justify-center gap-2">
            <Sparkles className="h-7 w-7 text-amber-400" />
            خبير الهدايا الذكي
            <Sparkles className="h-7 w-7 text-amber-400" />
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            جاوب على بعض الأسئلة ودع الذكاء الاصطناعي يساعدك في اختيار الهدية التقنية المثالية!
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="recipient"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="recipient">لمن الهدية؟</Label>
                      <FormControl>
                        <Input id="recipient" placeholder="مثال: لصديقي، لأبي، لزوجتي..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="interests">ما هي اهتماماته/ها؟</Label>
                      <FormControl>
                        <Input id="interests" placeholder="مثال: الألعاب، القهوة، الرياضة..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="budget">ما هي ميزانيتك؟</Label>
                      <FormControl>
                        <Input id="budget" placeholder="مثال: بسيطة، متوسطة، فاخرة..." {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter className="p-0 pt-4">
                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      جاري البحث عن الهدية المثالية...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      اعثر لي على هدية!
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {isLoading && (
        <div className="text-center py-10">
          <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin" />
          <p className="mt-4 text-lg text-muted-foreground">يقوم خبيرنا الذكي بالبحث عن أفضل الهدايا لك...</p>
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
            <AlertTitle>تنبيه!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {recommendations.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-headline font-bold text-center mb-8">
            🎁 اقتراحات خبير الهدايا لك 🎁
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec) => {
              const product = getProductBySlug(rec.slug);
              if (!product) return null;
              
              return (
                <div key={rec.slug}>
                    <Alert className="mb-4 border-dashed border-primary/50 bg-primary/5">
                        <Bot className="h-5 w-5 text-primary" />
                        <AlertTitle className="font-bold text-primary">لماذا هذه الهدية؟</AlertTitle>
                        <AlertDescription className="mt-1">
                            {rec.justification}
                        </AlertDescription>
                    </Alert>
                    <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
