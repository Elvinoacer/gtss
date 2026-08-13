"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const fieldClass =
  "w-full border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) {
        setError("Those details did not match an account.");
      } else if (result?.ok) {
        window.location.href = callbackUrl;
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <p className="site-kicker">Staff sign in</p>
      <h1 className="site-title mt-4">Welcome back.</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">Use the email and password issued to your team.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error ? (
          <p className="border border-[var(--red)]/30 bg-[var(--red)]/5 px-4 py-3 text-sm text-[var(--red)]" role="alert">
            {error}
          </p>
        ) : null}
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text)]">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={fieldClass}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-[var(--text)]">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={fieldClass}
            required
          />
        </div>
        <button type="submit" disabled={isLoading} className="site-btn site-btn-primary w-full disabled:opacity-60">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isLoading ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-8 text-sm text-[var(--text-muted)]">
        Need an account?{" "}
        <Link href="/register" className="font-semibold text-[var(--accent)] no-underline hover:underline">
          Request access
        </Link>
      </p>
    </div>
  );
}
