import React from 'react';
import VideoMarketingHero from './components/VideoMarketingHero';
import GrowBusinessSection from './components/GrowBusinessSection';
import WhyVideoAdvertisingSection from './components/WhyVideoAdvertisingSection';
import GettingStartedSection from './components/GettingStartedSection';

export default function VideoMarketingPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <VideoMarketingHero />
        <GrowBusinessSection />
        <WhyVideoAdvertisingSection />
        <GettingStartedSection />
      </main>
    </>
  )
}
