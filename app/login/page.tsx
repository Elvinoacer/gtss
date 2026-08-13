import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/auth/LoginForm";
import { ThemeToggle } from "@/components/landing/ThemeToggle";
import { site } from "@/data/site";

export default function LoginPage() {
  return (
    <div id="main-content" className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="site-wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image src="/images/GTSS-logo.png" alt="" width={28} height={28} className="h-7 w-7 rounded-sm" />
          <span className="text-sm font-semibold text-[var(--text)]">{site.shortName}</span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="site-wrap grid min-h-[calc(100vh-4rem)] items-center gap-12 py-10 lg:grid-cols-2">
        <Suspense fallback={<p className="text-sm text-[var(--text-muted)]">Loading sign-in…</p>}>
          <LoginForm />
        </Suspense>
        <aside className="hidden border border-[var(--card-border)] bg-[var(--card-bg)] p-10 lg:block">
          <p className="site-kicker">Internal tools</p>
          <p className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-snug text-[var(--text)]">
            The same systems we deploy for clients, used to run GTSS itself.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            Leads, products, deployments, and support — signed in, role-based, and logged.
          </p>
        </aside>
      </main>
    </div>
  );
}
