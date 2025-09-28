'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { type Product } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from '@/hooks/use-toast';

type ComparisonContextType = {
  comparisonList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
};

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useLocalStorage<Product[]>('matger_comparison', []);
  const { toast } = useToast();

  const addToCompare = (product: Product) => {
    setComparisonList(prevItems => {
      if (prevItems.find(item => item.id === product.id)) {
        toast({ title: 'المنتج موجود بالفعل في قائمة المقارنة.' });
        return prevItems;
      }
      if (prevItems.length >= 2) {
        toast({
          title: 'قائمة المقارنة ممتلئة',
          description: 'يمكنك مقارنة منتجين فقط في المرة الواحدة.',
          variant: 'destructive',
        });
        return prevItems;
      }
      toast({ title: 'تمت إضافة المنتج للمقارنة بنجاح.', variant: 'success' });
      return [...prevItems, product];
    });
  };

  const removeFromCompare = (id: string) => {
    setComparisonList(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCompare = () => {
    setComparisonList([]);
  }

  return (
    <ComparisonContext.Provider value={{ comparisonList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
