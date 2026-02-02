import React from "react";
import MaterialIcon from "@/components/MaterialIcon";

const PricingSection: React.FC = () => {
  const plans = [
    { name: "Starter", price: "$99" },
    { name: "Grow", price: "$245" },
    { name: "Pro", price: "$500" },
  ];

  const features = [
    { name: "Hosting package", values: [true, true, true] },
    { name: "Website monitoring", values: [true, true, true] },
    { name: "Email support", values: [true, true, true] },
    { name: "Plugin updates", values: [true, true, true] },
    { name: "Content updates", values: [false, "1hr / mo", "2hr / mo"] },
    { name: "Image updates", values: [false, "1hr / mo", "2hr / mo"] },
    { name: "eCommerce site updates", values: [false, false, "2hr / mo"] },
    { name: "Offsite backup / monthly", values: [true, false, false] },
    { name: "Offsite backup / daily", values: [false, true, true] },
    { name: "Speed optimization", values: [false, true, true] },
    { name: "Broken link monitoring", values: [false, true, true] },
    { name: "CDN & DDos monitoring", values: [false, true, true] },
    { name: "Google webmaster tools", values: [false, true, true] },
    { name: "Shared SSL", values: [true, true, false] },
    { name: "Dedicated SSL", values: [false, false, true] },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 pb-4">
            Don&apos;t let downtime keep you from attracting new customers
          </h2>
          <p className="xl:w-[80%] mx-auto text-gray-700 dark:text-gray-300">
            All businesses need robust website hosting and maintenance solutions
            to protect against viruses, malware, and hackers. Often overlooked,
            the speed of your website or landing page is a critical factor in
            how Google determines what you pay for each click and is crucial for
            achieving top positions in both natural and paid search.
          </p>
          <p className="xl:w-[80%] mx-auto text-gray-700 dark:text-gray-300 mt-4">
            Our lightening-fast shared cloud service solutions ensure we provide
            the highest quality for our all of our customers.
          </p>
          <p className="font-bold mt-8">Choose the plan that works for you.</p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-4 mb-4">
          <div className="hidden lg:block"></div>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-t-3xl p-4 text-center text-gray-700 dark:text-gray-200"
            >
              <strong className="text-lg">{plan.name}</strong>
              <span className="lg:text-base text-xs block leading-tight">
                (Hosting + Maintenance)
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-2 lg:gap-x-4 mb-8">
          <div className="hidden lg:block"></div>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-b-3xl p-4 text-center text-gray-700 dark:text-gray-200"
            >
              <span className="text-sm">Starting From</span>
              <br />
              <strong className="text-xl lg:text-3xl xl:text-4xl">
                {plan.price}
              </strong>
              <br />
              /month
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="grid grid-cols-4 lg:grid-cols-4 gap-x-2 lg:gap-x-4 border-b-2 py-2 items-center"
            >
              <div className="text-xs md:text-base text-left col-span-1">
                {feature.name}
              </div>
              {feature.values.map((value, index) => (
                <div
                  key={index}
                  className="w-full text-xs md:text-base bg-gray-50 dark:bg-gray-800 flex items-center justify-center h-12 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {value === true ? (
                    <MaterialIcon className="text-green-600 dark:text-green-400 rounded-full bg-green-50 dark:bg-green-900/20 !text-sm w-6 h-6 flex justify-center items-center border border-green-200 dark:border-green-800">
                      check
                    </MaterialIcon>
                  ) : value ? (
                    <span className="text-gray-700 dark:text-gray-200 font-medium">
                      {value}
                    </span>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-lg">
                      —
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
