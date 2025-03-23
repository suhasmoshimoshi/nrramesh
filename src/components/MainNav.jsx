"use client";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function MainNav() {
  const { language, toggleLanguage } = useLanguage();
  const [apiResponse, setApiResponse] = useState(null);
   useEffect(() => {
     // Fetch data from localStorage
     const savedResponse = localStorage.getItem("apiResponse");
     if (savedResponse) {
       setApiResponse(JSON.parse(savedResponse));
     }
   }, []);
  const t = apiResponse?.[language].common;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF9933] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl font-bold">NR Ramesh</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {["/", "/news", "/blogs", "/projects"].map((path, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={path} legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-[#CC7700] transition font-semibold text-lg">
                      {t[path.replace("/", "") || "home"]}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] hover:border-[#A65D00] transition"
          >
            {t.switchLanguage}
          </Button>
          <Button
            variant="outline"
            className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] hover:border-[#A65D00] transition"
          >
            {t.contact}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FF9933] px-4 py-3 space-y-4">
          {["/", "/news", "/blogs", "/projects"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className="block text-white hover:text-[#CC7700] transition font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t[path.replace("/", "") || "home"]}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Button
              variant="outline"
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] hover:border-[#A65D00] transition"
            >
              {t.switchLanguage}
            </Button>
            <Button
              variant="outline"
              className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] hover:border-[#A65D00] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
