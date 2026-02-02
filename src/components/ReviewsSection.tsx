// START:ReviewsSection
// Reviews Section
import React from 'react';
import MaterialIcon from './MaterialIcon';
const ReviewsSection = () => {
    const reviews = [
        {
            quote: "Working with NafaDigital has transformed our business completely. Our leads increased by 200% in just 3 months, and the quality of customers we're getting is exceptional. Their team is professional and always available to help.",
            name: "Michael Johnson"
        },
        {
            quote: "I've tried several digital marketing agencies before, but none delivered results like NafaDigital. Their strategic approach to Google Ads management has given us the highest ROI we've ever experienced. Highly recommend their services.",
            name: "Sarah Chen"
        },
        {
            quote: "The team at NafaDigital doesn't just manage our ads - they genuinely care about our success. Their insights and recommendations have helped us grow our business beyond what we thought was possible. Outstanding service!",
            name: "David Rodriguez"
        },
        {
            quote: "From day one, NafaDigital showed professionalism and expertise that set them apart. Our conversion rates improved dramatically, and their transparent reporting gives us complete confidence in their services.",
            name: "Emma Thompson"
        },
    ];

    const extendedReviews = [...reviews, ...reviews];

    return (
        <section className="py-16 bg-gray-900 dark:bg-black overflow-hidden">
             <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .scrolling-container:hover .scrolling-track {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className="container mx-auto flex items-center flex-col">
                <div className="text-center px-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by 300+ customers</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        At NafaDigital, we take pride in the relationships we have with our customers.
                        <br className="hidden sm:block" />
                        We treat every customer like our first.
                    </p>
                </div>

                <div className="w-full scrolling-container">
                    <div className="flex scrolling-track" style={{ animation: 'scroll 60s linear infinite' }}>
                        {extendedReviews.map((review, index) => (
                            <div
                                key={index}
                                className="relative w-[320px] sm:w-[450px] lg:w-[550px] mx-4 shrink-0 flex flex-col text-left gap-3 rounded-2xl p-8 bg-gray-800 text-white"
                            >
                                <img src="https://cdn.searchkings.ca/img/testimonials/format_quote-92edec28f4.svg" className="absolute -top-5 left-5 w-16" alt="Quote"/>
                                <p className="font-light text-base sm:text-lg flex-grow text-gray-200">
                                    {review.quote}
                                </p>
                                <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <img 
                                        key={i} 
                                        src="/images/star.png" 
                                        alt="star" 
                                        className="w-6 h-6"
                                    />
                                ))}
                            </div>
                                <div>
                                    <p className="font-semibold text-sm sm:text-base text-white">{review.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="#" className="shrink-0 w-max block mt-12 no-underline shadow-xl rounded-full overflow-hidden mx-auto bg-white hidden">
                    <div className="group md:text-lg text-base text-gray-900 font-bold h-full hover:bg-gray-100 px-7 py-3 flex items-center gap-2 transition-all duration-300">
                        <img src="https://cdn.searchkings.ca/img/icons/task_alt-07875e2f17.svg" width="24" height="24" alt="Google Icon"/>
                        <span className="tracking-tight">Our Google Reviews</span>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ReviewsSection;
// END:ReviewsSection
