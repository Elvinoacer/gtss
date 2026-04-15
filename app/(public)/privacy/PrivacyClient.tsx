import { Shield } from "lucide-react";

export function PrivacyClient() {
  return (
    <div className="pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-6">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3>1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, fill out a contact form, or communicate with us.
            This may include your name, email address, and any other information
            you choose to provide.
          </p>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to protect GTSS and our
            users.
          </p>

          <h3>3. Information Sharing</h3>
          <p>
            We do not share your personal information with third parties except
            as described in this policy or with your consent.
          </p>

          <h3>4. Data Security</h3>
          <p>
            We take reasonable measures to help protect information about you
            from loss, theft, misuse, and unauthorized access.
          </p>

          <h3>5. Your Choices</h3>
          <p>
            You may update or correct your account information at any time by
            logging into your account or contacting us.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at omondielvin@gmail.com.
          </p>
        </div>
      </section>
    </div>
  );
}
