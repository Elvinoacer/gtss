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
      className="bg-white dark:bg-[#1a1d2d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-10"
    >
      <h2 className="text-2xl font-bold text-[#111218] dark:text-white mb-8">
        Send us a message
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-[#111218] dark:text-gray-200 text-sm font-medium">Full Name</span>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-[#dbdde6] dark:border-gray-600 bg-white dark:bg-gray-800 px-4 h-12 text-base text-[#111218] dark:text-white focus:border-[#1337ec] focus:ring-1 focus:ring-[#1337ec] outline-none transition-shadow placeholder:text-gray-400"
              placeholder="Jane Doe"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[#111218] dark:text-gray-200 text-sm font-medium">Email</span>
            <input
              name="email"
              required
              className="w-full rounded-lg border border-[#dbdde6] dark:border-gray-600 bg-white dark:bg-gray-800 px-4 h-12 text-base text-[#111218] dark:text-white focus:border-[#1337ec] focus:ring-1 focus:ring-[#1337ec] outline-none transition-shadow placeholder:text-gray-400"
              placeholder="jane@company.com"
              type="email"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          <span className="text-[#111218] dark:text-gray-200 text-sm font-medium">Subject</span>
          <div className="relative">
            <select
              name="subject"
              className="w-full appearance-none rounded-lg border border-[#dbdde6] dark:border-gray-600 bg-white dark:bg-gray-800 px-4 h-12 text-base text-[#111218] dark:text-white focus:border-[#1337ec] focus:ring-1 focus:ring-[#1337ec] outline-none transition-shadow cursor-pointer"
            >
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Sales & Enterprise Pricing</option>
              <option>Partnership Opportunities</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-5 h-5" />
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[#111218] dark:text-gray-200 text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            className="w-full rounded-lg border border-[#dbdde6] dark:border-gray-600 bg-white dark:bg-gray-800 p-4 text-base text-[#111218] dark:text-white focus:border-[#1337ec] focus:ring-1 focus:ring-[#1337ec] outline-none transition-shadow resize-none placeholder:text-gray-400"
            placeholder="Tell us how we can help..."
            rows={5}
          ></textarea>
        </label>
        <div className="flex items-start gap-3 mt-2">
          <input
            className="mt-1 rounded border-gray-300 text-[#1337ec] focus:ring-[#1337ec] size-4 cursor-pointer"
            id="privacy"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer" htmlFor="privacy">
            I agree to the <Link className="text-[#1337ec] hover:underline" href="/privacy">Privacy Policy</Link> and authorize GTSS to contact me about my inquiry.
          </label>
        </div>

        {status && (
          <div className={`p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {status.message}
          </div>
        )}

        <button
          disabled={!agreed || isSubmitting}
          className="mt-4 flex w-full md:w-auto md:self-start items-center justify-center gap-2 rounded-lg bg-[#1337ec] hover:bg-blue-700 text-white font-bold h-12 px-8 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
