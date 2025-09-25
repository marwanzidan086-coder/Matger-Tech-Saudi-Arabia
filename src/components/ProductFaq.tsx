'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react";
import { type Product } from "@/lib/types";
import { useMemo } from "react";

type ProductFaqProps = {
  product: Product;
};

export default function ProductFaq({ product }: ProductFaqProps) {

  const { features, details } = useMemo(() => {
    const parts = product.description.split(/###(FEATURES|DETAILS)###/);
    
    const featuresIndex = product.description.includes('###FEATURES###') ? parts.findIndex(p => p === 'FEATURES') + 1 : -1;
    const featuresList = featuresIndex !== -1 
      ? parts[featuresIndex].trim().split('\n').map(f => f.replace(/^- /, '')).filter(f => f) 
      : [];

    const detailsIndex = product.description.includes('###DETAILS###') ? parts.findIndex(p => p === 'DETAILS') + 1 : -1;
    const detailsList = detailsIndex !== -1
      ? parts[detailsIndex].trim().split('\n').map(d => {
          const [key, ...valueParts] = d.replace(/^- /, '').split(':');
          return { key: key.trim(), value: valueParts.join(':').trim() };
        }).filter(d => d.key && d.value)
      : [];
      
    return { features: featuresList, details: detailsList };
  }, [product.description]);


  const allFaqs = useMemo(() => {
    const combined = [...(product.faq || [])];

    if (features.length > 0) {
      combined.unshift({
        question: 'ما هي أبرز مميزات المنتج؟',
        answer: `<ul>${features.map(f => `<li>- ${f}</li>`).join('')}</ul>`,
      });
    }

    if (details.length > 0) {
      combined.push({
        question: 'ما هي المواصفات الفنية للمنتج؟',
        answer: `<ul>${details.map(d => `<li><strong>${d.key}:</strong> ${d.value}</li>`).join('')}</ul>`,
      });
    }
    
    return combined;
  }, [product.faq, features, details]);


  if (allFaqs.length === 0) {
    return null;
  }

  return (
    <div>
        <h3 className="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            أسئلة شائعة عن المنتج
        </h3>
        <Accordion type="single" collapsible className="w-full">
            {allFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  );
}
