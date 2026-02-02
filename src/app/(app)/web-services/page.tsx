import React from 'react';
import WebServicesHero from './components/WebServicesHero';
import EngagingWebsitesSection from './components/EngagingWebsitesSection';
import ConversionRatesSection from './components/ConversionRatesSection';
import WebDesignSection from './components/WebDesignSection';
import HostingSection from './components/HostingSection';
import GettingStartedSection from './components/GettingStartedSection';

export default function WebServicesPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <WebServicesHero />
        <EngagingWebsitesSection />
        <ConversionRatesSection />
        <WebDesignSection />
        <HostingSection />
        <GettingStartedSection />
      </main>
    </>
  )
}
