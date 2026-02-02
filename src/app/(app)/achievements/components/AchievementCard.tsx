import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

interface AchievementCardProps {
    cardType?: 'image' | 'background';
    bgColor?: string;
    bgImage?: string;
    imgSrc?: string;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
    cardType = 'image', 
    bgColor, 
    bgImage, 
    imgSrc, 
    title, 
    description, 
    link, 
    linkText 
}) => {
    const bgStyle = bgImage ? { backgroundImage: `url(${bgImage})` } : {};

    return (
        <div className="flex bg-gray-50 rounded-3xl flex-col md:flex-row items-stretch lg:shadow-lg overflow-hidden">
            <div 
                className={`flex justify-center items-center w-full md:w-1/2 rounded-3xl lg:h-auto p-8 min-h-[200px] sm:min-h-[400px] bg-no-repeat bg-cover bg-center ${bgColor || ''}`}
                style={bgStyle}
            >
                {cardType === 'image' && (
                    <img src={imgSrc} alt={title} className="w-auto max-w-[160px] sm:max-w-[240px] lg:max-w-[250px] max-h-[160px] sm:max-h-[190px] lg:max-h-[220px] xl:max-w-full xl:max-h-full shadow-3xl" />
                )}
            </div>
            <div className="w-full md:w-1/2 md:p-12 p-8 flex flex-col justify-center">
                <div>
                    <h2 className="text-3xl font-bold text-left !leading-tight">{title}</h2>
                    <p className="pt-4 mx-auto text-gray-600">{description}</p>
                    {link && linkText && (
                        <a href={link} className="lg:text-xl text-base underline mt-6 block text-gray-800" target="_blank" rel="noopener noreferrer">
                            <span>{linkText} <MaterialIcon className="relative top-1 left-1 !text-base">arrow_outward</MaterialIcon></span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;
