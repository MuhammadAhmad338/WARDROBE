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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-4xl w-full lg:h-3/5 shadow-lg flex relative">
        <div className="relative w-1/2 h-full">
          <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-between relative">
          <button
            className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-black text-white  py-3 px-4 hover:bg-gray-800 transition duration-300"
            onClick={handleQuickViewToggle}
          >
            ✕
          </button>
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{name}</h2>
            <p className="text-gray-700 text-lg mb-8">{description}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-gray-800">${price.toFixed(2)}</span>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewWidget;


