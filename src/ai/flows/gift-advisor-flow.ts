
'use server';
/**
 * @fileOverview A Genkit flow for providing personalized gift recommendations.
 *
 * - suggestGift - A function that suggests gifts based on user input.
 */

import { ai } from '@/ai/genkit';
import { products } from '@/data/products';
import { z } from 'zod';
import type { GiftAdvisorInput, GiftAdvisorOutput } from './gift-advisor-flow.d';
import Fuse from 'fuse.js';

// Zod schemas are defined here, on the server, to validate flow input/output.
const GiftAdvisorInputSchema = z.object({
  recipient: z.string().describe('The person the gift is for (e.g., friend, father, partner).'),
  interests: z.string().describe('The main interests of the recipient (e.g., technology, gaming, coffee, health).'),
  budget: z.string().describe('The user\'s approximate budget (e.g., "cheap", "mid-range", "expensive", "any").'),
});

const GiftAdvisorOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      slug: z.string().describe('The product slug/ID from the catalog.'),
      name: z.string().describe('The name of the recommended product.'),
      justification: z.string().describe('A short, smart, and convincing reason in Arabic explaining why this is a great gift for the person.'),
    })
  ).describe('An array of 2-3 recommended products.'),
});


export async function suggestGift(input: GiftAdvisorInput): Promise<GiftAdvisorOutput> {
  return giftAdvisorFlow(input);
}


const prompt = ai.definePrompt({
  name: 'giftAdvisorPrompt',
  input: { schema: z.object({ ...GiftAdvisorInputSchema.shape, productCatalog: z.string() }) },
  output: { schema: GiftAdvisorOutputSchema },
  prompt: `
You are "خبير الهدايا الذكي" (The Smart Gift Expert) for an online tech store. Your personality is friendly, smart, and helpful. Your goal is to help users find the perfect tech gift from a pre-filtered list of relevant products.

You will be given the recipient, their interests, the user's budget, and a catalog of pre-selected relevant products. You MUST recommend 2-3 products from THIS pre-selected catalog.

For each recommendation, you MUST provide the product slug, name, and a short, personalized, and convincing justification in ARABIC. The justification should connect the product to the recipient's interests and be compelling.

**User's Request:**
- Gift for: {{{recipient}}}
- Interests: {{{interests}}}
- Budget: {{{budget}}}

**Relevant Product Catalog:**
---
{{productCatalog}}
---

Analyze the user's request and the provided product catalog carefully. Select the most suitable gifts and provide your response in the required JSON format. If no products seem suitable from the provided list, return an empty recommendations array.
  `,
});

const fuse = new Fuse(products, {
  keys: ['name', 'description', 'category'],
  includeScore: true,
  threshold: 0.4,
});


const giftAdvisorFlow = ai.defineFlow(
  {
    name: 'giftAdvisorFlow',
    inputSchema: GiftAdvisorInputSchema,
    outputSchema: GiftAdvisorOutputSchema,
  },
  async (input) => {
    // 1. Pre-filter products using local search (Fuse.js)
    const searchResults = fuse.search(input.interests);
    const relevantProducts = searchResults.slice(0, 10).map(result => result.item); // Take top 10 relevant items

    // If no relevant products are found locally, return empty.
    if (relevantProducts.length === 0) {
      return { recommendations: [] };
    }

    // 2. Prepare the smaller product catalog string for the AI
    const productCatalog = relevantProducts.map(p => 
      `- ID (slug): ${p.slug}\n  Name: ${p.name}\n  Price: ${p.price.toFixed(2)}\n  Description: ${p.description}`
    ).join('\n\n');

    // 3. Call the AI with the filtered list
    const { output } = await prompt({
        ...input,
        productCatalog: productCatalog
    });
    
    return output || { recommendations: [] };
  }
);
