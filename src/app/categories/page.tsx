
import { categoriesList } from '@/lib/categories';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-headline font-bold">
          أقسام المتجر
        </h1>
        <p className="text-muted-foreground mt-2">
          تصفح منتجاتنا حسب القسم الذي تفضله.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesList.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.slug} href={`/category/${category.slug}`} className="group block">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <CardHeader className="flex flex-col items-center justify-center text-center p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 border-2 border-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-10 w-10 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                  <CardDescription className="mt-2 text-center">{category.description}</CardDescription>
                   <div className="mt-4 flex items-center text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                        <span>تصفح القسم</span>
                        <ArrowLeft className="me-2 h-4 w-4" />
                    </div>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
