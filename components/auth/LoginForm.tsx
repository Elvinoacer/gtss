'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
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
        setError("Invalid email or password. Please try again.");
      } else if (result?.ok) {
        window.location.href = callbackUrl;
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-[480px] flex flex-col gap-6"
    >
      {/* Page Heading */}
      <div className="flex flex-col gap-2 pb-4">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]"
        >
          Log in to your account
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal"
        >
          Enter your credentials to access the GTSS dashboard.
        </motion.p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium">
            {error}
          </div>
        )}
        {/* Email Field */}
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-2"
        >
          <span className="text-slate-700 dark:text-white text-sm font-semibold leading-normal">
            Email Address
          </span>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-[#2563eb] transition-colors" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex w-full resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:outline-0 focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] h-12 pl-10 pr-4 text-base font-normal leading-normal transition-all duration-200"
              placeholder="user@gtss.com"
              required
            />
          </div>
        </motion.label>

        {/* Password Field */}
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-slate-700 dark:text-white text-sm font-semibold leading-normal">
              Password
            </span>
          </div>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-slate-400 dark:text-slate-500 group-focus-within:text-[#2563eb] transition-colors" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex w-full resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:outline-0 focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] h-12 pl-10 pr-4 text-base font-normal leading-normal transition-all duration-200"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-end pt-1">
            <a
              href="#"
              className="text-[#2563eb] hover:text-[#1d4ed8] text-sm font-medium hover:underline transition-colors"
            >
              Forgot Password?
            </a>
          </div>
        </motion.label>

        {/* Login Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-4 bg-[#2563eb] hover:bg-[#1d4ed8] disabled:bg-slate-400 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-200 shadow-lg shadow-[#2563eb]/20 disabled:shadow-none"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <span className="truncate">Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </form>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col gap-4 items-center mt-4"
      >
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div className="relative bg-white dark:bg-[#0f172a] px-4">
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              GTSS SECURITY PROTOCOL
            </span>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 dark:text-slate-600 max-w-xs">
          Access to this system is restricted to authorized GTSS personnel only.
          All activities are monitored.
        </p>
      </motion.div>
    </motion.div>
  );
}
