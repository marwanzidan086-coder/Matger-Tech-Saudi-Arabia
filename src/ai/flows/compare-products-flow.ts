'use server';
/**
 * @fileOverview A Genkit flow for comparing two products and providing a smart summary.
 *
 * - compareProducts - A function that analyzes two products and returns a comparison table and summary.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { ComparisonItem, ComparisonResult } from '@/lib/types';


const CompareProductsInputSchema = z.object({
  product1: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    warranty: z.string().optional(),
  }),
  product2: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    warranty: z.string().optional(),
  }),
});

const CompareProductsOutputSchema = z.object({
  comparisonTable: z.array(
    z.object({
      feature: z.string().describe("The feature being compared (e.g., 'السعر', 'البطارية', 'الكاميرا')."),
      product1Value: z.string().describe("The value of the feature for Product 1."),
      product2Value: z.string().describe("The value of the feature for Product 2."),
    })
  ).describe("A table comparing the key features of the two products."),
  summary: z.string().describe("A smart, analytical summary in Arabic that explains the key differences, pros, and cons, and provides a final recommendation based on potential user needs (e.g., budget, performance, specific features). This summary should be insightful and help the user make an informed decision."),
});

// We are not exporting input/output types from a .d.ts file here because this flow is only called from the server (compare page).
export async function compareProducts(input: { product1: ComparisonItem, product2: ComparisonItem }): Promise<ComparisonResult> {
  return compareProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'compareProductsPrompt',
  input: { schema: CompareProductsInputSchema },
  output: { schema: CompareProductsOutputSchema },
  prompt: `
You are an expert, neutral, and highly analytical product comparison assistant for an e-commerce store. Your goal is to help users make informed decisions by providing a clear, objective comparison between two products. Your entire output MUST be in Arabic.

**Task:**
Analyze the two products provided below. Create a comparison table highlighting the most important features, and then write a smart, analytical summary.

**CRITICAL INSTRUCTIONS for the Summary:**
1.  **Go Beyond the Obvious:** Do not just list the features again. Analyze them. Explain *why* a difference matters. For example, instead of saying "Product A has a bigger battery", say "Product A has a larger battery, which means it will likely last a full day longer, making it ideal for travelers."
2.  **Identify Target Users:** Based on the differences, suggest which product is better for which type of user. (e.g., "For gamers, Product B is superior due to its faster processor...", "For users on a budget, Product A offers better value...").
3.  **Acknowledge Pros and Cons:** Be balanced. Mention the advantages of each product but also its potential drawbacks compared to the other.
4.  **Final Recommendation:** Conclude with a clear, concise recommendation that summarizes which product to choose based on the most likely user priorities (e.g., price vs. performance, portability vs. power).

---
**Product 1:**
- Name: {{{product1.name}}}
- Price: {{{product1.price}}}
- Warranty: {{{product1.warranty}}}
- Category: {{{product1.category}}}
- Description:
{{{product1.description}}}
---

---
**Product 2:**
- Name: {{{product2.name}}}
- Price: {{{product2.price}}}
- Warranty: {{{product2.warranty}}}
- Category: {{{product2.category}}}
- Description:
{{{product2.description}}}
---

Now, generate the comparison table and the insightful summary in the required JSON format.
  `,
});

const compareProductsFlow = ai.defineFlow(
  {
    name: 'compareProductsFlow',
    inputSchema: CompareProductsInputSchema,
    outputSchema: CompareProductsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output || { comparisonTable: [], summary: 'عذراً، لم أتمكن من إنشاء المقارنة حالياً.' };
  }
);
