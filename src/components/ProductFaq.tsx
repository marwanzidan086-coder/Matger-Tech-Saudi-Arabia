'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";

type ProductFaqProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function ProductFaq({ faqs }: ProductFaqProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div>
        <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            أسئلة شائعة عن المنتج
        </h3>
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}
