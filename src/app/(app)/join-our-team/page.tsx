import React from 'react';
import JoinTeamHero from './components/JoinTeamHero';
import CompanySection from './components/CompanySection';
import GrowthSection from './components/GrowthSection';
import PerksCarousel from './components/PerksCarousel';
import LocationsSection from './components/LocationsSection';
import JobsAndForm from './components/JobsAndForm';

export default function JoinOurTeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <JoinTeamHero />
      <CompanySection />
      <GrowthSection />
      <PerksCarousel />
      <LocationsSection />
      <JobsAndForm />
    </div>
  );
}