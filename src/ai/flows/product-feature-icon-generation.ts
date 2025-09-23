'use server';

/**
 * @fileOverview A Genkit flow for analyzing product descriptions and displaying relevant icons next to product features.
 *
 * - generateFeatureIcons - A function that handles the generation of feature icons based on product description.
 * - FeatureIconsInput - The input type for the generateFeatureIcons function.
 * - FeatureIconsOutput - The return type for the generateFeatureIcons function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FeatureIconsInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The description of the product to analyze.'),
});
export type FeatureIconsInput = z.infer<typeof FeatureIconsInputSchema>;

const FeatureIconsOutputSchema = z.object({
  featureIcons: z.array(
    z.object({
      feature: z.string().describe('The product feature.'),
      icon: z.string().describe('The name of the icon to display for the feature.'),
    })
  ).describe('An array of feature and icon name pairs.'),
});
export type FeatureIconsOutput = z.infer<typeof FeatureIconsOutputSchema>;

export async function generateFeatureIcons(input: FeatureIconsInput): Promise<FeatureIconsOutput> {
  return generateFeatureIconsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'featureIconsPrompt',
  input: {schema: FeatureIconsInputSchema},
  output: {schema: FeatureIconsOutputSchema},
  prompt: `You are an AI assistant that analyzes product descriptions and identifies key features and their corresponding icons.

  Given the following product description, identify the key features and suggest an appropriate icon name from lucide-react or heroicons for each feature.

  Product Description: {{{productDescription}}}

  Return the output as a JSON array of feature and icon name pairs.
  `,
});

const generateFeatureIconsFlow = ai.defineFlow(
  {
    name: 'generateFeatureIconsFlow',
    inputSchema: FeatureIconsInputSchema,
    outputSchema: FeatureIconsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
