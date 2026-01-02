'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

function Toggle({ label, description, checked, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold text-navy dark:text-white group-hover:text-accent transition-colors">{label}</span>
        <span className="text-xs text-text-subtle">{description}</span>
      </div>
      <button 
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          checked ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

export function SystemDefaults() {
  const [sso, setSso] = useState(false);
  const [publicView, setPublicView] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <section className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1a2e22] shadow-sm h-full">
      <div className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <h2 className="text-lg font-bold text-navy dark:text-white">System Defaults</h2>
      </div>
      <div className="p-6 flex flex-col justify-center gap-8">
        <Toggle 
          label="Require SSO for Employees"
          description="Enforce single sign-on for all internal accounts."
          checked={sso}
          onChange={setSso}
        />
        <Toggle 
          label="Allow Public Project Views"
          description="Let projects be visible to non-logged-in users."
          checked={publicView}
          onChange={setPublicView}
        />
        <Toggle 
          label="Two-Factor Auth Enforcement"
          description="Require 2FA for all admin roles."
          checked={twoFactor}
          onChange={setTwoFactor}
        />
      </div>
    </section>
  );
}
