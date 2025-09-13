"use client";
import Slider from "react-slick";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AchievementsSlider() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) setApiResponse(JSON.parse(savedResponse));
  }, []);

  const { language } = useLanguage();
  const t = apiResponse?.[language];

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF4E0] to-[#FFE8C0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#A65D00] mb-16 drop-shadow-md">
          {t?.achievements?.title ?? "Achievements"}
        </h2>

        <Slider {...settings} className="overflow-visible">
          {t?.achievements?.items?.map((item, index) => (
            <div key={index} className="px-4 my-6">
              <Card className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 border border-[#FFD700]">
                <CardHeader className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-4">
                  <CardTitle className="text-white text-xl md:text-2xl font-semibold">
                    {item?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  <p className="text-gray-700 text-base md:text-lg">{item?.description}</p>
                  <Badge className="absolute top-4 right-4 bg-[#A65D00] text-white px-3 py-1 rounded-full shadow-lg text-sm md:text-base">
                    {item?.year}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          )) ?? []}
        </Slider>
      </div>
    </section>
  );
}
