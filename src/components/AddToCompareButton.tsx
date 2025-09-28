
'use client';

import { useComparison } from '@/contexts/ComparisonContext';
import { type Product } from '@/lib/types';
import { Button, ButtonProps } from './ui/button';
import { GitCompareArrows } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useIsMounted } from '@/hooks/use-is-mounted';

interface AddToCompareButtonProps extends ButtonProps {
  product: Product;
  iconOnly?: boolean;
}

export function AddToCompareButton({ product, size, iconOnly = false, ...props }: AddToCompareButtonProps) {
  const { comparisonList, addToCompare } = useComparison();
  const [isInCompareList, setIsInCompareList] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      setIsInCompareList(comparisonList.some((item) => item.id === product.id));
    }
  }, [comparisonList, product.id, isMounted]);

  const text = isInCompareList ? 'في المقارنة' : 'أضف للمقارنة';

  if (iconOnly) {
    return (
        <Button
          onClick={() => addToCompare(product)}
          variant="outline"
          size={size || "icon"}
          disabled={isInCompareList}
          aria-label={text}
          {...props}
        >
          <GitCompareArrows className={`h-5 w-5 transition-colors ${isInCompareList ? 'text-primary' : ''}`} />
        </Button>
    )
  }

  return (
    <Button
      onClick={() => addToCompare(product)}
      variant="outline"
      size={size || "lg"}
      className="w-full"
      disabled={isInCompareList}
      {...props}
    >
      <GitCompareArrows className={`me-2 h-5 w-5 transition-colors ${isInCompareList ? 'text-primary' : ''}`} />
      {text}
    </Button>
  );
}
