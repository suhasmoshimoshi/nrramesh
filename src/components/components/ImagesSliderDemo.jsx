"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImagesSliderDemo() {
  const [apiResponse, setApiResponse] = useState(null);
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();

  // Load API response from localStorage
  useEffect(() => {
    const savedResponse = localStorage.getItem("apiResponse");
    if (savedResponse) {
      setApiResponse(JSON.parse(savedResponse));
    }
  }, []);

  const hero = apiResponse?.[language]?.hero;

  // Images
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

  // Image position classes (all include object-cover)
  const imageClasses = [
    "object-cover object-top",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-center",
    "object-cover object-bottom",
    "object-cover object-center",
  ];

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handlers
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[35rem] md:h-[40rem] overflow-hidden bg-[#FFF3E0]">
      {/* Images */}
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 w-full h-full ${imageClasses[index]} transition-all`}
        />
      ))}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-2xl md:text-5xl bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#FF9933] via-white to-[#FF9933] 
                     bg-[length:200%_200%] animate-gradient 
                     drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          {hero?.title ?? "Loading..."}
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-sm md:text-lg text-white max-w-2xl drop-shadow-[0_3px_4px_rgba(0,0,0,0.7)]"
        >
          {hero?.subtitle ?? "Subtitle loading..."}
        </motion.p>


      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-[#FF9933]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
