"use client";

import { useState } from "react";
import Link from "next/link";
import { Monitor, Mail, Phone, CheckCircle, Loader2, AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

const products = [
  "Restaurant Manager",
  "E-commerce Platform",
  "Church Management System",
  "Hotel Ordering System",
  "JustInTime",
  "Custom Enterprise Solution",
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data.errors ? data.errors.join(" ") : "Something went wrong. Please try again.";
        throw new Error(msg);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--bg)]">
        <section className="px-6 lg:px-20 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--green)] bg-opacity-10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[var(--green)]" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[var(--text)] tracking-tight mb-4">
              Demo Request Received!
            </h1>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mb-8">
              Thank you, {formData.name || "there"}! Our team will reach out to
              you within 24 hours to schedule your personalized walkthrough.
            </p>
            <p className="text-sm text-[var(--text-muted)] mb-2">
              <strong className="text-[var(--text)]">Product:</strong>{" "}
              {formData.product || "Not specified"}
            </p>
            <p className="text-sm text-[var(--text-muted)] mb-8">
              <strong className="text-[var(--text)]">Preferred Date:</strong>{" "}
              {formData.date || "Not specified"}
            </p>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg no-underline transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)]"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--text)] border border-[var(--border)] px-8 py-3.5 rounded-lg no-underline transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <HelpCircle className="w-4 h-4" />
                Read FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Demo
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Request a{" "}
              <span className="text-[var(--accent)]">Demo</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              See GTSS products in action. Schedule a live walkthrough with our
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Full Name <span className="text-[var(--red)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Email Address <span className="text-[var(--red)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Phone / WhatsApp <span className="text-[var(--red)]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Product Interest */}
              <div>
                <label
                  htmlFor="product"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Product Interest <span className="text-[var(--red)]">*</span>
                </label>
                <select
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] appearance-none cursor-pointer"
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--text)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business needs..."
                  className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] resize-vertical"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-3 rounded-lg border border-[var(--red)]/20 bg-[var(--red)]/5 p-4">
                  <AlertCircle className="w-5 h-5 text-[var(--red)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--red)]">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)] cursor-pointer border-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Monitor className="w-4 h-4" />
                    Request Demo
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0">
                    <Mail className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">
                      Email
                    </p>
                    <a
                      href="mailto:info@gtss.co.ke"
                      className="text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)] transition-colors"
                    >
                      info@gtss.co.ke
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0">
                    <Phone className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">
                      Phone
                    </p>
                    <a
                      href="tel:+254790670542"
                      className="text-sm text-[var(--text-muted)] no-underline hover:text-[var(--accent)] transition-colors"
                    >
                      +254 790 670 542
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "30-minute live product walkthrough",
                  "Q&A with a solutions specialist",
                  "Custom pricing based on your needs",
                  "No commitment required",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--green)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
