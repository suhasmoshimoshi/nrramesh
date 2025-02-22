"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export function MainNav() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].common;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FF9933] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-2xl font-bold">NR Ramesh</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4">
              {["/", "/news", "/blogs", "/projects"].map((path, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={path} legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-[#CC7700] transition font-semibold text-lg block">
                      {t[path.replace("/", "") || "home"]}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] transition"
          >
            {t.switchLanguage}
          </Button>
          <Button
            variant="outline"
            className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] transition"
          >
            {t.contact}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FF9933] py-4 px-6">
          <nav className="flex flex-col gap-4">
            {["/", "/news", "/blogs", "/projects"].map((path, index) => (
              <Link key={index} href={path} legacyBehavior passHref>
                <NavigationMenuLink className="text-white hover:text-[#CC7700] transition font-semibold text-lg block">
                  {t[path.replace("/", "") || "home"]}
                </NavigationMenuLink>
              </Link>
            ))}
          </nav>

          {/* Action Buttons (Mobile) */}
          <div className="flex flex-col gap-4 mt-4">
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] transition"
            >
              {t.switchLanguage}
            </Button>
            <Button
              variant="outline"
              className="bg-[#CC7700] text-white border-[#CC7700] hover:bg-[#A65D00] transition"
            >
              {t.contact}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
