import { MinimalHeader } from '@/components/layout/MinimalHeader';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { BackgroundEffects } from '@/components/layout/BackgroundEffects';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen flex flex-col items-center justify-center text-slate-900 dark:text-white p-4 relative">
      <MinimalHeader />
      <BackgroundEffects />

      <main className="w-full max-w-[480px] z-10 relative mt-16 sm:mt-0">
        <RegisterForm />

        {/* Footer Info */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-xs text-slate-500 dark:text-slate-600">
            © 2024 Great Thumbs Software Solutions. Internal Use Only.
          </p>
          <div className="flex justify-center gap-4 text-xs text-slate-500 dark:text-slate-600">
            <Link className="hover:text-slate-400 transition-colors" href="#">
              Privacy
            </Link>
            <span>•</span>
            <Link className="hover:text-slate-400 transition-colors" href="#">
              Security
            </Link>
            <span>•</span>
            <Link className="hover:text-slate-400 transition-colors" href="#">
              Contact IT
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
