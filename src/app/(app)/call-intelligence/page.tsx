import React from 'react';
import CallIntelligenceHero from './components/CallIntelligenceHero';
import BetterDataSection from './components/BetterDataSection';
import BusinessInsightsSection from './components/BusinessInsightsSection';
import SeeHowItWorks from './components/SeeHowItWorks';
import CustomerReviews from './components/CustomerReviews';
import ContactSection from './components/ContactSection';

export default function CallIntelligencePage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <CallIntelligenceHero />
        <BetterDataSection />
        <BusinessInsightsSection />
        {/* <SeeHowItWorks /> */}
        {/* <CustomerReviews /> */}
        {/* <ContactSection /> */}
      </main>
    </>
  )
}
