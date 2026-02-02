import React from 'react';
import EcommerceHero from './components/EcommerceHero';
import RightShoppersSection from './components/RightShoppersSection';
import IncreaseVisibilitySection from './components/IncreaseVisibilitySection';
import IntelligentMarketingSection from './components/IntelligentMarketingSection';
import GettingStartedSection from './components/GettingStartedSection';

export default function EcommerceAdsPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <EcommerceHero />
        <RightShoppersSection />
        <IncreaseVisibilitySection />
        <IntelligentMarketingSection />
        <GettingStartedSection />
      </main>
    </>
  )
}
