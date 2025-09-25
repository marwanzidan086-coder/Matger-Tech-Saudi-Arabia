'use server';
/**
 * @fileOverview A Genkit flow for answering customer questions about a specific product.
 *
 * - answerProductQuestion - A function that provides answers based on product details.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { ProductQnaInput, ProductQnaOutput } from './product-qna-flow.d';

const ProductQnaInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The detailed description of the product, including all features and specifications.'),
  question: z.string().describe('The customer\'s question about the product.'),
});

const ProductQnaOutputSchema = z.object({
  answer: z.string().describe('A helpful and accurate answer to the customer\'s question, based *only* on the provided product information. The answer should be in Arabic.'),
});

export async function answerProductQuestion(input: ProductQnaInput): Promise<ProductQnaOutput> {
  return productQnaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productQnaPrompt',
  input: { schema: ProductQnaInputSchema },
  output: { schema: ProductQnaOutputSchema },
  prompt: `
You are a friendly, knowledgeable, and helpful AI product expert for an e-commerce store. Your goal is to answer customer questions about a specific product accurately and concisely.

**IMPORTANT:** You MUST base your answer *ONLY* on the information provided in the product name and description below. Do not make up features, specifications, or any other information. If the answer is not in the provided text, you MUST politely say in Arabic that you do not have that information. Your answer must be in Arabic.

**Product Information:**
*   **Name:** {{{productName}}}
*   **Description:**
    ---
    {{{productDescription}}}
    ---

**Customer's Question:**
"{{{question}}}"

Now, provide a helpful answer to the customer's question.
  `,
});

const productQnaFlow = ai.defineFlow(
  {
    name: 'productQnaFlow',
    inputSchema: ProductQnaInputSchema,
    outputSchema: ProductQnaOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output || { answer: 'عذراً، لم أتمكن من العثور على إجابة في الوقت الحالي.' };
  }
);
