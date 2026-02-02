import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import CallToActionBand from "@/components/CallToActionBand";
import GettingStartedSection from "@/components/GettingStartedSection";
import HeroSection from "@/components/HeroSection";
import LearnMoreSection from "@/components/LearnMoreSection";
import PartnersSection from "@/components/PartnersSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CallToActionBand />
      <AwardsSection />
      <ServicesSection />
      <CallToActionBand />
      {/* <LearnMoreSection /> */}
      <ReviewsSection />
      <GettingStartedSection />
      <CallToActionBand />
      <PartnersSection />
    </>
  );
}
