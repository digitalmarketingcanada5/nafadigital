import React from 'react';
import WebHostingHero from './components/WebHostingHero';
import PricingSection from './components/PricingSection';

export default function WebHostingPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <WebHostingHero />
        <PricingSection />
      </main>
    </>
  );
}
