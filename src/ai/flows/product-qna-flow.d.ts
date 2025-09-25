/**
 * @fileOverview Type definitions for the product Q&A flow.
 *
 * - ProductQnaInput - The input type for the answerProductQuestion function.
 * - ProductQnaOutput - The return type for the answerProductQuestion function.
 */

export type ProductQnaInput = {
  productName: string;
  productDescription: string;
  question: string;
};

export type ProductQnaOutput = {
  answer: string;
};
