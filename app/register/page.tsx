import { Suspense } from 'react';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { VisualPanel } from '@/components/auth/VisualPanel';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--black)]">
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] h-screen overflow-hidden">
        {/* Left Side: Register Form */}
        <div className="flex-1 flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-[var(--black)] relative z-30 overflow-y-auto">
          <Suspense fallback={<div className="font-mono-dm text-[10px] text-[var(--gold-dim)] animate-pulse">SYNCHRONIZING_PERSONNEL_REGISTRY...</div>}>
            <RegisterForm />
          </Suspense>
        </div>

        {/* Right Side: Visual Panel */}
        <VisualPanel />
      </main>
    </div>
  );
}
