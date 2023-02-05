import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export function Slider() {
  const slides = [
    {
      url: "/img/ellie.jpg",
      title: "Information",
      description: "Stay informed of your favorite games",
    },
    {
      url: "/img/hellblade_wallpaper.jpg",
      title: "Ease",
      description: "Find your favorite games easily",
    },
    {
      url: "/img/war_wallpaper.jpg",
      title: "By gamers for gamers",
      description: "We share the same hobby as you",
    },

    {
      url: "/img/illidan.jpg",
      title: "Feedback",
      description: "Do you know how we can improve? Contact us!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="bg-neutral-900">
      <div className="max-w-[1200px] h-[680px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
        <div className="flex h-full items-end justify-center bg-trasparent text-center">
          <div className="w-full h-1/5 bg-black bg-opacity-30 text-white inset-x-0 bottom-0 select-none pt-3 rounded-b-2xl">
            <h2 className="font-bold text-2xl">{slides[currentIndex].title}</h2>
            <h3 className="text-xl mt-3">{slides[currentIndex].description}</h3>
          </div>
        </div>
          
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className= {currentIndex == slideIndex ? "text-slate-400" : "text-white"} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
