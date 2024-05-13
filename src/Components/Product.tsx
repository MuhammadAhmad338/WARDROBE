import { useState } from 'react';

const ProductPage = () => {
    // State for product count
    const [count, setCount] = useState(1);

    // Function to increase count
    const increaseCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to decrease count
    const decreaseCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="container mx-auto px-4 py-6 flex">
        {/* Product Picture */}
        <div className="w-1/2 flex-grow flex-shrink">
            <img src="product-image.jpg" alt="Product" className="w-full h-full" />
        </div>
    
        {/* Product Details */}
        <div className="w-1/2 pl-6 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Product Name</h2>
                <p className="text-gray-600 mb-4">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-2xl font-semibold mb-4">$99.99</p>
            </div>
    
            {/* Product Count */}
            <div className="flex items-center mb-4">
                <button className="bg-gray-300 text-gray-700 px-4 py-2" onClick={decreaseCount}>-</button>
                <span className="bg-gray-100 text-gray-700 px-4 py-2">{count}</span>
                <button className="bg-gray-300 text-gray-700 px-4 py-2" onClick={increaseCount}>+</button>
            </div>
    
            {/* Add to Cart button */}
            <button className="bg-gray-800 text-white px-2 py-2 mb-2 w-full">Add to Cart</button>
            
            {/* Buy Now button */}
            <button className="bg-blue-500 text-white px-2 py-2 w-full">Buy Now</button>
        </div>
    </div>
    
    );
};

export default ProductPage;

