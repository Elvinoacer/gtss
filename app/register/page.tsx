import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { ThemeToggle } from "@/components/landing/ThemeToggle";
import { site } from "@/data/site";

export default function RegisterPage() {
  return (
    <div id="main-content" className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="site-wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image src="/images/GTSS-logo.png" alt="" width={28} height={28} className="h-7 w-7 rounded-sm" />
          <span className="text-sm font-semibold text-[var(--text)]">{site.shortName}</span>
        </Link>
        <ThemeToggle />
      </header>
      <main className="site-wrap py-10">
        <Suspense fallback={<p className="text-sm text-[var(--text-muted)]">Loading…</p>}>
          <RegisterForm />
        </Suspense>
      </main>
    </div>
  );
}
