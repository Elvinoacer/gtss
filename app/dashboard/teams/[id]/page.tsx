"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  ProfileHeader,
  ContactInfo,
  StatsCards,
  ProductAssignmentsTable,
  PermissionsToggles,
} from "@/components/profile";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, use } from "react";
import { memberTabs } from "@/data/teams";
import { getTeamMemberById } from "@/lib/actions/teams";
import { Loader2 } from "lucide-react";

export default function MemberProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("overview");
  const [member, setMember] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const user = {
    name: "Alex Morgan",
    email: "alex@gtss.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  };

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const result = await getTeamMemberById(id);
        if (result.success) {
          setMember(result.data);
        }
      } catch (error) {
        console.error("Error fetching member:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMember();
  }, [id]);

  const tabs = memberTabs;

  if (isLoading) {
    return (
      <DashboardLayout user={user}>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#2563EB]" />
        </div>
      </DashboardLayout>
    );
  }

  if (!member) {
    return (
      <DashboardLayout user={user}>
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Member Not Found</h2>
          <p className="text-slate-500 dark:text-gray-400 mb-6">The team member you are looking for does not exist or has been removed.</p>
          <Link
            href="/dashboard/teams"
            className="px-6 py-2 bg-[#2563eb] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition-colors"
          >
            Back to Teams
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout user={user}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link
            href="/dashboard"
            className="hover:text-[#2563eb] transition-colors"
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/dashboard/teams"
            className="hover:text-[#2563eb] transition-colors"
          >
            Team Management
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white font-medium">
            {member.name}
          </span>
        </nav>

        {/* Profile Header */}
        <ProfileHeader
          id={member.id}
          name={member.name}
          employeeId={member.id.substring(0, 8).toUpperCase()}
          role={member.role}
          department={member.team || "General"}
          avatar={member.avatar}
          isActive={member.status === 'active'}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <ContactInfo
              email={member.email}
              phone={member.phone || "N/A"}
              slack={member.slack || "N/A"}
              timezone={member.timezone || "UTC+3"}
            />
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <StatsCards 
              activeProjects={0} 
              tenure={member.joinDate || "N/A"} 
              teamSize={0} 
            />

            {/* Main Tabs Container */}
            <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden min-h-[500px]">
              {/* Tabs Header */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 px-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "text-[#2563eb] border-[#2563eb]"
                        : "text-gray-500 dark:text-gray-400 border-transparent hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <>
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Biography</h3>
                      <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                        {member.bio || "No biography provided."}
                      </p>
                    </div>
                    <ProductAssignmentsTable />
                    <PermissionsToggles />
                  </>
                )}
                {activeTab === "products" && <ProductAssignmentsTable />}
                {activeTab === "permissions" && <PermissionsToggles />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
