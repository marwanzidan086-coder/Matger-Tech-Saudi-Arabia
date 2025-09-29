
import { categoriesList } from '@/lib/categories';
import { products } from '@/data/products';
import CategoryClientPage from './client-page';
import { notFound } from 'next/navigation';
import { categories } from '@/lib/categories';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return categoriesList.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category = categories[slug];
  
  // 1. Find the category to ensure it exists before rendering
  if (!category) {
    notFound();
  }

  // 2. Filter the products for the current category on the server
  const categoryProducts = products.filter(p => p.category === slug);

  // 3. Pass the filtered products and category info to the Client Component
  return <CategoryClientPage initialProducts={categoryProducts} categorySlug={slug} />;
}
