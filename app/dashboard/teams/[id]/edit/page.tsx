'use client';
import { useSession } from 'next-auth/react';


import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Briefcase, Globe, FileText, Loader2, Upload, MessageCircle, Network, Users } from 'lucide-react';
import { useState, useEffect, use } from 'react';
import { getTeamMemberById, updateTeamMember } from '@/lib/actions/teams';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function TeamEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    bio: '',
    portfolioUrl: '',
    twitterUrl: '',
    linkedinUrl: '',
    joinDate: '',
    team: '',
    avatar: '',
  });

    const { data: session } = useSession();
  const user = {
    name: session?.user?.name || 'User',
    email: session?.user?.email || '',
    avatar: session?.user?.image || undefined,
  };

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const result = await getTeamMemberById(id);
        if (result.success && result.data) {
          const member = result.data;
          setFormData({
            name: member.name || '',
            role: member.role || '',
            email: member.email || '',
            bio: member.bio || '',
            portfolioUrl: member.portfolioUrl || '',
            twitterUrl: member.twitterUrl || '',
            linkedinUrl: member.linkedinUrl || '',
            joinDate: member.joinDate || '',
            team: member.team || '',
            avatar: member.avatar || '',
          });
        } else {
          alert('Failed to fetch team member: ' + result.error);
          router.push('/dashboard/teams');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMember();
  }, [id, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await updateTeamMember(id, formData);
      if (result.success) {
        router.push('/dashboard/teams');
      } else {
        alert('Failed to update team member: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout user={user}>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link href="/dashboard" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">
            Dashboard
          </Link>
          <span className="text-[#E5E7EB]">/</span>
          <Link href="/dashboard/teams" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">
            Teams
          </Link>
          <span className="text-[#E5E7EB]">/</span>
          <span className="text-[#111827] dark:text-white font-medium">Edit Member</span>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link 
            href="/dashboard/teams"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#6B7280]" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#111827] dark:text-white">Edit Team Member</h1>
            <p className="text-[#6B7280] text-sm">Update the details for {formData.name}.</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#0F172A] rounded-xl border border-[#E5E7EB] dark:border-[#1e293b] p-8 shadow-sm"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <User className="w-4 h-4 text-[#6B7280]" />
                Full Name <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="John Doe"
              />
            </div>

            {/* Role */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <Briefcase className="w-4 h-4 text-[#6B7280]" />
                Role <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="Software Engineer"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <Mail className="w-4 h-4 text-[#6B7280]" />
                Email <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="john@gtss.com"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <FileText className="w-4 h-4 text-[#6B7280]" />
                Bio
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white resize-none"
                placeholder="A short bio about the team member..."
              />
            </div>

            {/* Portfolio URL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <Globe className="w-4 h-4 text-[#6B7280]" />
                Portfolio URL
              </label>
              <input
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="https://johndoe.com"
              />
            </div>

            {/* Twitter URL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <MessageCircle className="w-4 h-4 text-[#6B7280]" />
                Twitter URL
              </label>
              <input
                type="url"
                value={formData.twitterUrl}
                onChange={(e) => setFormData({ ...formData, twitterUrl: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="https://twitter.com/johndoe"
              />
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <Network className="w-4 h-4 text-[#6B7280]" />
                LinkedIn URL
              </label>
              <input
                type="url"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="https://linkedin.com/in/johndoe"
              />
            </div>

            {/* Team & Join Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                  <Users className="w-4 h-4 text-[#6B7280]" />
                  Team
                </label>
                <input
                  type="text"
                  value={formData.team}
                  onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                  placeholder="Engineering"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                  <FileText className="w-4 h-4 text-[#6B7280]" />
                  Join Date
                </label>
                <input
                  type="text"
                  value={formData.joinDate}
                  onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                  placeholder="Jan 2024"
                />
              </div>
            </div>

            {/* Avatar URL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#111827] dark:text-white mb-2">
                <Upload className="w-4 h-4 text-[#6B7280]" />
                Avatar URL
              </label>
              <input
                type="url"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-[#1e293b] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-[#111827] dark:text-white"
                placeholder="https://example.com/avatar.jpg"
              />
              <p className="text-xs text-[#6B7280] mt-1">
                Paste a URL to the team member's avatar image.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-[#E5E7EB] dark:border-[#1e293b]">
            <Link
              href="/dashboard/teams"
              className="px-5 py-2.5 text-[#6B7280] hover:text-[#111827] font-medium transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </DashboardLayout>
  );
}
