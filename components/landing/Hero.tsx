import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="hero relative z-10 min-h-[100dvh] grid lg:grid-cols-2 items-center px-6 lg:px-20 py-20 lg:py-24 gap-12 lg:gap-20 overflow-hidden">
      <div className="hero-line hero-line-1 absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-20"></div>
      <div className="hero-line hero-line-2 absolute bottom-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-10"></div>
      <div className="hero-vline hero-vline-1 absolute top-0 bottom-0 left-[38%] w-[1px] bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent opacity-15 hidden lg:block"></div>

      <div className="hero-left relative">
        <div className="hero-tag flex items-center gap-2.5 font-mono-dm text-[9px] lg:text-[10px] tracking-[0.2em] lg:tracking-[0.25em] text-[var(--gold)] uppercase mb-6 lg:mb-8 animate-[fade-up_0.8s_0.3s_ease_forwards] opacity-0">
          <div className="hero-tag-line flex-1 max-w-[30px] lg:max-w-[40px] h-[1px] bg-[var(--gold)]"></div>
          System Operational — V4.2 — Clearance: Sovereign
        </div>
        
        <h1 className="hero-title font-bebas text-[clamp(48px,12vw,120px)] leading-[0.9] lg:leading-[0.92] tracking-[0.02em] text-[var(--text)] mb-8 lg:mb-10 animate-[fade-up_0.9s_0.5s_ease_forwards] opacity-0">
          <span className="thin font-cormorant font-light italic text-[0.7em] lg:text-[0.75em] text-[var(--text-muted)] block mb-2">Enterprise-grade</span>
          PRACTICAL<br/>
          <span className="accent text-[var(--gold)]">OFFLINE-FIRST</span><br/>
          SOFTWARE<br/>FOR GROWTH.
        </h1>

        <p className="hero-body font-cormorant text-[18px] lg:text-[20px] font-light leading-relaxed text-[var(--text-muted)] max-w-[480px] mb-10 lg:mb-12 animate-[fade-up_0.9s_0.7s_ease_forwards] opacity-0">
          Impenetrable architectures engineered for local business resilience. 
          Secure, track, and scale your operations with military-grade precision, 
          even when the network fails.
        </p>

        <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:gap-5 animate-[fade-up_0.9s_0.9s_ease_forwards] opacity-0">
          <button className="btn-primary font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[var(--black)] bg-[var(--gold)] px-9 py-4 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)] flex items-center justify-center gap-3 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-white/25 after:to-transparent after:-translate-x-full after:transition-transform after:duration-[0.6s] hover:after:translate-x-[200%]">
            Initialize Sequence
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button className="btn-ghost font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] bg-transparent px-7 py-[15px] border border-[var(--border)] cursor-none transition-all hover:text-[var(--gold)] hover:border-[var(--border-bright)] hover:shadow-[var(--glow-gold)]">
            View Architecture
          </button>
        </div>
      </div>


      <div className="hero-panel relative opacity-0 animate-[fade-in_1.2s_0.6s_ease_forwards] hidden lg:block">
        <div className="hero-panel-frame relative border border-[var(--border)] bg-gradient-to-br from-[var(--gold)]/[0.03] to-transparent overflow-hidden aspect-[1/1.1] before:absolute before:top-0 before:left-0 before:w-10 before:h-10 before:border-t-2 before:border-l-2 before:border-[var(--gold)] after:absolute after:bottom-0 after:right-0 after:w-10 after:h-10 after:border-b-2 after:border-r-2 after:border-[var(--gold)]">
          <div className="scan absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--cyan)]/40 to-transparent animate-[scan-down_3s_ease-in-out_infinite] pointer-events-none"></div>
          <Image 
            src="/images/gtss_hero.png" 
            alt="Infrastructure Architecture"
            width={800}
            height={880}
            className="hero-panel-img w-full h-full object-cover opacity-60 mix-blend-luminosity filter contrast-[1.1] brightness-[0.8]"
          />
          <div className="hero-panel-overlay absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--black)]/100"></div>
          <div className="hero-panel-hud absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-[1px] bg-[var(--border)]">
            <div className="hud-cell bg-[rgba(3,5,8,0.85)] backdrop-blur-xl p-3.5 lg:p-4 flex flex-col gap-1">
              <div className="hud-label font-mono-dm text-[8px] tracking-[0.2em] text-[var(--text-dim)] uppercase">Node Status</div>
              <div className="hud-value font-mono-dm text-sm font-medium text-[var(--green)] uppercase">SECURE</div>
            </div>
            <div className="hud-cell bg-[rgba(3,5,8,0.85)] backdrop-blur-xl p-3.5 lg:p-4 flex flex-col gap-1">
              <div className="hud-label font-mono-dm text-[8px] tracking-[0.2em] text-[var(--text-dim)] uppercase">Latency</div>
              <div className="hud-value font-mono-dm text-sm font-medium text-[var(--cyan)]">&lt;12ms</div>
            </div>
            <div className="hud-cell bg-[rgba(3,5,8,0.85)] backdrop-blur-xl p-3.5 lg:p-4 flex flex-col gap-1">
              <div className="hud-label font-mono-dm text-[8px] tracking-[0.2em] text-[var(--text-dim)] uppercase">Uptime</div>
              <div className="hud-value font-mono-dm text-sm font-medium text-[var(--gold)]">99.99%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
