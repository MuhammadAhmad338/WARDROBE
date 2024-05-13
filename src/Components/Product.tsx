import React from 'react';

const ProductPage = () => {
    return (
        <div className="container mx-auto px-4 py-6 flex">
            {/* Product Picture */}
            <div className="w-1/2">
                <img src="product-image.jpg" alt="Product" className="w-full" />
            </div>

            {/* Product Details */}
            <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">Product Name</h2>
                <p className="text-gray-600 mb-4">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="text-2xl font-semibold mb-4">$99.99</p>

                {/* Add to Cart button */}
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductPage;
