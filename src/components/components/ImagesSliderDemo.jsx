"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "../ui/images-slider";
import { useLanguage } from "@/context/LanguageContext";

export function ImagesSliderDemo() {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    // Fetch data from localStorage
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const { language } = useLanguage();
  const hero = apiResponse?.[language]?.hero; // Optional chaining

  const images = [
    "/p24.jpeg",
    "/P17.jpg",
    "/p3.jpg",
    "/p4.JPG",
    "/p5.jpg",
    "/P18.JPG",
    "/p7.jpg",
    "/p8.JPG",
    "/p9.jpg",
    "/p10.JPG",
  ];

  const imageClasses = [
    "object-top",
    "object-cover",
    "object-cover",
    "object-cover",
    "object-cover",
    "object-cover",
    "object-cover",
    "object-cover",
    "object-bottom",
    "object-cover",
  ];

  return (
    <ImagesSlider
      className="h-[40rem] object-cover bg-[#FFF3E0]"
      images={images}
      imageClasses={imageClasses}
    >
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-5xl md:mx-5 mx-3 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {hero?.title
            ? hero.title
                .split("")
                .map((word, index) => <span key={index}>{word}</span>)
            : "Loading..."}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm mx-3 border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <p className="max-w-2xl text-base md:text-xl dark:text-neutral-200">
            {hero?.subtitle ?? "Subtitle loading..."}
          </p>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
