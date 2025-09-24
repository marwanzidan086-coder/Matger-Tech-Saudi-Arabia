'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { type CartItem, type Product } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';

type CartState = {
  cartItems: CartItem[];
  orderNowItem: Product | null;
};

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id:string; quantity: number } }
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_ORDER_NOW_ITEM', payload: Product | null }
  | { type: 'ADD_ORDER_NOW_ITEM_TO_CART' };


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ).filter(item => item.quantity > 0),
      };
    case 'CLEAR_CART':
        return { ...state, cartItems: [] };
    case 'SET_CART':
      return { ...state, cartItems: action.payload };
    case 'SET_ORDER_NOW_ITEM':
      return { ...state, orderNowItem: action.payload };
    case 'ADD_ORDER_NOW_ITEM_TO_CART': {
      if (!state.orderNowItem) return state;
      const existingItem = state.cartItems.find(item => item.id === state.orderNowItem!.id);
      if (existingItem) {
        // Item is already in cart, no need to add it again, just clear the orderNowItem
        return { ...state, orderNowItem: null };
      }
      // Add the orderNowItem to the cart and clear it
      return {
        ...state,
        cartItems: [...state.cartItems, { ...state.orderNowItem, quantity: 1 }],
        orderNowItem: null,
      };
    }
    default:
      return state;
  }
};

type CartContextType = {
  cartItems: CartItem[];
  orderNowItem: Product | null;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setOrderNowItem: (product: Product | null) => void;
  addOrderNowItemToCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [storedValue, setValue] = useLocalStorage<CartItem[]>('matger_cart', []);
  const initialState: CartState = { cartItems: storedValue, orderNowItem: null };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  React.useEffect(() => {
    setValue(state.cartItems);
  }, [state.cartItems, setValue]);
  
  React.useEffect(() => {
    dispatch({ type: 'SET_CART', payload: storedValue });
  }, [storedValue]);


  const addToCart = (product: Product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (id: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  const updateQuantity = (id: string, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const setOrderNowItem = (product: Product | null) => dispatch({ type: 'SET_ORDER_NOW_ITEM', payload: product });
  const addOrderNowItemToCart = () => dispatch({ type: 'ADD_ORDER_NOW_ITEM_TO_CART' });

  const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, orderNowItem: state.orderNowItem, addToCart, removeFromCart, updateQuantity, clearCart, setOrderNowItem, addOrderNowItemToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
