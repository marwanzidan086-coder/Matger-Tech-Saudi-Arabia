/**
 * @fileOverview Type definitions for the product search flow.
 * 
 * - ProductSearchInput - The input type for the searchProducts function.
 * - ProductSearchOutput - The return type for the searchProducts function.
 */

export type ProductSearchInput = {
  query: string;
};

export type ProductSearchOutput = {
  results: {
    slug: string;
  }[];
};
