import React from 'react';
import AchievementCard from './AchievementCard';

const AchievementsList = () => {
    const achievements = [
        {
            bgColor: "bg-[#2fa84f]",
            imgSrc: "https://cdn.searchkings.ca/img/achievements/google-ads-impact-awards-1e4a826ef7.webp",
            title: "2025 Google Ads Impact Award Winner",
            description: "NafaDigital is proud to be the winner of the 2025 Google Ads Impact Award for AI Excellence Award - Breakthrough Agency for using Ai to deliver better results for customers.",
            link: "https://www.prnewswire.com/news-releases/searchkings-named-2025-google-ads-ai-excellence-award-winner-302489227.html?tc=eml_cleartime",
            linkText: "Read the press release"
        },
        {
            bgColor: "bg-[#0075e3]",
            imgSrc: "https://cdn.searchkings.ca/img/achievements/google-partner-28128bdc84.webp",
            title: "Google Premier Partner",
            description: "Premier Partners meet Google's highest standards and criteria for qualification, transparency, and customer service, which includes completing extensive Google product and account management training. We have been a Google Premier Partner since 2012 and currently manage Google Ads Campaigns for over 5,000 clients across North America and worldwide.",
            link: "https://searchkings.ca/pdf/searchkings-plus-google-partners.pdf",
            linkText: "Read our 2021 Google Premier Partners Case Study"
        },
        {
            bgColor: "bg-gradient-to-br from-[#FFE34D] to-[#FFC04D]",
            imgSrc: "https://cdn.searchkings.ca/img/achievements/google-reviews-e1b9b5f3d7.svg",
            title: "1,800+ Google Customer Reviews",
            description: "1,800+ 5-star reviews and counting. Over the past 15 years, we've built trust with thousands of customers by providing transparency into our process and performance of their investment.",
            link: "https://www.google.com/search?q=searchkings+reviews",
            linkText: "Take a look at what our customers think"
        },
        {
            cardType: 'background' as const,
            bgImage: "https://cdn.searchkings.ca/img/achievements/satisfaction-bg-081b832a89.webp",
            title: "Google Customer Satisfaction Award",
            description: "NafaDigital is proud to be the winner of the Google Premier Partner Customer Satisfaction Award."
        },
        {
            bgColor: "bg-[#243a5e]",
            imgSrc: "https://cdn.searchkings.ca/img/achievements/elite-partner-c73e9e938b.webp",
            title: "Microsoft Elite Partner",
            description: "A Microsoft Elite Partner is a designation given to companies that have achieved the highest level of partnership with Microsoft. These partners have demonstrated a high level of expertise and competency in Microsoft technologies and solutions."
        }
    ];

    return (
        <section className="py-16 container px-12 mx-auto">
            <div className="space-y-12">
                {achievements.map(ach => <AchievementCard key={ach.title} {...ach} />)}
            </div>
        </section>
    );
};

export default AchievementsList;
