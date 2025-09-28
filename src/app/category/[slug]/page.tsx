
import { categoriesList } from '@/lib/categories';
import CategoryClientPage from './client-page';
import { notFound } from 'next/navigation';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // This function now correctly uses the array `categoriesList`
  return categoriesList.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Find the category to ensure it exists before rendering
  const categoryExists = categoriesList.some(c => c.slug === params.slug);
  if (!categoryExists) {
    notFound();
  }

  // The page is a Server Component that renders the Client Component
  return <CategoryClientPage params={params} />;
}
