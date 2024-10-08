import React, { useEffect, useState } from "react";
import SliderImage from "./SliderImage";

const Slider = () => {
  const images = [
    {
      id: "1",
      imageUrl: "https://pbs.twimg.com/media/F_3YohMbkAAfa4S.jpg:large",
    },
    {
      id: "2",
      imageUrl:
        "https://i.pinimg.com/736x/37/14/d9/3714d9c7f52d0d0e7e173ab1eb87d9ba.jpg",
    },
    {
      id: "3",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06CtHJKeKl3Sm5h0zgS1V6ufSPJ8Lc9jCtg&s",
    },
    {
      id: "4",
      imageUrl:
        "https://cdn.britannica.com/76/151376-050-13586FE2/monarch-butterfly-flowers-bush.jpg",
    },
    {
      id: "5",
      imageUrl:
        "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/blue-morpho-butterfly-1.jpg.optimal.jpg",
    },
    {
      id: "6",
      imageUrl:
        "https://www.shutterstock.com/image-photo/photo-day-2024-beautiful-butterfly-600nw-2496391053.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxLength = images.length

  const handleIndexChange = (id) => {
    if (id === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (id === "next") {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
 

  return (
    <div className="flex relative h-[80vh] max-w-[80vw] items-center justify-center gap-4 overflow-hidden mx-40">
      <button
        id="prev"
        className="absolute w-[50px] h-[50px] flex items-center justify-center rounded-full left-10 bg-blue-400 focus:bg-blue-600 hover:bg-blue-600 hover:ring-offset-zinc-200 hover:ring-4 ring z-10"
        onClick={() => handleIndexChange("prev")}
      >
        <IoCaretBackOutline size={28} />
      </button>
    
      <div className='flex duration-300 h-full w-full' style={{ transform: ` ${currentIndex === maxLength ? 0 : `translateX(-${currentIndex * 100}%)`}` }}>
        {images.map((image) => (
          <div key={image.id} className="flex-shrink-0 flex w-full h-full items-center justify-center">
            <img
              src={image.imageUrl}
              alt={image.alt_description}
              className="object-cover"
              onClick={() => console.log(image.id)}
            />
          </div>
        ))}
      </div>
     <button
        id="next"
        className="absolute  w-[50px] h-[50px] rounded-full text-center right-10 bg-blue-400 flex items-center focus:bg-blue-600 hover:bg-blue-600 hover:ring-offset-zinc-200 hover:ring-4 ring justify-center z-10"
        onClick={() => handleIndexChange("next")}
      >
        <IoCaretForwardOutline size={28} />
      </button>
    </div>
  );
};

export default Slider;
