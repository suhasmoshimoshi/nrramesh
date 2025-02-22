"use client";
import Slider from "react-slick";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AchievementsSlider() {
  const { language } = useLanguage();
  const t = translations[language];

  const settings = {
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-[#FFF4E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
          {t.achievements.title}
        </h2>

        {/* Slider Component */}
        <Slider {...settings} className="px-2">
          {t.achievements.items.map((item, index) => (
            <div key={index} className="px-2 my-4">
              <Card className="shadow-md border border-[#FFD700] hover:shadow-lg transition-shadow hover:shadow-[#FFA500]">
                <CardHeader>
                  <CardTitle className="text-[#A65D00]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                  <Badge className="mt-4 bg-[#A65D00] text-white shadow-sm">
                    {item.year}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
