import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { BioSection } from "@/components/bio-section";
import { LinksSection } from "@/components/links-section";
import { EmailCapture } from "@/components/email-capture";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BioSection />
      <LinksSection />
      <EmailCapture />
      <Footer />
    </main>
  );
}
