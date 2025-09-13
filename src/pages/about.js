"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MainNav } from "@/components/Layout/MainNav";
import Footer from "@/components/Layout/Footer";
import { Award, Users, Target, Star } from "lucide-react";

export default function AboutPage() {
  const [apiResponse, setApiResponse] = useState(null);
  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);
  const { language } = useLanguage();
  const t = apiResponse?.[language]?.aboutPage;
  const common = apiResponse?.[language]?.common;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF4E0] to-[#FFE5BF] text-[#6B4226]">
      <MainNav />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#FFF4E0] to-[#FFE5BF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-[#FF9933] animate-fade-in">
              {t?.title || "About Us"}
            </h1>
            <p className="text-xl text-[#A65D00] max-w-3xl mx-auto animate-fade-in delay-100">
              {t?.subtitle || "Dedicated to the progress and prosperity of Karnataka and India."}
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border-2 border-[#FFD700] group hover:shadow-2xl transition-all">
              <Image
                src="/profile2.jpg"
                alt={t?.content?.teamTitle || "Team"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[#5C3B02] animate-fade-in delay-200">
                {t?.content?.section1}
              </p>
              <p className="text-lg leading-relaxed text-[#5C3B02] animate-fade-in delay-300">
                {t?.content?.section2}
              </p>
              <p className="text-lg leading-relaxed text-[#5C3B02] animate-fade-in delay-400">
                {t?.content?.section3}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {t?.content?.stats?.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white border border-[#FFD700] rounded-xl text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex justify-center mb-2">
                      {index === 0 && <Award className="h-6 w-6 text-[#FF9933]" />}
                      {index === 1 && <Users className="h-6 w-6 text-[#FF9933]" />}
                      {index === 2 && <Target className="h-6 w-6 text-[#FF9933]" />}
                      {index === 3 && <Star className="h-6 w-6 text-[#FF9933]" />}
                    </div>
                    <div className="text-2xl font-bold text-[#FF9933] overflow-clip text-ellipsis whitespace-nowrap">
                      {stat?.value}
                    </div>
                    <div className="text-sm text-[#A65D00] mt-2">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#FF9933] to-[#CC7700] hover:from-[#CC7700] hover:to-[#A65D00] text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/achievements">
                    {common?.viewAll} {common?.achievements}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933]/10 transition-all"
                >
                  <Link href="/contact">
                    {common?.contact} {common?.us}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="mt-20 bg-white border border-[#FFD700] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-[#FF9933]" />
              <h2 className="text-3xl font-bold text-[#FF9933]">
                {t?.content?.missionTitle}
              </h2>
            </div>
            <p className="text-lg text-[#5C3B02] leading-relaxed">
              {t?.content?.missionText}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
