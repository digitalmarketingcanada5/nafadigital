import React from 'react';
import PartnersHero from './components/PartnersHero';
import MaximizeGrowthSection from './components/MaximizeGrowthSection';
import PartnersLogoCloud from './components/PartnersLogoCloud';
import CentralizeAdvertisingSection from './components/CentralizeAdvertisingSection';
import IntelligentMarketingSection from './components/IntelligentMarketingSection';
import GettingStartedEasySection from './components/GettingStartedEasySection';

export default function PartnersAndFranchisesPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <PartnersHero />
        <MaximizeGrowthSection />
        <PartnersLogoCloud />
        <CentralizeAdvertisingSection />
        <IntelligentMarketingSection />
        <GettingStartedEasySection />
      </main>
    </>
  );
}
