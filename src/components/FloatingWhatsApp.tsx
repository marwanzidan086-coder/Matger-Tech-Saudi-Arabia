'use client';

import { siteConfig } from "@/config/site";
import { Button } from "./ui/button";

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path d="M16.6 14.2c-.3-.2-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1s-.5.6-.7.7c-.1.1-.3.2-.4.1-.2-.1-.8-.3-1.5-.9-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.2-.2c.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3s-.7-1.6-.9-2.2c-.2-.6-.4-.5-.5-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.7.7-.7 1.6s.7 1.9.8 2c.1.1 1.2 1.9 2.9 2.6.4.2.7.3.9.4.4.1.7.1.9.1.2 0 .5-.2.7-.4.2-.2.2-.4.1-.5-.1-.1-.3-.2-.6-.4z" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
    </svg>
);

export default function FloatingWhatsApp() {
  const message = "مرحباً، لدي استفسار بخصوص المنتجات المعروضة في متجركم.";
  const phoneNumber = siteConfig.whatsappNumbers[0];
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="icon"
        className="fixed bottom-6 start-6 h-16 w-16 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] text-white"
      >
        <WhatsAppIcon />
      </Button>
    </a>
  );
}
