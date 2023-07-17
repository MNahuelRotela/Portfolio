import React, { useState, useEffect } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const Carousel = ({
  slides = [<Slide1 />, <Slide2 />, <Slide3 />],
  autoSlide = true,
  autoSlideInterval = 8000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const goToSlide = (index) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <div className="bg-gray-200 dark:bg-gray-900">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col pt-2 w-full h-full z-10">
          <h1 className="text-4xl font-bold inline border-b-4 w-[120px] border-[#fdbe7b] dark:text-gray-200 font-bebas">
            Portfolio
          </h1>
        </div>
      </div>
      <div className="overflow-hidden relative">
        <div
          className="w-screen h-fit transition-transform ease-out duration-500 flex"
          style={{
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-full"
            >
              {slide}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 rounded-full bg-codecolor cursor-pointer ${
                  curr === i ? "w-8" : "bg-gray-300"
                }`}
                style={{ backgroundColor: curr === i ? "#fdbe7b" : "" }}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
