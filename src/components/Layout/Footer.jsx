import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "../ui/button";

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
  const t = apiResponse?.[language]?.footer; // Optional chaining to prevent errors
  const c = apiResponse?.[language]?.common;

  return (
    <footer className="bg-[#A65D00] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg">{c?.name ?? "Loading..."}</p>{" "}
        {/* Fallback text */}
        <div className="mt-4 flex justify-center gap-6">
          <Button variant="link" className="text-white hover:text-[#FFD700]">
            {t?.privacy ?? "Privacy Policy"}
          </Button>
          <Button variant="link" className="text-white hover:text-[#FFD700]">
            {t?.terms ?? "Terms of Service"}
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
