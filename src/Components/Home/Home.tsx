import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import BlogSection from '../BlogSection/BlogSection';
import '../../index.css';

const Home = () => {
   
    const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 100,
        image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_records%2Fasdsad.jpeg?alt=media&token=145e5115-a9f2-4841-b686-c3c5fad3185a",
    },
    {
        id: 2,
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 150,
        image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_records%2Fasdsad.jpeg?alt=media&token=145e5115-a9f2-4841-b686-c3c5fad3185a",
    },
    {
        id: 3,
        name: "Product 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 200,
        image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fstayactive.jpg?alt=media&token=b6d1b473-f09c-4e34-9469-b23adf034f1c",
    },
    {
        id: 4,
        name: "Product 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 100,
        image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
    },
    {
        id: 5,
        name: "Product 5",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 150,
        image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
    },
  ];

  const images = [
    'src/assets/pexels-pixabay-264726.jpg',
    'src/assets/pexels-muffin-2205839.jpg',
    'src/assets/pexels-david-bartus-43782-297933.jpg'
  ];

  

  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass(''); // Reset the fade class
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  useEffect(() => {
    setFadeClass('fade-in'); // Apply the fade class when image changes
  }, [currentImageIndex]);

  return (
    <div>
      <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center relative">
        <img
          src={images[currentImageIndex]}
          alt="Shop Now"
          className={`w-full h-full object-cover ${fadeClass} md:object-contain`}
          style={{ minHeight: '100vh' }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm text-white mb-4">W A R D R O B E</p>
          <button className="px-6 py-3 text-sm text-black bg-white shadow-lg md:text-md md:px-8 md:py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <Products products={products} />
      </div>

      <BlogSection />
    </div>
  );
}

export default Home;