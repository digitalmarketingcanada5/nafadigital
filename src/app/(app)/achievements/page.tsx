import React from 'react';
import AchievementsHero from './components/AchievementsHero';
import AchievementsList from './components/AchievementsList';

export default function AchievementsPage() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <main>
        <AchievementsHero />
        <AchievementsList />
      </main>
    </>
  )
}
