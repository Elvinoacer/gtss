import { Suspense } from 'react';
import { LoginForm } from '@/components/auth/LoginForm';
import { VisualPanel } from '@/components/auth/VisualPanel';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--black)]">
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] h-screen overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-[var(--black)] relative z-30">
          <Suspense fallback={<div className="font-mono-dm text-[10px] text-[var(--gold-dim)] animate-pulse">SYNCHRONIZING_ACCESS_PORTAL...</div>}>
            <LoginForm />
          </Suspense>
        </div>

        {/* Right Side: Visual Panel */}
        <VisualPanel />
      </main>
    </div>
  );
}
