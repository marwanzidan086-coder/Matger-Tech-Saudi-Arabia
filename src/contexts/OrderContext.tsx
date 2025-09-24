'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { type Order } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  clearOrders: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useLocalStorage<Order[]>('matger_orders', []);

  const addOrder = (order: Order) => {
    setOrders(prevOrders => [order, ...prevOrders]);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
