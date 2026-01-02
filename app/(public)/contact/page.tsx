import { 
  ContactHero, 
  ContactForm, 
  ContactInfo, 
  ContactMap 
} from '@/components/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GTSS. We are here to help you with your software needs.",
  openGraph: {
    title: "Contact GTSS",
    description: "Get in touch with GTSS. We are here to help you with your software needs.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-grow">
      <ContactHero />
      <div className="flex-grow px-4 md:px-10 py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
