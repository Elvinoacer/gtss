"use client";

import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GTSS on WhatsApp"
      className="fixed bottom-5 right-5 z-[999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128c4b] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c4b] max-md:bottom-4 max-md:right-4"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
