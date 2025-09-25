
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
import Fuse from 'fuse.js';

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

You will be given the current product's details and a pre-filtered catalog of potentially similar products. You MUST recommend 3-4 different products from THIS pre-filtered catalog. Do NOT recommend the same product the user is currently viewing.

**Current Product:**
- ID: {{{productId}}}
- Name: {{{productName}}}
- Description: {{{productDescription}}}


**Pre-filtered Similar Product Catalog:**
---
{{productCatalog}}
---

Analyze the user's current product and the provided catalog. Select the most suitable products and provide your response in the required JSON format, containing only the slugs of the recommended products.
  `,
});

const fuse = new Fuse(products, {
  keys: ['name', 'description', 'category'],
  threshold: 0.3,
});


const similarProductsFlow = ai.defineFlow(
  {
    name: 'similarProductsFlow',
    inputSchema: SimilarProductsInputSchema,
    outputSchema: SimilarProductsOutputSchema,
  },
  async (input) => {
    // 1. Find the current product to get its category and description
    const currentProduct = products.find(p => p.id === input.productId);
    if (!currentProduct) {
      return { recommendations: [] };
    }

    // 2. Pre-filter products using local search (Fuse.js)
    // We search based on the current product's name and description to find similar ones.
    const searchResults = fuse.search(currentProduct.name);
    let relevantProducts = searchResults.map(result => result.item);

    // Filter out the current product itself from the results
    relevantProducts = relevantProducts.filter(p => p.id !== input.productId);

    // Take the top 10 most relevant products
    const topRelevantProducts = relevantProducts.slice(0, 10);
    
    // If no other products are found, return empty.
    if (topRelevantProducts.length === 0) {
      return { recommendations: [] };
    }
    
    // 3. Prepare the smaller product catalog string for the AI
    const productCatalog = topRelevantProducts
      .map(p => `- ID: ${p.id}\n  Slug: ${p.slug}\n  Name: ${p.name}\n  Description: ${p.description}`)
      .join('\n\n');
      
    // 4. Call the AI with the filtered list
    const { output } = await prompt({
        ...input,
        productCatalog: productCatalog,
    });

    return output || { recommendations: [] };
  }
);
