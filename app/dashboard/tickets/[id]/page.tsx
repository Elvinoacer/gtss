'use client';

import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { 
  TicketDetailsHeader, 
  TicketDescription, 
  TicketActivity, 
  TicketSidebar 
} from '@/components/support';
import { motion } from 'framer-motion';

import { ticketDetailData } from '@/data/support';

export default function TicketDetailsPage() {
  const user = {
    name: 'Alex Morgan',
    email: 'alex@gtss.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  const ticketData = ticketDetailData;

  return (
    <DashboardLayout user={user}>
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <main className="flex-1 min-w-0 flex flex-col gap-8">
          <TicketDetailsHeader 
            id={ticketData.id}
            title={ticketData.title}
            priority={ticketData.priority}
            openedDate={ticketData.openedDate}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <TicketDescription 
              description={ticketData.description}
              stepsToReproduce={ticketData.stepsToReproduce}
              attachments={ticketData.attachments}
            />
            
            <TicketActivity activities={ticketData.activities} />
          </motion.div>
        </main>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TicketSidebar 
            status={ticketData.status}
            assignee={ticketData.assignee}
            reporter={ticketData.reporter}
            details={ticketData.details}
          />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
