'use server';
/**
 * @fileOverview A Genkit flow for suggesting similar products.
 *
 * - suggestSimilarProducts - A function that suggests similar products based on a given product.
 */

import { ai } from '@/ai/genkit';
import { products } from '@/data/products';
import { z } from 'zod';
import type { SimilarProductsInput, SimilarProductsOutput } from './similar-products-flow.d';

// Zod schemas are defined here, on the server, to validate flow input/output.
const SimilarProductsInputSchema = z.object({
  productId: z.string().describe('The ID of the product to find similarities for.'),
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The description of the product.'),
});

const SimilarProductsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      slug: z.string().describe('The product slug/ID from the catalog.'),
    })
  ).describe('An array of 3-4 recommended product slugs.'),
});

export async function suggestSimilarProducts(input: SimilarProductsInput): Promise<SimilarProductsOutput> {
  return similarProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'similarProductsPrompt',
  input: { schema: z.object({ ...SimilarProductsInputSchema.shape, productCatalog: z.string() }) },
  output: { schema: SimilarProductsOutputSchema },
  prompt: `
You are a helpful AI assistant for an e-commerce store. Your goal is to recommend similar or complementary products to a user viewing a specific item.

You will be given the current product's details and a full product catalog. You MUST recommend 3-4 different products from the catalog. Do NOT recommend the same product the user is currently viewing.

**Current Product:**
- ID: {{{productId}}}
- Name: {{{productName}}}
- Description: {{{productDescription}}}


**Full Product Catalog:**
---
{{productCatalog}}
---

Analyze the user's current product and the catalog. Select the most suitable products and provide your response in the required JSON format, containing only the slugs of the recommended products.
  `,
});

const similarProductsFlow = ai.defineFlow(
  {
    name: 'similarProductsFlow',
    inputSchema: SimilarProductsInputSchema,
    outputSchema: SimilarProductsOutputSchema,
  },
  async (input) => {
    // Filter out the current product from the catalog sent to the AI
    const productCatalog = products
      .filter(p => p.id !== input.productId)
      .map(p => `- ID: ${p.id}\n  Slug: ${p.slug}\n  Name: ${p.name}\n  Description: ${p.description}`)
      .join('\n\n');

    // If there are no other products, return empty recommendations
    if (!productCatalog) {
      return { recommendations: [] };
    }
      
    const { output } = await prompt({
        ...input,
        productCatalog: productCatalog,
    });
    return output || { recommendations: [] };
  }
);
