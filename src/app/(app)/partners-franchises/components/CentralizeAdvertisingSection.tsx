import React from 'react';

const CentralizeAdvertisingSection: React.FC = () => (
  <section className="py-16">
    <div className="container px-12 mx-auto">
      <h2 className="md:text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Centralize your advertising</h2>
      <p className="text-black lg:w-[85%] w-full mx-auto mb-8 font-light md:text-center text-left text-gray-700 dark:text-gray-300">We simplify your digital marketing while keeping local expertise and goals in mind. This means you get high-performing campaigns tailored to your specific needs, freeing up your valuable time to focus on what matters most—running your business.</p>
      <div className="grid md:grid-cols-2 gap-8 xl:gap-14">
        <div className="h-full">
          <div className="card relative rounded-3xl p-8 shadow-lg overflow-hidden bg-gradient-to-b from-red-600 to-red-500 text-white h-full">
            <div className="w-full h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Centralized Approach?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Unified Strategy</h4>
                    <p className="text-sm opacity-90">All your marketing channels work together seamlessly for maximum impact.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost Efficiency</h4>
                    <p className="text-sm opacity-90">Reduce overhead costs with streamlined management and optimized ad spend.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Insights</h4>
                    <p className="text-sm opacity-90">Monitor performance across all platforms from a single dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-full">
          <ul className="w-full px-0 text-gray-700 dark:text-gray-300 text-xl my-0 py-0 space-y-4">
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Customized advertising strategies </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Precise targeting and outreach </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Effortless integration of advertising campaigns </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Informed decision-making for advertising investments with analytics </li>
            <li className="flex items-start"><img className="my-0 mr-4 mt-1" src="https://cdn.searchkings.ca/img/icons/yt-checkmark-c6176e9811.svg" width="24" height="24" alt="bullet" /> Enhance brand visibility across multiple platforms and touchpoints </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CentralizeAdvertisingSection;
