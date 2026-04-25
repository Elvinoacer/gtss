'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, Briefcase, Eye, EyeOff, ArrowRight, User, Terminal, Shield } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { registerUser } from '@/lib/actions/auth';

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    password: '',
    agreedToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { score: 1, label: 'LOW_ENTROPY', color: 'bg-rose-500' };
    if (score <= 4) return { score: 2, label: 'DECENT_ENTROPY', color: 'bg-amber-500' };
    if (score <= 5) return { score: 3, label: 'HIGH_ENTROPY', color: 'bg-blue-500' };
    return { score: 4, label: 'SOVEREIGN_GRADE', color: 'bg-emerald-500' };
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await registerUser(formData);
      if (!result.success) {
        setError(result.error || 'REGISTRATION_ERROR: REJECTED');
      } else {
        window.location.href = '/login';
      }
    } catch (err) {
      setError('SYSTEM_EXCEPTION: UPLINK_FAILURE');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="w-full max-w-xl">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 border border-[var(--gold-dim)] bg-[rgba(212,175,55,0.05)] flex items-center justify-center">
            <Terminal className="w-5 h-5 text-[var(--gold)]" />
          </div>
          <span className="font-mono-dm text-[10px] tracking-[0.4em] text-[var(--gold-dim)] uppercase">
            PERSONNEL_REGISTRATION_v4
          </span>
        </div>

        <h1 className="font-bebas text-5xl text-[var(--text)] mb-4 tracking-wide uppercase leading-none">
          Identity <span className="text-[var(--gold)]">Registration</span>
        </h1>
        <p className="font-cormorant text-xl text-[var(--text-muted)] italic">
          Register your internal credentials to access restricted GTSS operational nodes.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 border border-rose-500/30 bg-rose-500/5 text-rose-500 font-mono-dm text-[10px] tracking-widest uppercase flex items-center gap-3">
            <Shield className="w-4 h-4" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
              First_Name
            </label>
            <div className="relative">
              <input
                className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-6 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
                name="firstName"
                placeholder="JANE"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
              Last_Name
            </label>
            <div className="relative">
              <input
                className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-6 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
                name="lastName"
                placeholder="DOE"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
            Corporate_Email
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-4 h-4 text-[var(--gold-dim)] opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <input
              className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-12 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
              name="email"
              placeholder="IDENTITY@GTSS.INTERNAL"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
            Operational_Unit
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Briefcase className="w-4 h-4 text-[var(--gold-dim)] opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <select
              className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-12 font-rajdhani text-lg font-bold text-[var(--text)] focus:outline-none focus:border-[var(--gold)] appearance-none transition-all cursor-pointer"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="" disabled className="bg-[var(--black)]">SELECT_DEPARTMENT</option>
              <option value="eng" className="bg-[var(--black)] text-white font-rajdhani">ENGINEERING</option>
              <option value="prod" className="bg-[var(--black)] text-white font-rajdhani">PRODUCT_MANAGEMENT</option>
              <option value="design" className="bg-[var(--black)] text-white font-rajdhani">DESIGN</option>
              <option value="hr" className="bg-[var(--black)] text-white font-rajdhani">HUMAN_RESOURCES</option>
              <option value="sales" className="bg-[var(--black)] text-white font-rajdhani">SALES_MARKETING</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase opacity-60">
            Security_Key
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-4 h-4 text-[var(--gold-dim)] opacity-40 group-focus-within:opacity-100 transition-opacity" />
            </div>
            <input
              className="w-full h-14 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] px-12 font-rajdhani text-lg font-bold text-[var(--text)] placeholder:text-[var(--text-muted)] placeholder:opacity-30 focus:outline-none focus:border-[var(--gold)] transition-all"
              name="password"
              placeholder="ENCRYPT_PASSWORD"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              className="absolute right-4 top-4 text-[var(--gold-dim)] opacity-40 hover:opacity-100 transition-opacity"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {/* Security Meter */}
          {formData.password && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
              <div className="flex gap-1 h-1 mb-2">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`flex-1 ${level <= passwordStrength.score ? passwordStrength.color : 'bg-[var(--border)]'} transition-colors`}
                  />
                ))}
              </div>
              <div className="flex justify-between font-mono-dm text-[8px] tracking-widest text-[var(--gold-dim)] uppercase">
                <span>STRENGTH: {passwordStrength.label}</span>
                <span>MIN_8_CHARS</span>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-start gap-4 py-4">
          <input
            className="mt-1 w-4 h-4 border-[var(--border)] bg-transparent text-[var(--gold)] focus:ring-0 cursor-pointer"
            id="agreedToTerms"
            name="agreedToTerms"
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            required
          />
          <label className="font-mono-dm text-[9px] text-[var(--text-muted)] leading-relaxed uppercase tracking-widest" htmlFor="agreedToTerms">
            I acknowledge the <span className="text-[var(--gold-dim)] underline">Internal Data Policy</span> and <span className="text-[var(--gold-dim)] underline">Security protocols</span>.
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading || !formData.agreedToTerms}
          className="relative w-full h-16 bg-[var(--gold)] text-[var(--black)] font-bebas text-2xl flex items-center justify-center gap-4 transition-all hover:bg-white disabled:opacity-50 overflow-hidden group"
        >
          {isLoading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-6 h-6 border-2 border-[var(--black)] border-t-transparent" />
          ) : (
            <>
              <span className="tracking-widest uppercase">Register_Personnel</span>
              <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
            </>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="font-mono-dm text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
          Already verified?{' '}
          <Link className="text-[var(--gold-dim)] hover:text-[var(--gold)] transition-colors" href="/login">
            INITIATE_LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
