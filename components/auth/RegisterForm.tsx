'use client';

import { motion } from 'framer-motion';
import { Mail, Lock, Briefcase, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Link from 'next/link';

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

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { score: 1, label: 'Weak', color: 'bg-red-500' };
    if (score <= 4) return { score: 2, label: 'Fair', color: 'bg-yellow-500' };
    if (score <= 5) return { score: 3, label: 'Good', color: 'bg-blue-500' };
    return { score: 4, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration process
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Registration attempt:', formData);
    setIsLoading(false);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[480px] z-10 relative"
    >
      {/* Registration Card */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl dark:shadow-black/50 overflow-hidden border border-slate-200 dark:border-slate-700/50">
        {/* Card Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-8 pt-8 pb-4"
        >
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Join the Team
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Create your internal account to access GTSS platforms.
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-5">
          {/* Name Fields */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="flex-1 space-y-1.5">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] transition-all"
                id="firstName"
                name="firstName"
                placeholder="Jane"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1 space-y-1.5">
              <label
                className="text-sm font-medium text-slate-700 dark:text-slate-300"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] transition-all"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-1.5"
          >
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="email"
            >
              Corporate Email
            </label>
            <div className="relative group">
              <Mail className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 group-focus-within:text-[#2563eb] transition-colors" />
              <input
                className="w-full rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] transition-all"
                id="email"
                name="email"
                placeholder="jane.doe@gtss.internal"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </motion.div>

          {/* Department Select */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-1.5"
          >
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="department"
            >
              Department
            </label>
            <div className="relative group">
              <Briefcase className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 group-focus-within:text-[#2563eb] transition-colors" />
              <select
                className="w-full rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 pl-10 pr-10 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] appearance-none transition-all cursor-pointer"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your department
                </option>
                <option value="eng">Engineering</option>
                <option value="prod">Product Management</option>
                <option value="design">Design</option>
                <option value="hr">Human Resources</option>
                <option value="sales">Sales &amp; Marketing</option>
              </select>
              <motion.div
                animate={{ rotate: formData.department ? 180 : 0 }}
                className="absolute right-3 top-2.5 text-slate-400 pointer-events-none"
              >
                ▼
              </motion.div>
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-1.5"
          >
            <label
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-2.5 text-slate-400 w-5 h-5 group-focus-within:text-[#2563eb] transition-colors" />
              <input
                className="w-full rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 pl-10 pr-10 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb] transition-all"
                id="password"
                name="password"
                placeholder="Create a password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 focus:outline-none"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Password Strength Meter */}
            {formData.password && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-2"
              >
                <div className="flex gap-1.5 h-1.5 mb-2">
                  {[1, 2, 3, 4].map((level) => (
                    <motion.div
                      key={level}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: level * 0.1 }}
                      className={`flex-1 rounded-full transition-colors duration-300 ${
                        level <= passwordStrength.score
                          ? passwordStrength.color
                          : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Password strength: {passwordStrength.label}. Must be at least
                  8 characters with 1 special symbol.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Terms Checkbox */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-start gap-3 mt-2"
          >
            <input
              className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-[#2563eb] focus:ring-offset-slate-900 focus:ring-[#2563eb]"
              id="agreedToTerms"
              name="agreedToTerms"
              type="checkbox"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label
              className="text-xs text-slate-500 dark:text-slate-400 leading-normal"
              htmlFor="agreedToTerms"
            >
              I agree to the{' '}
              <Link
                className="text-[#2563eb] hover:text-[#1d4ed8] underline"
                href="#"
              >
                Internal Data Policy
              </Link>{' '}
              and{' '}
              <Link
                className="text-[#2563eb] hover:text-[#1d4ed8] underline"
                href="#"
              >
                Terms of Service
              </Link>
              .
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-[#2563eb]/20 transition-all disabled:bg-slate-400 disabled:shadow-none flex items-center justify-center gap-2 group"
            type="submit"
            disabled={isLoading || !formData.agreedToTerms}
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <span>Register Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
            <span className="flex-shrink-0 mx-4 text-xs text-slate-500 dark:text-slate-400 uppercase">
              Or
            </span>
            <div className="flex-grow border-t border-slate-300 dark:border-slate-700"></div>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an internal account?{' '}
              <Link
                className="text-[#2563eb] hover:text-[#1d4ed8] font-medium"
                href="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
