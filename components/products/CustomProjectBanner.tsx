import React from "react";
import { MoveRight, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export function CustomProjectBanner() {
  return (
    <section className="relative group overflow-hidden border border-[var(--border)] bg-[rgba(3,5,8,0.7)] p-8 sm:p-12 lg:p-16">
      {/* HUD Decorative Elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--gold)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--gold)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none opacity-10"></div>

      {/* Background HUD Grid/Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--gold) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-[var(--gold)]" />
            </div>
            <span className="font-mono-dm text-[10px] tracking-[0.3em] text-[var(--gold-dim)] uppercase">
              PROTOCOL: CUSTOM_SPECIFICATION_v2
            </span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--text)] mb-6 tracking-wide leading-none">
            Need GTSS to shape something more <span className="text-[var(--gold)]">specific</span> to your operation?
          </h2>
          
          <p className="font-cormorant text-xl sm:text-2xl text-[var(--text-muted)] italic leading-relaxed max-w-2xl">
            We can start from an existing GTSS product, extend the workflow, and package the delivery 
            so it still feels cohesive, premium, and ready for deployment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <Link
            href="/contact"
            className="relative h-16 px-10 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl flex items-center justify-center gap-4 transition-all hover:bg-white group/btn cursor-none overflow-hidden"
          >
            <span className="relative z-10 tracking-widest uppercase">
              Initiate_Project
            </span>
            <MoveRight className="relative z-10 w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
          </Link>

          <Link
            href="/about"
            className="relative h-16 px-10 border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text)] font-bebas text-2xl flex items-center justify-center gap-4 transition-all hover:border-[var(--gold)] cursor-none"
          >
            <span className="tracking-widest uppercase opacity-70">
              Operational_Scope
            </span>
            <Sparkles className="w-5 h-5 text-[var(--gold-dim)]" />
          </Link>
        </div>
      </div>

      {/* Technical Footer Data */}
      <div className="absolute bottom-4 left-8 flex gap-8 font-mono-dm text-[7px] tracking-[0.2em] text-[var(--text-muted)] uppercase opacity-30">
        <span>STATION_ID: GTSS_HQ</span>
        <span>LATENCY: 0.002MS</span>
        <span>ENCRYPTION: AES-256</span>
      </div>
    </section>
  );
}
