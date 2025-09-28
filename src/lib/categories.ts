import type { Category } from '@/lib/types';
import { Cpu, Blocks, HeartPulse, Home } from 'lucide-react';

type CategoryInfo = {
    [key: string]: Omit<Category, 'slug'>;
};

const categoryInfo: CategoryInfo = {
    electronics: {
        name: 'إلكترونيات',
        icon: Cpu,
        description: 'أحدث الأجهزة الإلكترونية وملحقاتها.',
    },
    misc: {
        name: 'منتجات متنوعة',
        icon: Blocks,
        description: 'مجموعة من المنتجات المبتكرة والمتنوعة.',
    },
    health: {
        name: 'صحة وجمال',
        icon: HeartPulse,
        description: 'أجهزة ومنتجات للعناية بصحتك وجمالك.',
    },
    home: {
        name: 'منتجات منزلية',
        icon: Home,
        description: 'حلول ذكية ومنتجات عصرية لمنزلك.',
    },
};

// This is the definitive list (array) of categories, used for generating pages and listings.
export const categoriesList: Category[] = Object.entries(categoryInfo).map(
    ([slug, category]) => ({
      ...category,
      slug,
    })
);

type CategoriesObject = {
    [key: string]: Category;
};

// This is a helper object for quick lookups by slug (e.g., categories['electronics']).
export const categories: CategoriesObject = categoriesList.reduce((acc, category) => {
    acc[category.slug] = category;
    return acc;
}, {} as CategoriesObject);
