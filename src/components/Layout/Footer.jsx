import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const { language } = useLanguage();
  const t = apiResponse?.[language]?.footer;
  const c = apiResponse?.[language]?.common;

  return (
    <footer className="bg-[#A65D00] text-white pt-12 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About / Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{c?.name || "Loading..."}</h2>
            <p className="text-gray-200">{t?.description || "Your trusted partner for services."}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t?.linksTitle || "Quick Links"}</h3>
            <ul className="space-y-2">
              {t?.links?.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="hover:text-[#FFD700] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              )) || (
                <>
                  <li><a href="#" className="hover:text-[#FFD700] transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-[#FFD700] transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-[#FFD700] transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t?.newsletterTitle || "Stay Updated"}</h3>
            <p className="text-gray-200 mb-4">{t?.newsletterText || "Subscribe to our newsletter for latest updates."}</p>
            <div className="flex justify-center md:justify-start gap-3 mb-4">
              <a href="#" className="hover:text-[#FFD700] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#FFD700] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#FFD700] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#FFD700] transition-colors"><FaLinkedinIn /></a>
            </div>
            <Button className="bg-[#FFD700] text-[#A65D00] hover:bg-[#FFB800]">
              {t?.subscribeBtn || "Subscribe"}
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-[#FFD700]/50 pt-6 text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} {c?.name || "Your Company"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
