"use client";

import { contactInfo } from "@/data/contact";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl p-8 md:p-10"
    >
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--gold)]"></div>

      <h3 className="font-bebas text-3xl text-[var(--text)] mb-8 tracking-[0.02em] uppercase">
        COMMUNICATION <span className="text-[var(--gold)]">CHANNELS</span>
      </h3>

      <div className="flex flex-col gap-8">
        <a className="group flex items-start gap-6 cursor-none" href={`mailto:${contactInfo.email}`}>
          <div className="w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center transition-all group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,160,69,0.1)]">
            <Mail className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="flex flex-col pt-1">
            <span className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase mb-1">
              EMAIL_TRANSMISSION
            </span>
            <span className="font-rajdhani text-xl font-semibold text-[var(--text)] tracking-tight group-hover:text-[var(--gold)] transition-colors">
              {contactInfo.email}
            </span>
          </div>
        </a>

        <a className="group flex items-start gap-6 cursor-none" href={`tel:+254792156094`}>
          <div className="w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center transition-all group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,160,69,0.1)]">
            <Phone className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="flex flex-col pt-1">
            <span className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase mb-1">
              VOICE_UPLINK
            </span>
            <span className="font-rajdhani text-xl font-semibold text-[var(--text)] tracking-tight group-hover:text-[var(--gold)] transition-colors">
              {contactInfo.phone}
            </span>
          </div>
        </a>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 border border-[var(--border)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <div className="flex flex-col pt-1">
            <span className="font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] uppercase mb-1">
              COORDINATE_LOCATION
            </span>
            <span className="font-rajdhani text-lg font-medium text-[var(--text-muted)] tracking-tight whitespace-pre-line leading-tight">
              {contactInfo.address}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
