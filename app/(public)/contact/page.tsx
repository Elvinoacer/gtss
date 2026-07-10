"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, MessageCircle, AlertCircle } from "lucide-react";

const subjectOptions = ["General Inquiry", "Technical Support", "Sales & Pricing", "Partnership"];

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, privacy: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message || !form.privacy) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }),
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

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase font-semibold mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
              Contact
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">
              Get in <span className="text-[var(--accent)]">Touch.</span>
            </h1>
            <p className="text-base lg:text-lg text-[var(--text-muted)] leading-relaxed">
              Have questions about our products? We&apos;re here to help. Fill out the form or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--green)]/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7" style={{ color: "var(--green)" }} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">Thank you!</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                {/* Company / Organization */}
                <div className="mb-5">
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company or organization name"
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-y"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="mb-5 flex items-start gap-3 rounded-lg border border-[var(--red)]/20 bg-[var(--red)]/5 p-4">
                    <AlertCircle className="w-5 h-5 text-[var(--red)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--red)]">{error}</p>
                  </div>
                )}

                {/* Privacy Checkbox */}
                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      checked={form.privacy}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-[var(--card-border)] text-[var(--accent)] focus:ring-[var(--accent)] accent-[var(--accent)]"
                    />
                    <span className="text-sm text-[var(--text-muted)] leading-relaxed">
                      I agree that my data will be processed in accordance with GTSS&apos;s privacy policy and
                      understand my information will be used solely to respond to my inquiry.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--accent)] px-8 py-3.5 rounded-lg transition-all hover:bg-[var(--accent-bright)] hover:shadow-[var(--accent-glow)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Contact Info */}
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">Email</div>
                    <a
                      href="mailto:info@gtss.software"
                      className="text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--accent)] transition-colors"
                    >
                      info@gtss.software
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0"
                    style={{ color: "var(--green)" }}
                  >
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">Phone</div>
                    <a
                      href="tel:+254792156094"
                      className="text-sm font-medium text-[var(--text)] no-underline hover:text-[var(--accent)] transition-colors"
                    >
                      +254 790 670 542
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-0.5">Address</div>
                    <p className="text-sm font-medium text-[var(--text)] leading-relaxed">
                      P.O. Box 3900 - 30100
                      <br />
                      Kesses, Eldoret, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254792156094"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8 no-underline block transition-all hover:border-[var(--card-hover-border)] group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0"
                  style={{ color: "var(--green)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text)] mb-1">Or message us on WhatsApp</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Get a quick response via WhatsApp. We typically reply within minutes during business hours.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--green)] mt-2 group-hover:underline">
                    Open WhatsApp →
                  </span>
                </div>
              </div>
            </a>

            {/* Response SLA */}
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg border border-[var(--card-border)] flex items-center justify-center bg-[var(--bg-surface)] shrink-0"
                  style={{ color: "var(--green)" }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text)] mb-1">Response Guarantee</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    We respond to all inquiries within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
