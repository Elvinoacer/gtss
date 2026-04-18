import type { Metadata } from "next";
import { RoleExperience } from "./RoleExperience";

export const metadata: Metadata = {
  title: "GTSS Restaurant Manager — Full Experience Walkthrough",
  description:
    "Explore every screen of the GTSS Restaurant Manager: guest ordering, kitchen display, waiter dashboard, and admin command center. See the system in action.",
};

export default function ExperiencePage() {
  return <RoleExperience />;
}
