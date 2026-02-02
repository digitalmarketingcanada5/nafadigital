import React from 'react';
import MaterialIcon from '../../../../components/MaterialIcon';

const WhyWorkWithNafaDigital: React.FC = () => {
  const items = [
    { icon: 'layers_clear', title: 'No Contracts', description: 'We work month-to-month with all clients.' },
    { icon: 'account_balance_wallet', title: 'Flexible Budgets', description: 'Adjust your budget and generate leads when you need.' },
    { icon: 'money_off', title: 'Flat-rate Fee', description: 'Creating scalable pricing structures so you pay less.' },
    { icon: 'credit_card_off', title: 'No Start-up Fees*', description: 'We give you $500 to start with Google Ads!', footnote: '* Conditions apply' },
    { icon: 'auto_awesome', title: 'Call Intelligence™', description: "We show you what's working and what's not." }
  ];

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why work with NafaDigital?</h2>
          <p className="pb-8">We are experts at managing scalable search, remarketing, display and video advertising campaigns.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {items.map(item => (
            <div key={item.title} className="flex flex-col items-center text-center md:w-1/3 sm:w-1/2 w-full p-4">
              <MaterialIcon className="text-4xl">{item.icon}</MaterialIcon>
              <p className="text-xl font-medium mt-2">{item.title}</p>
              <p className="text-base font-light pt-2">{item.description}</p>
              {item.footnote && <small className="text-white font-light block leading-4 mt-2">{item.footnote}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithNafaDigital;
