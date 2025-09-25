'use server';
/**
 * @fileOverview A Genkit flow for generating Frequently Asked Questions for a product.
 *
 * - generateFaq - A function that creates a list of question/answer pairs.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { GenerateFaqInput, GenerateFaqOutput } from './generate-faq-flow.d';

const GenerateFaqInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The detailed description of the product, including features and specifications.'),
});

const GenerateFaqOutputSchema = z.object({
  faq: z.array(
    z.object({
      question: z.string().describe('A common, relevant question a customer might ask about the product.'),
      answer: z.string().describe('A clear and concise answer to the question, based *only* on the provided product description.'),
    })
  ).describe('An array of 4-5 frequently asked questions and their answers.'),
});

export async function generateFaq(input: GenerateFaqInput): Promise<GenerateFaqOutput> {
  return generateFaqFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFaqPrompt',
  input: { schema: GenerateFaqInputSchema },
  output: { schema: GenerateFaqOutputSchema },
  prompt: `
You are an expert e-commerce copywriter. Your task is to create a "Frequently Asked Questions" (FAQ) section for a product page based on its name and description.

Generate 4-5 relevant and common questions a potential customer might have. The answers MUST be derived *only* from the information provided in the product description. Do not invent information or make assumptions. Keep the answers clear, concise, and helpful.

Product Name: {{{productName}}}
Product Description:
---
{{{productDescription}}}
---

Generate the FAQ in the required JSON format.
  `,
});

const generateFaqFlow = ai.defineFlow(
  {
    name: 'generateFaqFlow',
    inputSchema: GenerateFaqInputSchema,
    outputSchema: GenerateFaqOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output || { faq: [] };
  }
);
