export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
};
  
export type CartItem = Product & {
    quantity: number;
};
  
export type Order = {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: 'قيد المراجعة' | 'مكتمل' | 'ملغي';
};
