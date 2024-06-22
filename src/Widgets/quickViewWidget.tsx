import React from 'react';

interface QuickViewWidgetProps {
  name: string;
  image: string;
  description: string;
  price: number;
  handleQuickViewToggle: () => void;
}

const QuickViewWidget: React.FC<QuickViewWidgetProps> = ({ name, image, description, price, handleQuickViewToggle }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 md:p-8">
  <div className="bg-white max-w-3xl w-full h-auto md:h-3/4 lg:h-3/5 shadow-lg flex flex-col md:flex-row relative">
    <div className="relative w-full md:w-1/2 flex items-center justify-center">
      <div className="w-full h-[300px] max-w-md">
        <img className="w-full h-full bject-cover" src={image} alt={name} />
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-between relative">
      <button
        className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black text-white py-2 px-3 sm:py-3 sm:px-4 hover:bg-gray-800 transition duration-300"
        onClick={handleQuickViewToggle}
      >
        ✕
      </button>
      <div>
        <h2 className="text-xl sm:text-2xl mb-2 sm:mb-4 text-gray-800">{name}</h2>
        <p className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-8">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4 sm:mt-0">
        <span className="text-lg sm:text-xl text-gray-800">$ {price.toFixed(2)}</span>
        <button className="bg-black text-white hover:bg-white hover:border hover:border-black hover:text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default QuickViewWidget;


