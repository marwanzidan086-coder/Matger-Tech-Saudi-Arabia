/**
 * @fileOverview Type definitions for the gift advisor flow.
 * 
 * - GiftAdvisorInput - The input type for the suggestGift function.
 * - GiftAdvisorOutput - The return type for the suggestGift function.
 */

// This file should only contain types, not Zod schemas,
// to avoid bundling server-side dependencies on the client.

export type GiftAdvisorInput = {
  recipient: string;
  interests: string;
  budget: string;
};

export type GiftAdvisorOutput = {
  recommendations: {
      slug: string;
      name: string;
      justification: string;
    }[];
};
