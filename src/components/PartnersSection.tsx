// START:PartnersSection
// Partners Section
const PartnersSection = () => {
  const partners = [
    {
      imgSrc:
        "https://cdn.searchkings.ca/img/awards/awards-elite-partner-f68df9400b.webp",
      title: "Microsoft Elite Partner",
      description: "Microsoft Advertising Certified Professionals.",
    },
    {
      imgSrc:
        "https://cdn.searchkings.ca/img/awards/awards-google-partner-bee58286d3.webp",
      title: "Google Premier Partner",
      description: "Top-performing Google Premier Partner since 2012.",
    },
    {
      imgSrc:
        "https://cdn.searchkings.ca/img/awards/awards-google-ads-impact-4ec2549193.webp",
      title: "Google Ads Impact Award Winner",
      description: "Innovative use of AI to achieve marketing results.",
    },
    {
      imgSrc:
        "https://cdn.searchkings.ca/img/awards/awards-google-customer-satisfaction-d117614e51.webp",
      title: "Google Customer Satisfaction Award",
      description: "Delivering outstanding results to our clients since 2009.",
    },
  ];
  const extendedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full scrolling-container">
        <div
          className="flex scrolling-track"
          style={{ animation: "scroll 40s linear infinite" }}
        >
          {extendedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shrink-0 mx-8 w-48"
            >
              <div className="min-h-[85px] flex items-center justify-center">
                <img
                  className="max-h-[85px] shadow-lg rounded-md"
                  alt={partner.title}
                  src={partner.imgSrc}
                />
              </div>
              <p className="text-base font-bold leading-tight mb-1 mt-4 min-h-[40px] text-black">
                {partner.title}
              </p>
              <p className="text-sm font-medium leading-tight text-gray-800">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
// END:PartnersSection
