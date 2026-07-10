"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254792156094?text=Hi%20GTSS%2C%20I%27m%20interested%20in%20your%20software%20products.";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`
        group fixed bottom-6 right-6 z-[999]
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-[#25D366] text-white
        shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        max-md:bottom-4 max-md:right-4
        ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto"}
      `}
    >
      {/* Pulse ring animation */}
      <span
        className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"
        aria-hidden="true"
      />
      <MessageCircle className="w-7 h-7 relative z-10" />

      {/* Tooltip - visible on hover (desktop only) */}
      <span
        className={`
          absolute right-full mr-3 whitespace-nowrap
          rounded-md px-3 py-1.5 text-xs font-medium
          bg-gray-900 text-white shadow-md
          opacity-0 group-hover:opacity-100
          transition-opacity duration-200
          pointer-events-none
          hidden sm:block
        `}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
