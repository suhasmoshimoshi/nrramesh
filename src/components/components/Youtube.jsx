"use client";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Youtube() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const { language } = useLanguage();
  const t = apiResponse?.[language]?.social; // Optional chaining to prevent crashes

  const settings = {
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
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

  const products = [
    { title: "Moonbeam", link: "https://www.youtube.com/embed/rGlDluBl7zo" },
    { title: "Cursor", link: "https://www.youtube.com/embed/qGdQCGkCHcg" },
    { title: "Rogue", link: "https://www.youtube.com/embed/3zJaMJRjeiI" },
    { title: "Editorially", link: "https://www.youtube.com/embed/yg5cFEm1rMg" },
    { title: "Editrix AI", link: "https://www.youtube.com/embed/OoAvBMq6b6w" },
    {
      title: "Pixel Perfect",
      link: "https://www.youtube.com/embed/Ap6sMMAi2nA",
    },
    { title: "Algochurn", link: "https://www.youtube.com/embed/2yWvNiBNrJw" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/6US5GQY0JaI" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/sIV4lGVNYlk" },
    { title: "Algochurn", link: "https://www.youtube.com/embed/Pza4DQUDN-0" },
  ];

  return (
    <section className="py-16 bg-[#FFF4E0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#A65D00] mb-12">
          {t?.head ?? "Loading..."} {/* Safe access with fallback text */}
        </h2>

        {/* Slider Component */}
        <Slider {...settings} className="px-2">
          {products.map((product, index) => (
            <div key={index} className="px-2 my-4">
              <iframe
                width="100%"
                height="250"
                src={product.link}
                title={product.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
