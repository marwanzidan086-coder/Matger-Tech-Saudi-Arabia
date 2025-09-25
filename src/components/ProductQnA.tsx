'use client';

import { useState } from 'react';
import { Bot, Loader2, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { type Product } from '@/lib/types';
import { answerProductQuestion } from '@/ai/flows/product-qna-flow';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

type ProductQnAProps = {
  product: Product;
};

export default function ProductQnA({ product }: ProductQnAProps) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    setError(null);

    try {
      const result = await answerProductQuestion({
        productName: product.name,
        productDescription: product.description,
        question: question,
      });
      setAnswer(result.answer);
    } catch (e) {
      console.error(e);
      if (e instanceof Error && (e.message.includes('API key') || e.message.includes('GEMINI_API_KEY'))) {
        setError('ميزة خبير المنتج معطلة حاليًا. تحتاج إلى مفتاح Gemini API صالح لتفعيلها.');
      } else {
        setError('عذراً، حدث خطأ ما أثناء محاولة الحصول على إجابة.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-primary">
          <Sparkles className="h-6 w-6" />
          اسأل خبير المنتج
        </CardTitle>
        <CardDescription>
          هل لديك سؤال عن هذا المنتج؟ دع مساعدنا الذكي يجيبك.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="مثال: هل هي مقاومة للماء؟"
            className="flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>

        {isLoading && (
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>يقوم خبيرنا بالبحث عن إجابة...</span>
          </div>
        )}

        {error && (
            <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {answer && (
          <Alert className="mt-4 border-dashed">
            <Bot className="h-5 w-5" />
            <AlertTitle className="font-bold">إجابة الخبير</AlertTitle>
            <AlertDescription className="mt-2 text-base">
                {answer}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
