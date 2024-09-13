import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaRegStar } from "react-icons/fa";

const Card = ({ data }) => {
  const [value, setValue] = useState(0);

  const prev = () => {
    setValue((prev) => Math.min(prev + 20, 0));
  };

  const next = () => {
    setValue((prev) => Math.max(prev - 20, -(data.length * 100 - 100)));
  };

  return (
    <div className="w-full h-full">
      <div className="mt-3 mx-auto overflow-hidden w-[90%] relative">
        <div className="flex justify-between items-center mb-5">
          <h1 className="font-bold text-2xl md:text-4xl mb-6 md:mb-10 mt-5 md:mt-10">
            Top Restaurants in Kaladhungi
          </h1>
          <div className="flex gap-2">
            <div
              onClick={prev}
              className="bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={next}
              className="bg-gray-200 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Card Slider */}
        <div
          className="flex transition-transform duration-1000 gap-5 md:gap-10"
          style={{ transform: `translateX(${value}%)` }}
        >
          {data.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[80%] sm:w-[300px] h-[350px] flex flex-col bg-gray-200 rounded-2xl shadow-md hover:scale-95 transition-transform duration-300"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${card?.info?.cloudinaryImageId}`}
                alt={card?.info?.name}
              />

              {/* Card Details */}
              <div className="p-3">
                <h1 className="font-bold text-lg md:text-xl">{card?.info?.name}</h1>
                <h2 className="font-semibold text-base md:text-lg flex gap-2 items-center">
                  <FaRegStar /> {card?.info?.avgRating}
                </h2>
                <h6 className="font-semibold text-sm md:text-base">
                  {card?.info?.cuisines.join(", ")}
                </h6>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 text-sm md:text-base">
                  <div className="text-gray-500 font-semibold">
                    <p>{card?.info?.locality}</p>
                  </div>
                  <div className="font-bold text-gray-500">{card?.info?.costForTwo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
