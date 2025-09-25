export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    warranty?: string; // Optional warranty field
    story?: string;
    faq?: { question: string; answer: string }[];
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

export type Category = {
    name: string;
    slug: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
};
