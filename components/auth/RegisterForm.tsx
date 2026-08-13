"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { registerUser } from "@/lib/actions/auth";

const fieldClass =
  "w-full border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:outline-none";

function passwordLabel(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (score <= 2) return { score: 1, label: "Weak" };
  if (score <= 4) return { score: 2, label: "Fair" };
  if (score <= 5) return { score: 3, label: "Good" };
  return { score: 4, label: "Strong" };
}

export function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    password: "",
    agreedToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const strength = passwordLabel(formData.password);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await registerUser(formData);
      if (!result.success) {
        setError(result.error || "We could not create the account. Try again.");
      } else {
        window.location.href = "/login";
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="site-kicker">Request access</p>
      <h1 className="site-title mt-4">Create a staff account.</h1>
      <p className="mt-2 text-sm text-[var(--text-muted)]">For GTSS team members. Customers do not need this page.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error ? (
          <p className="border border-[var(--red)]/30 bg-[var(--red)]/5 px-4 py-3 text-sm text-[var(--red)]" role="alert">
            {error}
          </p>
        ) : null}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
              First name
            </label>
            <input id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className={fieldClass} autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
              Last name
            </label>
            <input id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className={fieldClass} autoComplete="family-name" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Work email
          </label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={fieldClass} autoComplete="email" />
        </div>

        <div>
          <label htmlFor="department" className="mb-2 block text-sm font-medium">
            Department
          </label>
          <select id="department" name="department" required value={formData.department} onChange={handleChange} className={fieldClass}>
            <option value="" disabled>
              Select a department
            </option>
            <option value="eng">Engineering</option>
            <option value="prod">Product</option>
            <option value="design">Design</option>
            <option value="hr">People</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={handleChange}
              className={`${fieldClass} pr-12`}
              autoComplete="new-password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {formData.password ? (
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              Strength: {strength.label}. Use at least 8 characters.
            </p>
          ) : null}
        </div>

        <label className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
          <input
            id="agreedToTerms"
            name="agreedToTerms"
            type="checkbox"
            required
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="mt-1 accent-[var(--accent)]"
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy" className="text-[var(--accent)] underline-offset-2 hover:underline">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-[var(--accent)] underline-offset-2 hover:underline">
              terms
            </Link>
            .
          </span>
        </label>

        <button type="submit" disabled={isLoading || !formData.agreedToTerms} className="site-btn site-btn-primary disabled:opacity-60">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {isLoading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-8 text-sm text-[var(--text-muted)]">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[var(--accent)] no-underline hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
