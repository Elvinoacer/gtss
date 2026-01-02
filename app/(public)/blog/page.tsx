import { motion } from 'framer-motion';
import { Rss, Calendar, User, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { BlogClient } from './BlogClient'; // We need to create this or inline the client logic

export const metadata: Metadata = {
  title: "Blog",
  description: "Latest insights, engineering updates, and community stories from GTSS.",
  openGraph: {
    title: "GTSS Blog - Insights & Updates",
    description: "Latest insights, engineering updates, and community stories from GTSS.",
  },
};

// Since the original file had client-side animations (framer-motion), we need to separate the client part.
// I will create a new client component for the blog content and import it here.
// But wait, I can't create a new file in this tool call easily without knowing if I should.
// Let's check if I can just make this a server component and use a client wrapper for the animations.
// Or I can just inline the client component in a separate file in the next step.
// For now, I'll write the server component here and assume I'll create the client component next.

export default function BlogPage() {
  return <BlogClient />;
}
