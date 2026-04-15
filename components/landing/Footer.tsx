import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingFooterLinks } from "@/data/landing";

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007AFF]/50 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image
                src="/images/GTSS-logo.png"
                alt="GTSS Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Building practical, scalable software products for real-world
              local problems across Africa.
            </p>

            <div className="flex gap-3 mt-2">
              {landingFooterLinks.social.map((link) => {
                const Icon = iconMap[link.icon] || Twitter;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/70 hover:text-white hover:glow-blue transition-all"
                  >
                    <span className="sr-only">{link.label}</span>
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">
              Product
            </h3>
            <div className="flex flex-col gap-3">
              {landingFooterLinks.product.map((link) => (
                <Link
                  key={link.label}
                  className="text-white/70 hover:text-white transition-colors text-sm w-fit"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {landingFooterLinks.company.map((link) => (
                <Link
                  key={link.label}
                  className="text-white/70 hover:text-white transition-colors text-sm w-fit"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              {landingFooterLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  className="text-white/70 hover:text-white transition-colors text-sm w-fit"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Great Thumbs Software Solutions. All
            rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>Built with</span>
            <span className="text-red-400">♥</span>
            <span>in Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
