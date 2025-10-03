import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categoriesList } from '@/lib/categories';

const URL = 'https://matger.tech'; // Replace with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const productsUrls = products.map((product) => {
    return {
      url: `${URL}/products/${product.slug}`,
      lastModified: new Date(),
    };
  });

  const categoriesUrls = categoriesList.map((category) => {
    return {
      url: `${URL}/category/${category.slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: URL,
      lastModified: new Date(),
    },
    {
      url: `${URL}/all-products`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/categories`,
      lastModified: new Date(),
    },
    ...productsUrls,
    ...categoriesUrls,
  ];
}
