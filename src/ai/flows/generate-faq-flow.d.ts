/**
 * @fileOverview Type definitions for the FAQ generation flow.
 *
 * - GenerateFaqInput - The input type for the generateFaq function.
 * - GenerateFaqOutput - The return type for the generateFaq function.
 */

export type GenerateFaqInput = {
  productName: string;
  productDescription: string;
};

export type GenerateFaqOutput = {
  faq: {
    question: string;
    answer: string;
  }[];
};
