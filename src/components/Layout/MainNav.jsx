"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function MainNav() {
  const [apiResponse, setApiResponse] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const t = apiResponse?.[language]?.common;

  const navItems = [
    { label: t?.home ?? "Home", path: "/" },
    { label: t?.about ?? "About", path: "/about" },
    { label: t?.news ?? "News", path: "/news" },
    { label: t?.blogs ?? "Blogs", path: "/blogs" },
    { label: t?.projects ?? "Projects", path: "/projects" },
  ];

  return (
    <header className="bg-[#FF9933] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.avif"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold tracking-wide">
              {t?.name ?? "Loading..."}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.path} legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-[#4B1E00] transition font-semibold text-lg">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-3">
            <Button
              onClick={toggleLanguage}
              className="bg-white text-[#FF9933] hover:bg-[#FFE5CC] font-semibold"
            >
              {t?.switchLanguage ?? "Switch Language"}
            </Button>
            <Button className="bg-[#4B1E00] text-white hover:bg-[#331400] font-semibold">
              {t?.contact ?? "Contact"}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FF9933] px-4 py-4 space-y-4 border-t border-white/20">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="block text-white hover:text-[#4B1E00] transition font-semibold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="bg-white text-[#FF9933] hover:bg-[#FFE5CC] font-semibold"
            >
              {t?.switchLanguage ?? "Switch Language"}
            </Button>
            <Button
              className="bg-[#4B1E00] text-white hover:bg-[#331400] font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t?.contact ?? "Contact"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
