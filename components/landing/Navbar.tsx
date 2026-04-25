import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[500] px-6 lg:px-12 h-[72px] flex items-center justify-between border-b border-[var(--border)] bg-[rgba(3,5,8,0.75)] backdrop-blur-3xl transition-all">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50"></div>
      
      <Link className="logo flex items-center gap-3 no-underline cursor-none" href="/">
        <div className="logo-mark w-8 h-8 border border-[var(--gold)] relative flex items-center justify-center after:absolute after:inset-[3px] after:border after:border-[rgba(201,160,69,0.3)]">
          <div className="logo-mark-inner w-2 h-2 bg-[var(--gold)] animate-[pulse-dot_2s_ease-in-out_infinite]"></div>
        </div>
        <span className="logo-text font-bebas text-[22px] tracking-[0.15em] text-[var(--text)]">
          GTSS<span>_CORE</span>
        </span>
      </Link>

      <div className="nav-status flex items-center gap-8">
        <div className="status-pill hidden sm:flex items-center gap-2 font-mono-dm text-[10px] text-[var(--text-muted)] tracking-[0.15em]">
          <div className="status-dot w-1.5 h-1.5 rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green)] animate-[blink_2.5s_ease-in-out_infinite]"></div>
          ALL SYSTEMS NOMINAL
        </div>
        <Link href="/contact" className="btn-deploy font-mono-dm text-[11px] tracking-[0.2em] uppercase text-[var(--black)] bg-[var(--gold)] px-6 py-2.5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-white/20 after:to-transparent after:-translate-x-full after:transition-transform after:duration-500 hover:after:translate-x-[200%]">
          DEPLOY SYSTEM
        </Link>
      </div>
    </header>
  );
}
