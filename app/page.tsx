import { StructuredData } from "@/components/StructuredData";
import { Contacts } from "@/components/sections/Contacts";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LeadForm } from "@/components/sections/LeadForm";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { PriceTable } from "@/components/sections/PriceTable";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { Trust } from "@/components/sections/Trust";
import { Urgency } from "@/components/sections/Urgency";
import { Workflow } from "@/components/sections/Workflow";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <Urgency />
        <PriceTable />
        <Trust />
        <Workflow />
        <Reviews />
        <Faq />
        <LeadForm />
        <Contacts />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
