import React from 'react';
import MaterialIcon from '@/components/MaterialIcon';

const GettingStartedEasySection: React.FC = () => {
  const steps = [
    {
      icon: "ads_click",
      title: "Our Process",
      description: "Get started in 3 easy steps."
    },
    {
      icon: "conversion_path",
      title: "Onboard",
      description: "We handle Google & Microsoft's onboarding process for your and get your accounts live faster."
    },
    {
      icon: "offline_bolt",
      title: "Optimize",
      description: "Your dedicated Account Manager continually optimizes lead volume and budget to best suit you."
    },
    {
      icon: "call_quality",
      title: "Support",
      description: "In addition to our dedicated support line, we train you on how to view and action your leads and more."
    }
  ];

  return (
    <section className="py-16">
      <div className="container px-12 mx-auto">
        <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300">Getting started is easy</h2>
        <p className="text-black lg:w-[75%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-700 dark:text-gray-300">Boost your growth by leveraging the potential of Google and Microsoft for comprehensive and effective advertising.</p>
      </div>
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(step => (
            <div key={step.title} className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 text-white h-full flex flex-col justify-between">
              <div>
                <MaterialIcon className="!text-[100px] mb-8 -ml-4">{step.icon}</MaterialIcon>
                <p className="text-3xl font-bold leading-tight">{step.title}</p>
              </div>
              <p className="font-light text-lg mt-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedEasySection;
