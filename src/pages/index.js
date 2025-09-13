// pages/index.js
"use client";
import { useLanguage } from "@/context/LanguageContext";
import { MainNav } from "@/components/Layout/MainNav";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import AchievementsSlider from "@/components/components/AchievementsSection";
import { ParallaxScrollDemo } from "@/components/components/ParallaxScrollDemo";
import Youtube from "@/components/components/Youtube";
import Link from "next/link";
import SocialPopup from "@/components/components/SocialPopup";
import Footer from "@/components/Layout/Footer";
import { ImagesSliderDemo } from "@/components/components/ImagesSliderDemo";
import { useState , useEffect } from "react"; 
import { Contact2 } from "lucide-react";
import { ContactForm } from "@/components/components/ContactForm";
import dynamic from "next/dynamic";
const World = dynamic(() => import("@/components/ui/globe").then(mod => ({ default: mod.World })), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full flex items-center justify-center">Loading Globe...</div>
});
export default function HomePage() {
 const [apiResponse, setApiResponse] = useState(null);
 useEffect(() => {
   // Fetch data from localStorage
   const savedResponse = localStorage.getItem("apiResponse");
   if (savedResponse) {
     setApiResponse(JSON.parse(savedResponse));
   }
 }, []);
  const { language } = useLanguage();
  const t = apiResponse?.[language];
  
  // BJP theme colors
const globeConfig = {
  pointSize: 4,
  globeColor: "#FF9933", 
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#FF9933",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#138808",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 21.1466, lng: 79.0889 }, // roughly center of India
  initialZoom: 2.5, // zoom in to show India prominently
  autoRotate: false, // optional: don't rotate initially
  autoRotateSpeed: 0.5,
};

  
  // Connections highlighting India and Karnataka
  const sampleArcs = [
    // Bangalore to other Karnataka cities
    {
      order: 1,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 15.3173,
      endLng: 75.7139, // Hubli
      arcAlt: 0.1,
      color: "#138808", // BJP green
    },
    {
      order: 2,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 13.1367,
      endLng: 77.5681, // Mysuru
      arcAlt: 0.1,
      color: "#138808", // BJP green
    },
    {
      order: 3,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 15.8497,
      endLng: 74.4987, // Belgaum
      arcAlt: 0.1,
      color: "#138808", // BJP green
    },
    // Bangalore to other major Indian cities
    {
      order: 4,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 28.7041,
      endLng: 77.1025, // Delhi
      arcAlt: 0.1,
      color: "#FF9933", // BJP saffron
    },
    {
      order: 5,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 19.0760,
      endLng: 72.8777, // Mumbai
      arcAlt: 0.1,
      color: "#FF9933", // BJP saffron
    },
    {
      order: 6,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 22.5726,
      endLng: 88.3639, // Kolkata
      arcAlt: 0.1,
      color: "#FF9933", // BJP saffron
    },
    {
      order: 7,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 17.3850,
      endLng: 78.4867, // Hyderabad
      arcAlt: 0.1,
      color: "#FF9933", // BJP saffron
    },
    {
      order: 8,
      startLat: 12.9716,
      startLng: 77.5946, // Bangalore
      endLat: 13.0827,
      endLng: 80.2707, // Chennai
      arcAlt: 0.1,
      color: "#FF9933", // BJP saffron
    },
  ];

  return (
    <>
      {apiResponse && (
        <div className="min-h-screen">
          <MainNav />
          {/* Hero Section */}
          <ImagesSliderDemo />
          
          {/* About Section - NR Ramesh */}
<section className="py-24 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2]">
  <div className="container mx-auto px-6 lg:px-12">
    <div className="grid md:grid-cols-2 items-center gap-12">
      {/* Profile Image with Stylish Ring */}
      <div className="flex justify-center md:justify-start">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-[#FF9933] via-white to-[#138808] shadow-2xl transform transition-transform hover:scale-105">
          <Image
            src="/profile.jpg"
            alt={t?.about?.alt || "NR Ramesh"}
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>
      {/* Text Content */}
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FF9933] leading-tight animate-fade-in">
          {t?.about?.title || "Shri. N. Ramesh"}
        </h2>
        <div className="max-w-full md:max-w-lg lg:max-w-xl mx-auto md:mx-0">
          <p className="text-base md:text-lg lg:text-xl text-[#5C3B02] leading-relaxed animate-fade-in delay-150">
            {t?.about?.content1 ||
              "A dedicated leader committed to the development of Karnataka and India under the BJP's vision."}
          </p>
          <p className="text-base md:text-lg lg:text-xl text-[#5C3B02] leading-relaxed animate-fade-in delay-300">
            {t?.about?.content2 ||
              "With years of public service, Shri. N. Ramesh has been instrumental in implementing transformative projects that have improved the lives of countless citizens in Bangalore and across Karnataka."}
          </p>
          <p className="text-base md:text-lg lg:text-xl text-[#5C3B02] leading-relaxed animate-fade-in delay-450">
            {t?.about?.content3 ||
              "His leadership embodies the BJP's commitment to good governance, development, and national progress."}
          </p>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center md:justify-start">
          <Link href="/about">
            <Button className="mt-8 px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full bg-[#FF9933] hover:bg-[#CC7A00] text-white font-semibold shadow-xl transition-all transform hover:scale-105">
              {t?.about?.button || "Learn More"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


          
          {/* Globe Section - India and Karnataka Focus */}
          {/* <section className="py-16 bg-gradient-to-b from-[#FF9933] to-[#138808]">

              <div className="h-[600px] w-full max-w-4xl mx-auto">
                <World data={sampleArcs} globeConfig={globeConfig} />
              </div>
     

          </section> */}
          
          <Youtube />
          <AchievementsSlider />
          


          {/* Blog Highlights */}
{/* Blog Highlights */}
<section className="py-20 bg-gradient-to-r from-[#FFF4E0] to-[#FFE5BF]">
<div className="container mx-auto px-6 lg:px-12">
  {/* Section Heading */}
  <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#FF9933] mb-20 animate-fade-in">
    {t?.blogs?.title || "Latest Updates"}
  </h2>

  {/* Blog Grid */}
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {t?.blogs?.items?.map((blog, index) => (
      <div
        key={index}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-[#FFD700] transition-all transform hover:-translate-y-3 hover:shadow-2xl"
      >
        {/* Image */}
        {blog?.image && (
          <div className="w-full h-56 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Category Badge */}
          {blog?.category && (
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#FF9933] to-[#FFA500] text-white">
              {blog.category}
            </span>
          )}

          {/* Blog Title */}
          <h3 className="text-2xl font-semibold text-[#FF9933] group-hover:text-[#FFA500] transition-colors">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>

          {/* Footer: Date & Read More */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">{blog.date}</span>
            <a
              href={blog.link}
              className="text-[#FF9933] hover:text-[#FFA500] font-semibold transition-colors flex items-center gap-1"
            >
              {t?.blogs?.readMore || "Read More"} →
            </a>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#FFFAF0] opacity-0 group-hover:opacity-30 transition-opacity rounded-3xl"></div>
      </div>
    ))}
  </div>
</div>

</section>

          
          <ParallaxScrollDemo />
          
          <ContactForm />
          <SocialPopup />
          <Footer />
        </div>
      )}
    </>
  );
}