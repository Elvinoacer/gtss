import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--black)] p-8 lg:p-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-dim)] to-transparent"></div>
      
      <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-16 border-b border-[var(--border)] mb-12">
        <div className="footer-brand space-y-6">
          <div className="footer-brand-name font-bebas text-[28px] tracking-[0.12em] text-[var(--text)]">
            GTSS<span>_CORE</span>
          </div>
          <p className="footer-brand-desc font-cormorant text-[15px] font-light leading-relaxed text-[var(--text-muted)] max-w-xs">
            Practical software solutions for the world's most demanding local networks. Built for permanence and offline-first performance.
          </p>
          <div className="status-pill flex items-center gap-2.5 font-mono-dm text-[9px] tracking-[0.15em] text-[var(--text-muted)]">
            <div className="status-dot w-1.5 h-1.5 rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green)]"></div>
            ALL SYSTEMS NOMINAL
          </div>
        </div>

        <div>
          <div className="footer-nav-title font-mono-dm text-[9px] tracking-[0.25em] text-[var(--gold)] uppercase mb-5 pb-3 border-b border-[var(--border)]">
            Solutions
          </div>
          <ul className="footer-nav-list list-none flex flex-col gap-3">
            <li><Link href="/products/justintime" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">JustInTime</Link></li>
            <li><Link href="/products/restaurant" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Restaurant Manager</Link></li>
            <li><Link href="/products/ecommerce" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">E-commerce Matrix</Link></li>
            <li><Link href="/products/church" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Ecclesia Cloud</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-nav-title font-mono-dm text-[9px] tracking-[0.25em] text-[var(--gold)] uppercase mb-5 pb-3 border-b border-[var(--border)]">
            Security
          </div>
          <ul className="footer-nav-list list-none flex flex-col gap-3">
            <li><Link href="/security/protocols" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Protocols</Link></li>
            <li><Link href="/security/compliance" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Compliance</Link></li>
            <li><Link href="/security/audits" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Audit Logs</Link></li>
            <li><Link href="/security/sovereign" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Sovereign Data</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-nav-title font-mono-dm text-[9px] tracking-[0.25em] text-[var(--gold)] uppercase mb-5 pb-3 border-b border-[var(--border)]">
            Company
          </div>
          <ul className="footer-nav-list list-none flex flex-col gap-3">
            <li><Link href="/about" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">About</Link></li>
            <li><Link href="/contact" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Contact</Link></li>
            <li><Link href="/legal" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Legal</Link></li>
            <li><Link href="/careers" className="font-rajdhani text-sm font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase no-underline transition-colors hover:text-[var(--gold)] flex items-center gap-2 before:content-[''] before:w-0 before:h-[1px] before:bg-[var(--gold)] before:transition-all hover:before:w-3">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="footer-copy font-mono-dm text-[9px] tracking-[0.2em] text-[var(--text-dim)] uppercase">
          © {new Date().getFullYear()} <span className="text-[var(--gold-dim)]">GTSS CORE SYSTEMS LLC.</span> All rights reserved.
        </div>
        <div className="footer-classification flex items-center gap-3 font-mono-dm text-[9px] tracking-[0.2em] text-[var(--red)] opacity-50 uppercase before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--red)] before:shadow-[0_0_6px_var(--red)]">
          Classified — Sovereign Tier — Clearance Required
        </div>
      </div>
    </footer>
  );
}
