"use client";

import { useEffect, useState } from "react";

const bootMessages = [
  "Initializing secure boot...",
  "Verifying hardware signatures...",
  "Loading cryptographic modules...",
  "Establishing sovereign tunnel...",
  "System online.",
];

export function BootOverlay() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (msgIdx < bootMessages.length) {
      const timeout = setTimeout(
        () => {
          setMsgIdx((prev) => prev + 1);
          setProgress(((msgIdx + 1) / bootMessages.length) * 100);
        },
        msgIdx === bootMessages.length - 1 ? 400 : 280
      );
      return () => clearTimeout(timeout);
    } else {
      const fadeTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(fadeTimeout);
    }
  }, [msgIdx]);

  if (!isVisible) return null;

  return (
    <div
      id="boot-overlay"
      className="fixed inset-0 z-[2000] bg-[var(--black)] flex flex-col items-center justify-center gap-6 transition-opacity duration-600 ease"
      style={{ opacity: msgIdx === bootMessages.length ? 0 : 1 }}
    >
      <div className="boot-logo font-bebas text-5xl tracking-[0.2em] text-[var(--gold)]">
        GTSS_CORE
      </div>
      <div className="boot-text font-mono-dm text-[11px] tracking-[0.2em] text-[var(--text-dim)] uppercase min-h-[20px]">
        {bootMessages[msgIdx] || "System online."}
      </div>
      <div className="boot-bar-track w-[280px] h-[1px] bg-[var(--surface-3)] relative">
        <div
          className="boot-bar-fill h-full bg-gradient-to-r from-[var(--gold)] to-[var(--cyan)] transition-all duration-100 linear shadow-[0_0_8px_var(--gold)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
