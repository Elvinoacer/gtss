import { getTeamMembers } from "@/lib/actions/teams";
import { AboutClient } from "./AboutClient";
import { Metadata } from "next";
import type { TeamMember } from "@/src/generated/client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GTSS, our mission to empower African businesses, and the team building practical software solutions.",
  openGraph: {
    title: "About GTSS - Building for Africa",
    description:
      "Learn about GTSS, our mission to empower African businesses, and the team building practical software solutions.",
  },
};

export default async function AboutPage() {
  const response = await getTeamMembers();
  const teamMembers: TeamMember[] =
    response.success && response.data ? response.data : [];

  return <AboutClient teamMembers={teamMembers} />;
}
