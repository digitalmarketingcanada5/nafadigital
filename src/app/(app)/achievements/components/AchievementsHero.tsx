import React from 'react';

const AchievementsHero = () => (
    <section className="relative w-full pt-[76px] bg-gradient-to-b from-red-600 to-red-500 text-white overflow-hidden">
        <div className="absolute w-full h-full bg-no-repeat bg-cover bottom-0 mix-blend-multiply bg-center opacity-30 bg-[url('https://cdn.searchkings.ca/img/post-circle-bg-2a5c5b8e72.svg')] scale-[2]"></div>
        <div className="container px-12 xl:pb-0 pb-12 flex items-center justify-center min-h-[430px] sm:min-h-[340px] xl:min-h-[600px] relative z-[1] gap-8 py-8 mx-auto">
            <div className="w-full xl:w-1/2 flex flex-col justify-center items-center text-center gap-4 relative">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">Achievements</h1>
                <p className="font-light">Since 2009, we&rsquo;ve provided our customers with transparency and insights into the performance of their digital advertising investment, ensuring our efforts are always in line with their goals. Here are a few of our affiliations and achievements.</p>
            </div>
        </div>
    </section>
);

export default AchievementsHero;
