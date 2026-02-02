import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import LearnMoreSection from './LearnMoreSection';
import ReviewsSection from './ReviewsSection';
import GettingStartedSection from './GettingStartedSection';
import PartnersSection from './PartnersSection';
import Footer from './Footer';

// START:App
export default function App() {
  return (
    <div className="bg-white">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Header />
      <main className="pt-24">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LearnMoreSection />
        <ReviewsSection />
        <GettingStartedSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
// END:App
