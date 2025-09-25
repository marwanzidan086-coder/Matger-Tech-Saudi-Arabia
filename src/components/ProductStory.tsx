'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductStoryProps = {
  story: string;
};

export default function ProductStory({ story }: ProductStoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!story) {
    return null;
  }

  return (
    <div className="space-y-4">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full text-lg font-bold border-2 border-dashed border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5 text-primary hover:text-primary/90 hover:bg-primary/10 transition-all duration-300 shadow-sm hover:shadow-lg"
      >
        <Sparkles className="me-2 h-5 w-5 animate-pulse" />
        {isOpen ? 'إخفاء حكاية المنتج' : 'اضغط هنا لسماع حكاية المنتج'}
      </Button>
      {isOpen && (
        <Card className="bg-muted/30 border-primary/20 animate-in fade-in-50 slide-in-from-top-5 duration-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-primary/80 mt-1" />
              <p className="text-base leading-relaxed text-foreground/90 whitespace-pre-wrap">
                {story}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
