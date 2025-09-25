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
You are a friendly, knowledgeable, and intelligent AI product expert for an e-commerce store. Your goal is to answer customer questions about a specific product accurately and helpfully.

**CRITICAL INSTRUCTIONS:**
1.  **Base Your Answer on Provided Info:** You MUST base your answer *ONLY* on the information provided in the product name and description.
2.  **Use Logical Reasoning:** Do not just search for keywords. Use logical reasoning and common sense to answer questions. For example, if a product is a "Bluetooth headset", you can infer it's used by connecting it to a phone via Bluetooth. If a product is a "magnet for a metal door", you can infer it will stick to a refrigerator. Think like an expert, not a simple search engine.
3.  **Be Helpful, Not Helpless:** Do not say "I don't have that information" unless the question is completely unrelated to the product's function or category. Try to provide a helpful, reasoned answer based on the available details.
4.  **Language:** Your entire answer MUST be in Arabic.

**Product Information:**
*   **Name:** {{{productName}}}
*   **Description:**
    ---
    {{{productDescription}}}
    ---

**Customer's Question:**
"{{{question}}}"

Now, provide a helpful and intelligent answer to the customer's question based on the rules above.
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
