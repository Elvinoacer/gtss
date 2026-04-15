import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is GTSS?",
    answer: "Great Thumbs Software Solutions (GTSS) is a parent software company that designs, builds, and manages practical software solutions for local businesses and communities across Africa."
  },
  {
    question: "How can I get a custom software solution?",
    answer: "You can start by reaching out to us through our contact page. We specialize in building bespoke software tailored to your unique business requirements."
  },
  {
    question: "Do you offer subscription-based products?",
    answer: "Yes, we support multiple monetization models, including one-time payments and subscription-based models for products like our E-commerce and Church Management systems."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support team via email at omondielvin@gmail.com or call us at +254 790 670 542. You can also start a WhatsApp conversation directly from our contact page."
  },
  {
    question: "Where is GTSS located?",
    answer: "Our headquarters is located in Eldoret, Kenya. You can find our precise location on the map provided on the contact page."
  }
];

export default function FAQPage() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about GTSS, our products, and how we can help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-center text-white shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-8 text-blue-100">
            We're here to help you with any inquiries you might have.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
