// START:Footer
// Footer Component
const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Ads Management", href: "/ad-management" },
      { name: "Call Intelligence®", href: "/call-intelligence" },
      { name: "Local Services Ads", href: "/local-services-ads" },
      { name: "eCommerce", href: "/e-commerce" },
      { name: "Video Marketing", href: "/video-marketing" },
      { name: "Web Services", href: "/web-services" },
    ],
    "About Us": [{ name: "About Us", href: "/about-us" }],
    Solutions: [
      { name: "Partners & Franchises", href: "/partners-franchises" },
      { name: "Web Hosting & Maintenance", href: "/web-hosting-maintenance" },
    ],
  };

  return (
    <footer className="bg-white shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)] py-8 lg:py-16 text-gray-600">
      <div className="container px-4 sm:px-12 mx-auto max-w-6xl flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-y-8 text-center lg:text-left">
        <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-1">
          <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">Services</p>
          <div className="flex flex-col gap-y-1">
            {footerLinks["Services"].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-2">
          <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">
            Solutions
          </p>
          <div className="flex flex-col gap-y-1">
            {footerLinks["Solutions"].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 order-3">
          <p className="text-2xl pt-2 pb-2 text-gray-800 font-bold">About Us</p>
          <div className="flex flex-col gap-y-1">
            {footerLinks["About Us"].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/4 xl:w-2/5 flex flex-col order-4">
          <p className="text-2xl py-3 tracking-tight font-bold text-gray-800">
            Contact Us
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <p>
                <a href="tel:+917619341271">
                  Phone: <span className="underline">+91 761 934 1271</span>
                </a>
              </p>
              <p>
                <a href="mailto:support@adsonline.ca">
                  Email:{" "}
                  <span className="underline">support@adsonline.ca</span>
                </a>
              </p>
            </div>
            <div>
              <p>48, Church St, Haridevpur</p>
              <p>Shanthala Nagar, Ashok Nagar</p>
              <p>Bengaluru, Karnataka 560001</p>
            </div>
          </div>
          {/* <div className="flex flex-wrap items-center gap-4 mt-6">
                        <img className="w-[80px] shadow-lg" alt="Google Premiere Partner Badge" src="https://cdn.searchkings.ca/img/premier-google-partner-2025-82cba7b385.svg" />
                        <img className="w-[135px] shadow-lg" alt="Microsoft Badge" src="https://cdn.searchkings.ca/img/ms-elite-partner-badge-2025-0f6306e575.svg" />
                        <img className="w-[70px] shadow-lg" alt="Impact Awards Badge" src="https://cdn.searchkings.ca/img/ads-impact-awards-aa7ee6be8d.webp" />
                    </div> */}
        </div>
      </div>
      <small className="container px-4 sm:px-12 mx-auto max-w-6xl block pt-8 text-center lg:text-left w-full text-xs">
        © NafaDigital 2025 |{" "}
        <a href="/terms-conditions" className="underline">
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        {/* <a
          href="https://support.google.com/adspolicy/answer/94230?hl=en"
          target="_blank"
          className="underline"
        >
          Working With 3rd Parties
        </a>{" "}
        |{" "}
        <a href="/accessibility-plans" className="underline">
          Accessibility Plan
        </a> */}
      </small>
    </footer>
  );
};
export default Footer;
// END:Footer
