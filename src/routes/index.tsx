import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { FloatingHeader } from "@/components/layout/FloatingHeader";
import { MobileBookingBar } from "@/components/layout/MobileBookingBar";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { DubaiLifestyle } from "@/components/sections/DubaiLifestyle";
import { Method } from "@/components/sections/Method";
import { FunctionalFitness } from "@/components/sections/FunctionalFitness";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { InstagramCTA } from "@/components/sections/InstagramCTA";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-pearl text-midnight">
        <FloatingHeader />
        <main>
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <DubaiLifestyle />
          <Method />
          <FunctionalFitness />
          <Gallery />
          <Testimonials />
          <Booking />
          <InstagramCTA />
        </main>
        <Footer />
        <MobileBookingBar />
        <WhatsAppFab />
        <Toaster
          position="top-center"
          toastOptions={{
            className: "!bg-pearl !text-midnight !border !border-gold/40 !rounded-2xl !shadow-lg",
          }}
        />
      </div>
    </LanguageProvider>
  );
}
