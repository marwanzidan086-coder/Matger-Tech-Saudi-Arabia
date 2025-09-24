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


// Prepare a string of all products for the prompt
const productCatalog = products.map(p => 
  `- ID (slug): ${p.slug}\n  Name: ${p.name}\n  Price: ${p.price.toFixed(2)}\n  Description: ${p.description}`
).join('\n\n');

export async function suggestGift(input: GiftAdvisorInput): Promise<GiftAdvisorOutput> {
  return giftAdvisorFlow(input);
}


const prompt = ai.definePrompt({
  name: 'giftAdvisorPrompt',
  input: { schema: GiftAdvisorInputSchema },
  output: { schema: GiftAdvisorOutputSchema },
  prompt: `
You are "خبير الهدايا الذكي" (The Smart Gift Expert) for an online tech store. Your personality is friendly, smart, and helpful. Your goal is to help users find the perfect tech gift from the catalog.

You will be given the recipient, their interests, and the user's budget. You MUST recommend 2-3 products from the catalog below.

For each recommendation, you MUST provide the product slug, name, and a short, personalized, and convincing justification in ARABIC. The justification should connect the product to the recipient's interests and be compelling.

**User's Request:**
- Gift for: {{{recipient}}}
- Interests: {{{interests}}}
- Budget: {{{budget}}}

**Full Product Catalog:**
---
{{productCatalog}}
---

Analyze the user's request and the product catalog carefully. Select the most suitable gifts and provide your response in the required JSON format.
  `,
});

const giftAdvisorFlow = ai.defineFlow(
  {
    name: 'giftAdvisorFlow',
    inputSchema: GiftAdvisorInputSchema,
    outputSchema: GiftAdvisorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({
        ...input,
        productCatalog: productCatalog
    });
    return output || { recommendations: [] };
  }
);
