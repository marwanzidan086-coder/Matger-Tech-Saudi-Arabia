'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { type Order } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Omit<Order, 'createdAt'>) => void;
  clearOrders: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useLocalStorage<Order[]>('matger_orders', []);

  const addOrder = (order: Omit<Order, 'createdAt'>) => {
    const newOrder: Order = {
      ...order,
      createdAt: Date.now(), // Add timestamp when order is created
    }
    setOrders(prevOrders => [newOrder, ...prevOrders]);
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
