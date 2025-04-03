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


  return (
    <>
      {apiResponse && (
        <div className="min-h-screen">
          <MainNav />

          {/* Hero Section */}
          <ImagesSliderDemo />

          {/* About Section */}
          <section className="py-16 bg-[#FFF3E0]">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[30rem] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/profile.jpg"
                    alt={t?.about?.alt}
                    fill
                    className="object-scale-down rounded-lg"
                    priority
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 text-[#CC7700]">
                    {t?.about?.title}
                  </h2>
                  <p className="text-lg text-[#5C3B02] mb-4">
                    {t?.about?.content1}
                  </p>
                  <p className="text-lg text-[#5C3B02]">{t?.about?.content2}</p>
                  <Link href={"/about"}>
                    <Button className="mt-6 bg-[#CC7700] hover:bg-[#A65D00] text-white transition shadow-md">
                      {t?.about?.button}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <Youtube />
          <AchievementsSlider />

          {/* Latest Projects */}
          <section className="py-16 bg-[#FFF4E0]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
                {t?.projects?.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t?.projects?.items?.map((project, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
                  >
                    <CardHeader>
                      <CardTitle className="text-[#A65D00]">
                        {project?.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{project?.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project?.tags?.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="bg-[#FFA500] text-white border border-[#FFD700]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="link"
                        className="pl-0 text-[#A65D00] hover:text-[#FFA500]"
                      >
                        {t?.projects?.readMore} →
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Highlights */}
          <section className="py-16 bg-[#FFF4E0]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
                {t?.blogs?.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {t?.blogs?.items?.map((blog, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow border border-[#FFD700] hover:shadow-[#FFA500]"
                  >
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <Badge className="bg-[#FFA500] text-white border border-[#FFD700]">
                          {blog?.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-[#A65D00]">
                          {blog?.title}
                        </h3>
                        <p className="text-gray-700">{blog?.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-500">{blog?.date}</p>
                          <Button
                            variant="link"
                            className="text-[#A65D00] hover:text-[#FFA500]"
                          >
                            {t?.blogs?.readMore} →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
