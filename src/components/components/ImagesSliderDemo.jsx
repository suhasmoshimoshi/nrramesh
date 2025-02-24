"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";


export function ImagesSliderDemo() {
          const { language } = useLanguage();
          const { hero } = translations[language];
    const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.jpg",
    "/p7.jpg",
    "/p8.jpg",
    "/p9.jpg",
    "/p10.jpg",
      
  ];
  return (
    <ImagesSlider
      className="h-[40rem] object-cover bg-[#FFF3E0]"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-5xl md:mx-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          {hero.title.split("").map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          {/* <span>Join now →</span> */}
          <p className="max-w-2xl text-base md:text-xl  dark:text-neutral-200">
            {hero.subtitle}
          </p>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
