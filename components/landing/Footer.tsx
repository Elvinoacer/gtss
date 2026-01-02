'use client';

import { Twitter, Github } from 'lucide-react';
import Link from 'next/link';
import { landingFooterLinks } from '@/data/landing';

export function Footer() {
  return (
    <footer className="bg-[#111317] text-white pt-12 md:pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/GTSS-logo.png"
                alt="GTSS Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering enterprises with next-gen tools for project management and collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-gray-200 uppercase tracking-wider">Product</h4>
            {landingFooterLinks.product.map((link) => (
              <Link key={link.label} className="text-gray-400 hover:text-white transition-colors text-sm" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-gray-200 uppercase tracking-wider">Company</h4>
            {landingFooterLinks.company.map((link) => (
              <Link key={link.label} className="text-gray-400 hover:text-white transition-colors text-sm" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-gray-200 uppercase tracking-wider">Legal</h4>
            {landingFooterLinks.legal.map((link) => (
              <Link key={link.label} className="text-gray-400 hover:text-white transition-colors text-sm" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} GTSS Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {landingFooterLinks.social.map((link) => {
              const Icon = link.icon === 'Twitter' ? Twitter : Github;
              return (
                <Link key={link.label} className="text-gray-400 hover:text-white transition-colors" href={link.href}>
                  <span className="sr-only">{link.label}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
