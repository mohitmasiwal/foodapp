import React from 'react';

const Online = ({ oncard }) => {
  return (
    <div className="mt-3 mx-auto overflow-hidden w-[90%] relative">
      <div>
        <h1 className="font-bold text-2xl md:text-4xl mb-6 md:mb-10 mt-5 md:mt-10">
          Items with Online Food Delivery
        </h1>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {oncard.map((item, index) => (
          <div
            key={index} // Ideally use a unique ID if available
            className="w-full sm:w-[250px] md:w-[300px] lg:w-[400px] h-[450px] flex flex-col bg-gray-300 rounded-2xl shadow-md hover:scale-95 transition-transform duration-300"
          >
            {/* Image Section */}
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.info?.cloudinaryImageId}`}
              alt={item?.info?.name || 'Food Item'}
              className="object-cover w-full h-2/3 rounded-t-2xl"
            />

            {/* Content Section */}
            <div className="p-4 flex flex-col justify-between h-1/3 text-black">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{item?.info?.name}</h2>
              <p className="mb-2 text-sm md:text-base font-bold">{item?.info?.cuisines.join(", ")}</p>
              <div className="text-sm">
                <div className="flex justify-between items-center">
                  <p className="text-sm md:text-xl font-semibold mb-2">
                    {item?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    {item?.info?.aggregatedDiscountInfoV3?.subHeader}
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Online;
