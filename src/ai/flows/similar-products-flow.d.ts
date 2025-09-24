/**
 * @fileOverview Type definitions for the similar products flow.
 *
 * - SimilarProductsInput - The input type for the suggestSimilarProducts function.
 * - SimilarProductsOutput - The return type for the suggestSimilarProducts function.
 */

export type SimilarProductsInput = {
  productId: string;
  productName: string;
  productDescription: string;
};

export type SimilarProductsOutput = {
  recommendations: {
      slug: string;
    }[];
};
