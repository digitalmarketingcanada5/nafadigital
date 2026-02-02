"use client";
import { useState } from 'react';

interface MaterialIconProps {
    children: string;
    className?: string;
}

const MaterialIcon = ({ children, className = "" }: MaterialIconProps) => (
    <span className={`material-symbols-outlined ${className}`}>
        {children}
    </span>
);

const CustomerReviews = () => {
    const reviews = [
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/allied-comfort-32a6aaaf18.webp",
            quote: "We have been working with NafaDigital for multiple years and this year we implemented Call Intelligence™ at the recommendation of our Account Executive, Nate Sri. With this implemented, Nate has provided us suggested changes which have increased our rate of return on GLS calls. NafaDigital is a great company to work with and I would highly recommend their services!",
            name: "Kristen Berg",
            company: "Allied Comfort Pro, LLC"
        },
        {
            image: "https://cdn.searchkings.ca/img/call-intelligence/pavemar-8da857f946.webp",
            quote: "One of the coolest parts of their service is their lead ranking system, which lets us easily flag high- and low-quality leads. That feedback gets sent straight to Google to help optimize our campaigns and improve future results. It simplifies our review sessions and it's made a real impact on our ROI. They continue to improve their technology while their service remains affordable and transparent. Highly recommend to any business serious about Google Ads and lead generation.",
            name: "Julia Elia",
            company: "Pavemar Paving"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16">
            <div className="container px-12 mx-auto">
                <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">What our customers have to say</h2>
                <p className="lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-gray-700 dark:text-gray-300">What our customers have to say about their experience with NafaDigital and Call Intelligence™</p>
            </div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-12">
                    <div className="rounded-3xl overflow-hidden max-h-[400px]">
                        <img className="h-full w-full object-cover" src={reviews[activeIndex].image} alt={reviews[activeIndex].name} />
                    </div>
                    <div className="relative flex flex-col justify-center gap-8">
                         <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => <MaterialIcon key={i}>star</MaterialIcon>)}
                         </div>
                        <div className="text-base lg:text-xl text-gray-800 dark:text-gray-200">{reviews[activeIndex].quote}</div>
                        <div>
                            <p className="font-bold text-lg text-gray-900 dark:text-gray-100">{reviews[activeIndex].name}</p>
                            <p className="text-base text-gray-600 dark:text-gray-400">{reviews[activeIndex].company}</p>
                        </div>
                    </div>
                </div>
                 <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, index) => (
                        <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-600'}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
