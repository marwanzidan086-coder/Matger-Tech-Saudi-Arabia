'use server';
/**
 * @fileOverview A Genkit flow for searching products.
 *
 * - searchProducts - A function that searches products based on a query.
 */

import { ai } from '@/ai/genkit';
import { products } from '@/data/products';
import { z } from 'zod';
import type { ProductSearchInput, ProductSearchOutput } from './product-search-flow.d';

const ProductSearchInputSchema = z.object({
  query: z.string().describe('The user\'s search query.'),
});

const ProductSearchOutputSchema = z.object({
  results: z.array(
    z.object({
      slug: z.string().describe('The product slug/ID from the catalog.'),
    })
  ).describe('An array of product slugs that match the search query.'),
});

const productCatalog = products.map(p => 
  `- Slug: ${p.slug}\n  Name: ${p.name}\n  Description: ${p.description}`
).join('\n\n');

export async function searchProducts(input: ProductSearchInput): Promise<ProductSearchOutput> {
  return productSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productSearchPrompt',
  input: { schema: ProductSearchInputSchema },
  output: { schema: ProductSearchOutputSchema },
  prompt: `
You are an intelligent search assistant for an e-commerce store. Your goal is to help users find products from the catalog even if they have spelling mistakes in their query.

You will be given a user's search query and a full product catalog. You MUST return a list of product slugs that are relevant to the search query. The results should be ordered by relevance.

**User's Search Query:**
"{{{query}}}"

**Full Product Catalog:**
---
{{productCatalog}}
---

Analyze the user's query and the catalog. Find the most relevant products and return your response in the required JSON format, containing only the slugs of the matching products.
  `,
});

const productSearchFlow = ai.defineFlow(
  {
    name: 'productSearchFlow',
    inputSchema: ProductSearchInputSchema,
    outputSchema: ProductSearchOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({
        ...input,
        productCatalog: productCatalog
    });
    return output || { results: [] };
  }
);
