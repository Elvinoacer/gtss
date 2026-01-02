'use client';

import { motion } from 'framer-motion';

interface WizardStep {
  number: number;
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface WizardStepsProps {
  currentStep: number;
  steps: string[];
  onStepChange?: (step: number) => void;
}

export function WizardSteps({ currentStep, steps, onStepChange }: WizardStepsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 overflow-x-auto"
    >
      <div className="flex border-b border-gray-200 dark:border-gray-700 min-w-max">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <motion.button
              key={stepNumber}
              whileHover={{ y: -2 }}
              onClick={() => onStepChange?.(stepNumber)}
              className={`group flex items-center gap-2 border-b-2 pb-3 px-4 transition-all ${
                isActive
                  ? 'border-[#2563eb]'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? 'bg-[#2563eb] text-white'
                    : isCompleted
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                }`}
              >
                {isCompleted ? '✓' : stepNumber}
              </span>
              <span
                className={`text-sm transition-colors ${
                  isActive
                    ? 'text-[#2563eb] font-bold'
                    : 'text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200'
                }`}
              >
                {step}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
