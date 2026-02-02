// START:Header
// Header Component
"use client";
import React from "react";
import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image"; // Ensure you have the correct import for Image
import { useChatBot } from "@/contexts/ChatBotContext";

const Header = () => {
  const { openModal } = useChatBot();
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = React.useState<NodeJS.Timeout | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      name: "About Us",
      href: "#",
      dropdown: [
        // { name: 'Achievements', href: '/achievements' },
        // { name: 'Testimonials', href: '#' },
        // { name: 'Join Our Team', href: '/join-our-team' },
        { name: "About Us", href: "/about-us" },
      ],
    },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Ads Management", href: "/ad-management" },
        { name: "Call Intelligence®", href: "/call-intelligence" },
        { name: "Local Services Ads", href: "/local-services-ads" },
        { name: "eCommerce", href: "/e-commerce" },
        { name: "Video Marketing", href: "/video-marketing" },
        { name: "Web Services", href: "/web-services/" },
      ],
    },
    {
      name: "Solutions",
      href: "#",
      dropdown: [
        { name: "Partners & Franchises", href: "/partners-franchises" },
        { name: "Web Hosting & Maintenance", href: "/web-hosting-maintenance" },
      ],
    },
    { name: "Our Works", href: "/our-works" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blogs" },
    // { name: 'Case Studies', href: '#' },
    { name: "Contact Us", href: "/contact-us" },
  ];

  interface DropdownItem {
    name: string;
    href: string;
  }

  interface NavItem {
    name: string;
    href: string;
    dropdown?: DropdownItem[];
  }

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setCloseTimeout(timeout);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8"
    >
      <div className="container mx-auto bg-white rounded-xl shadow-lg flex justify-between items-center p-3">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src="/nafadigital_logo.png"
              alt="Nafa Digital Logo"
              width={160}
              height={80}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center text-gray-700 font-medium hover:text-red-600"
              >
                {item.name}
                {item.dropdown && (
                  <Icon
                    path="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                  />
                )}
              </a>
              {item.dropdown && openDropdown === item.name && (
                <div
                  className="absolute top-full w-56 bg-white rounded-lg shadow-xl py-2 z-50"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="tel:+917619341271"
            className="bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-semibold py-3 px-5 rounded-lg text-sm hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 flex items-center"
          >
            <img
              src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
              width="24"
              height="24"
              alt="call Icon"
              className="mr-2"
            />
            +91 761 934 1271
          </a>
          <a
            href="tel:+14374326746"
            className="bg-red-600 text-white font-semibold py-3 px-5 rounded-lg text-sm flex items-center hover:bg-red-700 transition-colors"
          >
            <img
              src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
              width="24"
              height="24"
              alt="call Icon"
              className="invert group-hover:invert"
            />
            +1 (437) 432-6746
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Icon
            path={
              mobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
            className="w-6 h-6 text-black stroke-2"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-xl shadow-lg mt-2 mx-4 overflow-hidden border border-gray-200">
          <nav className="py-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-4 py-3 text-black font-semibold cursor-pointer hover:bg-red-50 hover:text-red-600 border-b border-gray-100">
                      {item.name}
                      <Icon
                        path="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        className="w-4 h-4 group-open:rotate-180 transition-transform text-red-600"
                      />
                    </summary>
                    <div className="bg-red-50 border-l-4 border-red-600">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-8 py-3 text-gray-800 hover:text-red-600 hover:bg-red-100 font-medium border-b border-red-100 last:border-b-0"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-black font-semibold hover:bg-red-50 hover:text-red-600 border-b border-gray-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Action Buttons */}
            <div className="border-t-2 border-red-600 mt-2 pt-4 px-4 space-y-3">
              <a
                href="tel:+917619341271"
                className="w-full bg-gradient-to-b from-yellow-400 to-amber-500 text-black font-bold py-3 px-5 rounded-lg text-sm shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <img
                  src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
                  width="20"
                  height="20"
                  alt="call Icon"
                  className="mr-2"
                />
                +91 761 934 1271
              </a>
              <a
                href="tel:+14374326746"
                className="w-full bg-red-600 text-white font-bold py-3 px-5 rounded-lg text-sm flex items-center justify-center shadow-md hover:bg-red-700 hover:shadow-lg transition-all"
              >
                <img
                  src="https://cdn.searchkings.ca/img/icons/call-50d0164ee7.svg"
                  width="20"
                  height="20"
                  alt="call Icon"
                  className="invert mr-2"
                />
                +1 (437) 432-6746
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
// END:Header
