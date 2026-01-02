import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { LoginForm } from '@/components/auth/LoginForm';
import { VisualPanel } from '@/components/auth/VisualPanel';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617]">
      <Header />
      
      <main className="flex-1 flex flex-col md:flex-row h-full">
        {/* Left Side: Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-white dark:bg-[#0f172a]">
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>

        {/* Right Side: Visual Panel */}
        <VisualPanel />
      </main>
    </div>
  );
}
