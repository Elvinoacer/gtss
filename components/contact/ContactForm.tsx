'use client';

import { Send, ChevronDown, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { sendEmail } from '@/lib/actions/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        (e.target as HTMLFormElement).reset();
        setAgreed(false);
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-strong rounded-2xl p-6 md:p-10"
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        Send us a message
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-white/70 text-sm font-medium">Full Name</span>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 h-12 text-base text-white focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none transition-all placeholder:text-white/30"
              placeholder="Jane Doe"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-white/70 text-sm font-medium">Email</span>
            <input
              name="email"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 h-12 text-base text-white focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none transition-all placeholder:text-white/30"
              placeholder="jane@company.com"
              type="email"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-white/70 text-sm font-medium">Subject</span>
          <div className="relative">
            <select
              name="subject"
              className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 h-12 text-base text-white focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none transition-all cursor-pointer"
            >
              <option className="bg-[#1a1d2d]">General Inquiry</option>
              <option className="bg-[#1a1d2d]">Technical Support</option>
              <option className="bg-[#1a1d2d]">Sales & Enterprise Pricing</option>
              <option className="bg-[#1a1d2d]">Partnership Opportunities</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50 w-5 h-5" />
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-white/70 text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-base text-white focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] outline-none transition-all resize-none placeholder:text-white/30"
            placeholder="Tell us how we can help..."
            rows={5}
          ></textarea>
        </label>
        <div className="flex items-start gap-3 mt-2">
          <input
            className="mt-1 rounded border-white/30 bg-white/5 text-[#007AFF] focus:ring-[#007AFF] size-4 cursor-pointer"
            id="privacy"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label className="text-sm text-white/50 cursor-pointer" htmlFor="privacy">
            I agree to the <Link className="text-[#00C2FF] hover:underline" href="/privacy">Privacy Policy</Link> and authorize GTSS to contact me about my inquiry.
          </label>
        </div>

        {status && (
          <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
            {status.message}
          </div>
        )}

        <button
          disabled={!agreed || isSubmitting}
          className="mt-4 btn-primary-glow flex w-full md:w-auto md:self-start items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          {isSubmitting ? (
            <>
              <span>Sending...</span>
              <Loader2 className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
