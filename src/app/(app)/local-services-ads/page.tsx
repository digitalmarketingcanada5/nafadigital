import React from 'react';
import LocalServicesHero from './components/LocalServicesHero';
import HowItWorksSection from './components/HowItWorksSection';
import BookLocalJobsSection from './components/BookLocalJobsSection';
import IntelligentMarketingSection from './components/IntelligentMarketingSection';
import GettingStartedSection from './components/GettingStartedSection';

export default function LocalServicesAdsPage() {
    return (
        <main>
            <LocalServicesHero />
            <HowItWorksSection />
            <BookLocalJobsSection />
            <IntelligentMarketingSection />
            <GettingStartedSection />
        </main>
    );
}