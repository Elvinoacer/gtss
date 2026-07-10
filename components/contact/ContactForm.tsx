"use client";

import {
  Send,
  ChevronDown,
  Loader2,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { sendEmail } from "@/lib/actions/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const resetForm = () => {
    formRef.current?.reset();
    setAgreed(false);
    setStatus(null);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setStatus({
          type: "success",
          message: "TRANSMISSION_COMPLETE: MESSAGE_RECEIVED",
        });
        formRef.current?.reset();
        setAgreed(false);
      } else {
        setStatus({
          type: "error",
          message: result.error || "SYSTEM_ERROR: TRANSMISSION_FAILED",
        });
      }
    } catch {
      setStatus({ type: "error", message: "CRITICAL_ERROR: NETWORK_FAILURE" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status?.type === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl p-8 md:p-12"
      >
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--gold)]"></div>
        <div className="absolute top-4 right-6 font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] opacity-40">
          SECURE_RESPONSE_MODULE
        </div>

        <div className="flex items-start gap-4 md:gap-5 mb-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono-dm text-[10px] tracking-[0.25em] text-[var(--gold-dim)] uppercase mb-2">
              MESSAGE_SENT_SUCCESSFULLY
            </p>
            <h2 className="font-bebas text-4xl text-[var(--text)] tracking-[0.02em] uppercase">
              THANK YOU, WE&apos;LL BE IN TOUCH
            </h2>
          </div>
        </div>

        <div className="rounded-[24px] border border-emerald-400/20 bg-emerald-400/5 p-6 md:p-8">
          <p className="font-cormorant text-[18px] md:text-[20px] leading-relaxed text-[var(--text-muted)] max-w-2xl">
            Your demo request has been received. Our team will review it and
            follow up within 24 hours.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={resetForm}
              className="btn-primary inline-flex items-center justify-center gap-3 font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-8 py-4 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>SEND_ANOTHER</span>
            </button>
            <p className="font-mono-dm text-[10px] tracking-[0.16em] uppercase text-[var(--text-dim)]">
              Need it sooner? Reply to the follow-up email and we&apos;ll
              continue there.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative border border-[var(--border)] bg-[rgba(3,5,8,0.6)] backdrop-blur-xl p-8 md:p-12"
    >
      {/* Corner Elements */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--gold)]"></div>
      <div className="absolute top-4 right-6 font-mono-dm text-[9px] tracking-[0.2em] text-[var(--gold-dim)] opacity-40">
        SECURE_INPUT_MODULE
      </div>

      <h2 className="font-bebas text-4xl text-[var(--text)] mb-10 tracking-[0.02em] uppercase">
        INITIALIZE <span className="text-[var(--gold)]">TRANSMISSION</span>
      </h2>

      <form
        ref={formRef}
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <label className="flex flex-col gap-3">
            <span className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
              01. FULL_NAME
            </span>
            <input
              name="name"
              required
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] px-5 h-14 text-base text-[var(--text)] focus:border-[var(--gold)] outline-none transition-all placeholder:text-[var(--text-dim)] font-rajdhani"
              placeholder="JANE_DOE"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-3">
            <span className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
              02. EMAIL_ADDRESS
            </span>
            <input
              name="email"
              required
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] px-5 h-14 text-base text-[var(--text)] focus:border-[var(--gold)] outline-none transition-all placeholder:text-[var(--text-dim)] font-rajdhani"
              placeholder="JANE@SOVEREIGN.IO"
              type="email"
            />
          </label>
        </div>

        <label className="flex flex-col gap-3">
          <span className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
            03. SUBJECT_PROTOCOL
          </span>
          <div className="relative">
            <select
              name="subject"
              className="w-full appearance-none bg-[rgba(255,255,255,0.03)] border border-[var(--border)] px-5 h-14 text-base text-[var(--text)] focus:border-[var(--gold)] outline-none transition-all cursor-none font-rajdhani"
            >
              <option value="general" className="bg-[var(--black)] text-white">General Inquiry</option>
              <option value="tech" className="bg-[var(--black)] text-white">Technical Support</option>
              <option value="sales" className="bg-[var(--black)] text-white">
                Sales & Enterprise Pricing
              </option>
              <option value="partnership" className="bg-[var(--black)] text-white">
                Partnership Opportunities
              </option>
            </select>
            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--gold-dim)] w-4 h-4" />
          </div>
        </label>

        <label className="flex flex-col gap-3">
          <span className="font-mono-dm text-[10px] tracking-[0.2em] text-[var(--gold-dim)] uppercase">
            04. DATA_PAYLOAD
          </span>
          <textarea
            name="message"
            required
            className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] p-5 text-base text-[var(--text)] focus:border-[var(--gold)] outline-none transition-all resize-none placeholder:text-[var(--text-dim)] font-rajdhani"
            placeholder="ENTER_MESSAGE_DETAILS..."
            rows={6}
          ></textarea>
        </label>

        <div className="flex items-start gap-4 mt-2">
          <div className="relative flex items-center h-5">
            <input
              className="peer appearance-none w-5 h-5 border border-[var(--border)] bg-transparent checked:bg-[var(--gold)] checked:border-[var(--gold)] transition-all cursor-none"
              id="privacy"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity">
              <div className="w-2 h-2 bg-[var(--black)]"></div>
            </div>
          </div>
          <label
            className="font-cormorant text-[15px] text-[var(--text-muted)] leading-tight cursor-none select-none"
            htmlFor="privacy"
          >
            I agree to the{" "}
            <Link
              className="text-[var(--gold)] hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>{" "}
            and authorize GTSS to contact me regarding this inquiry.
          </label>
        </div>

        {status?.type === "error" && (
          <div className="p-5 border font-mono-dm text-[11px] tracking-[0.1em] bg-red-500/10 text-red-400 border-red-500/30">
            {status.message}
          </div>
        )}

        <button
          disabled={!agreed || isSubmitting}
          className="mt-6 btn-primary font-mono-dm text-[11px] tracking-[0.25em] uppercase text-[var(--black)] bg-[var(--gold)] px-12 py-5 border-none cursor-none relative overflow-hidden transition-all hover:bg-[var(--gold-bright)] hover:shadow-[var(--glow-gold)] [clip-path:polygon(12px_0%,100%_0%,calc(100%-12px)_100%,0%_100%)] flex items-center justify-center gap-3 disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <span>TRANSMITTING...</span>
              <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              <span>SEND_TRANSMISSION</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
