"use client";
import React from 'react';
import AdsMgmtHero from './components/AdsMgmtHero';
import ReachPeopleSection from './components/ReachPeopleSection';
import CampaignsSection from './components/CampaignsSection';
import IntelligentMarketingSection from './components/IntelligentMarketingSection';

export default function AdsManagementPage() {
  return (
    <div className="bg-white">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <AdsMgmtHero />
        <ReachPeopleSection />
        <CampaignsSection />
        <IntelligentMarketingSection />
      </main>
    </div>
  )
}
