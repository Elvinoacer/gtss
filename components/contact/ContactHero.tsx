"use client";

import { contactHero } from "@/data/contact";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative pt-12 pb-12 md:pt-20 md:pb-12 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-left"
        >
          <div className="section-tag font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold)] uppercase mb-6 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[var(--gold)]"></div>
            ESTABLISH_COMMUNICATION
          </div>

          <h1 className="font-bebas text-[clamp(48px,6vw,90px)] leading-[0.95] tracking-[0.02em] text-[var(--text)] mb-8 uppercase">
            LET'S BUILD <span className="text-[var(--gold)]">SOVEREIGN</span> INFRASTRUCTURE.
          </h1>

          <p className="font-cormorant text-[20px] font-light leading-relaxed text-[var(--text-muted)] max-w-2xl mb-10">
            {contactHero.description}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://wa.me/254792156094?text=Hello%20GTSS%20Team,%20I'm%20interested%20in%20starting%20a%20project%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-10 py-5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)] flex items-center gap-3 justify-center"
            >
              INITIALIZE_CHAT
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/faq"
              className="btn-ghost font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--text-muted)] bg-transparent px-10 py-[19px] border border-[var(--border)] cursor-none transition-all hover:text-[var(--gold)] hover:border-[var(--border-bright)] flex items-center justify-center"
            >
              BROWSE_FAQ
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto"
        >
          {/* HUD Frame */}
          <div className="absolute inset-0 border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl"></div>

          {/* Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[var(--gold)]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[var(--gold)]"></div>

          {/* Terminal Accents */}
          <div className="absolute top-4 right-6 font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] opacity-40">
            VISUAL_FEED_01
          </div>

          <div className="absolute inset-4 overflow-hidden border border-[var(--border)]">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: `url('${contactHero.image}')` }}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20"></div>
            </div>
          </div>

          {/* Technical Data Overlays */}
          <div className="absolute -bottom-4 -left-4 font-mono-dm text-[8px] bg-[var(--black)] border border-[var(--border)] px-3 py-2 text-[var(--gold-dim)] tracking-[0.1em] z-20">
            LOC_SYNC: 0.38.112
          </div>
        </motion.div>
      </div>
    </section>
  );
}
