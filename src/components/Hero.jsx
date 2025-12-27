import React, { useState, useEffect } from "react";

const Hero = () => {
  const desktopImages = [
    "/assets/backgroundImg.png",
    "/assets/backgroundImg1.png",
    "/assets/backgroundImg2.png",
    "/assets/backgroundImg3.png",
  ];

  const mobileImages = [
      "/assets/heroMob.png",
      "/assets/heroMob2.png",
      "/assets/heroMob3.png",
      "/assets/heroMob4.png",
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden pt-5 md:10">
      <img
        src={images[current]}
        alt="hero"
        className="w-full object-cover
        h-[65vh] sm:h-[70vh] md:h-[85vh] lg:h-screen"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
