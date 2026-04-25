'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Shield, Terminal, Activity } from 'lucide-react';
import { useState, FormEvent, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("AUTHENTICATION_FAILED: INVALID_CREDENTIALS");
      } else if (result?.ok) {
        window.location.href = callbackUrl;
      }
    } catch (err) {
      setError("SYSTEM_ERROR: UNEXPECTED_EXCEPTION");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 border border-[var(--gold-dim)] bg-[rgba(212,175,55,0.05)] flex items-center justify-center">
            <Terminal className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <span className="font-mono-dm text-[10px] tracking-[0.4em] text-[var(--gold-dim)] uppercase">
            SECURE_ACCESS_PORTAL_v4
          </span>
        </div>

        <h1 className="font-bebas text-5xl text-[var(--text)] mb-4 tracking-wide uppercase leading-none">
          Identity <span className="text-[var(--gold)]">Verification</span>
        </h1>
        <p className="font-cormorant text-xl text-[var(--text-muted)] italic">
          Initiate authentication protocol to access the GTSS command cluster.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 border border-rose-500/30 bg-rose-500/5 text-rose-500 font-mono-dm text-[10px] tracking-widest uppercase flex items-center gap-3">
            <Activity className="w-4 h-4" />
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
            Registry_Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-4 h-4 text-[var(--gold-dim)] opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-12 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
              placeholder="IDENTITY@GTSS.SOLUTIONS"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
              Access_Key
            </label>
            <a href="#" className="font-mono-dm text-[9px] text-[var(--gold-dim)] hover:text-[var(--gold)] transition-colors uppercase tracking-widest opacity-40 hover:opacity-100">
              Recovery_Protocol
            </a>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-[var(--gold-dim)] opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-12 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="relative w-full h-16 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl flex items-center justify-center gap-4 transition-all hover:bg-white disabled:opacity-50 overflow-hidden group"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 border-2 border-[var(--black)] border-t-transparent"
            />
          ) : (
            <>
              <span className="tracking-widest uppercase">Initiate_Access</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
        </button>
      </form>

      <footer className="mt-12 pt-8 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-4 h-4 text-[var(--gold-dim)] opacity-40" />
          <span className="font-mono-dm text-[9px] tracking-[0.3em] text-[var(--gold-dim)] uppercase opacity-40">
            ENCRYPTION_LAYER: ACTIVE
          </span>
        </div>
        <p className="font-mono-dm text-[8px] text-[var(--text-muted)] uppercase tracking-widest leading-relaxed opacity-30">
          AUTHORIZED_PERSONNEL_ONLY. ALL_TRANSITIONS_LOGGED_AND_MONITORED_BY_GTSS_CENTRAL_PROTOCOL.
        </p>
      </footer>
    </div>
  );
}
