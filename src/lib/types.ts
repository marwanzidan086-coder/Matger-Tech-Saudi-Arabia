
export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    warranty?: string; // Optional warranty field
    faq?: { question: string; answer: string }[];
    story?: string;
};
  
export type CartItem = Product & {
    quantity: number;
};
  
export type Order = {
    id: string;
    date: string;
    createdAt: number; // Added timestamp for smart status
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

export type ComparisonItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    warranty?: string;
};

export type ComparisonResult = {
    comparisonTable: {
        feature: string;
        product1Value: string;
        product2Value: string;
    }[];
    summary: string;
};
    
