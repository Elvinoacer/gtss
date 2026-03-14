'use client';
import { useSession } from 'next-auth/react';


import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { WizardSteps, ProductIdentityForm, ProductMediaForm, ProductDetailsForm, ProductPricingForm, ProductReviewForm } from '@/components/wizard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { productIdentitySchema, productDetailsSchema, productPricingSchema, productMediaSchema } from '@/lib/validations/product';
import { z } from 'zod';
import { createProduct } from '@/lib/actions/products';
import { useRouter } from 'next/navigation';
import { productWizardSteps, initialProductFormData } from '@/data/products';

export default function ProductCreatePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialProductFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = productWizardSteps;

    const { data: session } = useSession();
  const user = {
    name: session?.user?.name || 'User',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
  };

  const validateStep = (step: number) => {
    try {
      setErrors({});
      if (step === 1) {
        productIdentitySchema.parse(formData);
      } else if (step === 2) {
        productDetailsSchema.parse(formData);
      } else if (step === 3) {
        productPricingSchema.parse(formData);
      } else if (step === 4) {
        productMediaSchema.parse(formData);
      }
      // Step 5 (Review) doesn't need validation
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        (error as any).errors.forEach((err: any) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        // Submit form
        await handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createProduct(formData);
      if (result.success) {
        alert('Product created successfully!');
        router.push('/dashboard/products');
      } else {
        alert('Failed to create product: ' + result.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!formData.name) {
      alert("A Product Name is required to save a draft.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const result = await createProduct({ ...formData, status: 'draft' });
      if (result.success) {
        alert('Draft saved successfully!');
        router.push('/dashboard/products');
      } else {
        alert('Failed to save draft: ' + result.error);
      }
    } catch (error) {
      console.error('Save draft error:', error);
      alert('An unexpected error occurred while saving.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepDescriptions = [
    'Basic information to identify the product across the platform.',
    'Detailed instructions and key features.',
    'Pricing model and cost structure.',
    'Media assets including images and demo video.',
    'Review all details before submitting.',
  ];

  return (
    <DashboardLayout user={user}>
      <div className="w-full max-w-5xl mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link
            href="/dashboard"
            className="text-gray-500 hover:text-[#2563eb] transition-colors"
          >
            Dashboard
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href="/dashboard/products"
            className="text-gray-500 hover:text-[#2563eb] transition-colors"
          >
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-slate-900 dark:text-white font-medium">
            Create New
          </span>
        </div>

        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2 mb-8"
        >
          <h1 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
            Product Creation Wizard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base">
            Follow the steps to register a new software product in the GTSS
            ecosystem.
          </p>
        </motion.div>

        {/* Wizard Steps */}
        <WizardSteps
          currentStep={currentStep}
          steps={steps}
          onStepChange={(step) => {
            // Allow going back without validation, but validate when going forward
            if (step < currentStep || validateStep(currentStep)) {
              setCurrentStep(step);
            }
          }}
        />

        {/* Form Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-12"
        >
          {/* Form Header */}
          <div className="px-8 pt-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Step {currentStep}: {steps[currentStep - 1]}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {stepDescriptions[currentStep - 1]}
            </p>
          </div>

          {/* Form Body */}
          <div className="p-8">
            {currentStep === 1 && (
              <ProductIdentityForm data={formData} onChange={setFormData} errors={errors} />
            )}
            {currentStep === 2 && (
              <ProductDetailsForm data={formData} onChange={setFormData} />
            )}
            {currentStep === 3 && (
              <ProductPricingForm data={formData} onChange={setFormData} errors={errors} />
            )}
            {currentStep === 4 && (
              <ProductMediaForm data={formData} onChange={setFormData} />
            )}
            {currentStep === 5 && (
              <ProductReviewForm data={formData} />
            )}
          </div>

          {/* Footer / Actions */}
          <div className="px-8 py-5 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <Link
              href="/dashboard/products"
              className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Cancel
            </Link>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSaveDraft}
                disabled={isSubmitting}
                className="text-[#2563eb] font-medium text-sm px-5 py-2.5 rounded-lg border border-transparent hover:bg-[#2563eb]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                type="button"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Save Draft
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={isSubmitting}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-sm shadow-blue-500/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {currentStep === steps.length ? 'Submit' : 'Next Step'}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
