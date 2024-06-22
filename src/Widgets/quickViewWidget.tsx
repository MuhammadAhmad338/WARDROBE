import React, { useState } from "react";

interface QuickViewWidgetProps {
  name: string;
  image: string;
  description: string;
  price: number;
  handleQuickViewToggle: () => void;
}

const QuickViewWidget: React.FC<QuickViewWidgetProps> = ({
  image,
  name,
  description,
  price,
  handleQuickViewToggle
}) => {
  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 ">
      <div className="flex justify-start flex-col space-y-4 bg-white md:flex md:flex-row lg:flex lg:flex-row mt-12 mb-12">
        <img src={image} className="h-[300px] " alt="" />      
        <div className="p-6">
          <div className="flex flex-row justify-between">
          <p>{name}</p>
           <div onClick={handleQuickViewToggle} className="border bg-white text-black hover:bg-black hover:text-white px-3 py-1 hover:cursor-pointer border-black">X</div>
          </div>
          <p>{price}</p>
          <p>{description}</p>
          <p>Size: s</p>
          <div className="flex mt-3 space-x-4 ">
            {["S", "M", "L", "XL"].map((size) => (
              <>
                <div
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`  px-3 py-1 border-2 cursor-pointer transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300"
                  } hover:bg-black hover:text-white`}
                >
                  <span className="text-lg">{size}</span>
                </div>
              </>
            ))}
          </div>
          <button
            className="bg-white text-black border 
      px-4 py-2 w-full mt-4
      border:black hover:bg-black hover:text-white hover:border hover:border-white"
            onClick={() => {}}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewWidget;
