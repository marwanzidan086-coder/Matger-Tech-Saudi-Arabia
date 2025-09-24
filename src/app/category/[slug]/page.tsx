import { products } from '@/data/products';
import { categories, categoriesList } from '@/lib/categories';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
  const category = categories[params.slug];

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.slug
  );
  
  const Icon = category.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="mb-4 rounded-full bg-primary/10 p-4 border-2 border-primary/20">
            <Icon className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          {category.name}
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground mb-4">
            لا توجد منتجات في هذا القسم حاليًا.
          </p>
          <Button asChild>
            <Link href="/categories">العودة إلى الأقسام</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
