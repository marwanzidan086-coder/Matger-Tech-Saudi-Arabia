'use client';

import { useComparison } from '@/contexts/ComparisonContext';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { X, GitCompareArrows } from 'lucide-react';
import { useIsMounted } from '@/hooks/use-is-mounted';

export default function CompareBar() {
  const { comparisonList, removeFromCompare, clearCompare } = useComparison();
  const isMounted = useIsMounted();

  if (!isMounted || comparisonList.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 md:bottom-4 inset-x-0 md:inset-x-4 z-50 animate-in slide-in-from-bottom-10 duration-500">
      <div className="container mx-auto p-4 bg-background/90 backdrop-blur-lg border-t md:border md:rounded-lg shadow-2xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-grow">
          <h3 className="hidden sm:block text-lg font-bold">قائمة المقارنة</h3>
          <div className="flex items-center gap-3">
            {comparisonList.map((item) => (
              <div key={item.id} className="relative group">
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md object-cover border"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFromCompare(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {Array.from({ length: 2 - comparisonList.length }).map((_, i) => (
              <div key={`placeholder-${i}`} className="hidden sm:flex items-center justify-center w-[60px] h-[60px] rounded-md border-2 border-dashed bg-muted/50">
                <GitCompareArrows className="h-6 w-6 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button asChild disabled={comparisonList.length < 2}>
            <Link href="/compare">
              <GitCompareArrows className="me-2 h-5 w-5" />
              قارن الآن
              <span className="hidden sm:inline"> ({comparisonList.length}/2)</span>
            </Link>
          </Button>
          <Button variant="ghost" onClick={clearCompare}>مسح الكل</Button>
        </div>
      </div>
    </div>
  );
}
