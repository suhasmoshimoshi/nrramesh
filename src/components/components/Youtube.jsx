"use client";

import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Youtube() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const { language } = useLanguage();
  const t = apiResponse?.[language]?.social;

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  const videos = [
    { title: "Moonbeam", link: "https://www.youtube.com/embed/rGlDluBl7zo" },
    { title: "Cursor", link: "https://www.youtube.com/embed/qGdQCGkCHcg" },
    { title: "Rogue", link: "https://www.youtube.com/embed/3zJaMJRjeiI" },
    { title: "Editorially", link: "https://www.youtube.com/embed/yg5cFEm1rMg" },
    { title: "Editrix AI", link: "https://www.youtube.com/embed/OoAvBMq6b6w" },
    { title: "Pixel Perfect", link: "https://www.youtube.com/embed/Ap6sMMAi2nA" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/2yWvNiBNrJw" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/6US5GQY0JaI" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/sIV4lGVNYlk" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/Pza4DQUDN-0" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF4E0] to-[#FFE5BF]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#A65D00] mb-16 animate-fade-in">
          {t?.head ?? "Our YouTube Channel"}
        </h2>

        <Slider {...settings} className="">
          {videos.map((video, index) => (
            <div key={index} className="px-3">
              <div className="group relative overflow-hidden rounded-xl  transition-transform transform hover:scale-105 hover:shadow-3xl">
                <iframe
                  width="100%"
                  height="280"
                  src={video.link}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-10 transition-opacity rounded-xl"></div>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
