"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  imageClasses
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay && loaded) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, loaded]);

  const slideVariants = {
    initial: { scale: 0, opacity: 0, rotateX: 45 },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.0] },
    },
    exit: {
      opacity: 0,
      y: direction === "up" ? "-150%" : "150%",
      transition: { duration: 1 },
    },
  };

  return (
    <div className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)}
      style={{ perspective: "1000px" }}>
      
      {children}
      {overlay && <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />}
      
      <AnimatePresence>
        <motion.div key={currentIndex} initial="initial" animate="visible" exit="exit" variants={slideVariants}
          className="absolute inset-0 w-full h-full">
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} layout="fill"
                 className={cn("object-cover", imageClasses[currentIndex] || "")}
            priority={currentIndex === 0} onLoadingComplete={() => setLoaded(true)} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
