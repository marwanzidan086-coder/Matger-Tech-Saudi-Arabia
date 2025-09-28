
import { categoriesList } from '@/lib/categories';
import CategoryClientPage from './client-page';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

// This part needs to be in a Server Component
export async function generateStaticParams() {
  return categoriesList.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // The page is now a Server Component that renders the Client Component
  return <CategoryClientPage params={params} />;
}
