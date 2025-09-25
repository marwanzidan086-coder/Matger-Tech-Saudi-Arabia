'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
import { type Product } from "@/lib/types";

type ProductFaqProps = {
  product: Product;
};

export default function ProductFaq({ product }: ProductFaqProps) {
  if (!product.faq || product.faq.length === 0) {
    return null;
  }

  return (
    <div>
        <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            أسئلة شائعة عن المنتج
        </h3>
        <Accordion type="single" collapsible className="w-full">
            {product.faq.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">{faq.answer}</p>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}
