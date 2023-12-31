import React, { useState } from "react";
import img1 from "../../../assets/GettyImages-157366413-36db61c23c0f4732809972e5a7dfa49f.jpg";
import img2 from "../../../assets/istockphoto-157313230-612x612.jpg";
import img3 from "../../../assets/photo-1565118531796-763e5082d113.jpeg";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const imageUrls = [
    "https://media.istockphoto.com/id/157313230/photo/polluting-clouds-of-exhaust-fumes-rise-in-the-air-denver-colorado.jpg?s=612x612&w=0&k=20&c=DOboZTF8l0I-SjjTc8FvodLCw_Wa82cDImBB7a7hqLc=",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBncmFzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];

  const textLabels = [
    {
      label: "For People and Planet",
      content: "Join us to reduce carbon.",
    },
    {
      label: "Track Your Carbon Emissions",
      content: "Track Your Carbon Emissions",
    },
    {
      label: "Track Your Carbon Emissions",
      content:
        "Become a part of the global effort to combat climate change. Explore our tools and resources to make a positive impact on the environment.",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      {/* Carousel indicators */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide-to={index}
            data-te-carousel-active={activeSlide === index}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              activeSlide === index ? "block" : "hidden"
            }`}
            data-te-carousel-active={activeSlide === index}
            data-te-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={imageUrls[index]}
              className="block w-full h-[500px]"
              
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center text-center text-white">
              <h5 className="text-5xl text-bold font-sans">
                {textLabels[index].label}
              </h5>
              <p>{textLabels[index].content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
        onClick={handlePrevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
        onClick={handleNextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default HeroSection;
