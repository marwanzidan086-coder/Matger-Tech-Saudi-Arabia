
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

You will be given the current product's details and the full product catalog (excluding the current product). You MUST recommend 3-4 different products from this catalog. Do NOT recommend the same product the user is currently viewing.

**Current Product:**
- ID: {{{productId}}}
- Name: {{{productName}}}
- Description: {{{productDescription}}}


**Full Product Catalog (excluding current product):**
---
{{productCatalog}}
---

Analyze the user's current product and the provided catalog. Select the most suitable products and provide your response in the required JSON format, containing only the slugs of the recommended products.
  `,
});


const similarProductsFlow = ai.defineFlow(
  {
    name: 'similarProductsFlow',
    inputSchema: SimilarProductsInputSchema,
    outputSchema: SimilarProductsOutputSchema,
  },
  async (input) => {
    try {
      // Filter out the current product from the full list
      const otherProducts = products.filter(p => p.id !== input.productId);
      
      // Prepare the product catalog string for the AI
      const productCatalog = otherProducts
        .map(p => `- ID: ${p.id}\n  Slug: ${p.slug}\n  Name: ${p.name}\n  Description: ${p.description}`)
        .join('\n\n');
        
      // Call the AI with the filtered list
      const { output } = await prompt({
          ...input,
          productCatalog: productCatalog,
      });

      return output || { recommendations: [] };
    } catch (error) {
      console.error('Error in similarProductsFlow:', error);
      // Return an empty list on any error to allow fallback to work gracefully.
      return { recommendations: [] };
    }
  }
);
