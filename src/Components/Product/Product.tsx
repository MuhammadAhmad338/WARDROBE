import { useState } from "react";
import Dropdown from "../../Widgets/dropdownWidget";

const ProductCard = () => {
  const [selectedSize, setSelectedSize] = useState("S"); // Default size is 'S'
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://via.placeholder.com/800x800",
    "https://via.placeholder.com/800x801",
    "https://via.placeholder.com/800x802",
    "https://via.placeholder.com/800x803",
  ];

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };
  // Function to handle size selection
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg  overflow-hidden w-full flex flex-col  lg:flex-row">
      {/* Image on the left */}
      <div className="relative w-full">
        <img
          src={images[currentImage]} // Larger image size
          alt="Green Swim Shorts"
          className="w-[840px] h-[1000px] object-cover"
        />
        <div
          onClick={() => navigateImage("prev")}
          className="absolute top-1/2 left-4 transform 
-translate-y-1/2 bg-black rounded-full p-2 cursor-pointer shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          onClick={() => navigateImage("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black rounded-full p-2 cursor-pointer shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <div className="flex mb-4 lg:items-center">
          {[
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
            "https://via.placeholder.com/100",
          ].map((item) => (
            <img
              src={item}
              alt="Thumbnail 1"
              className="w-[100px] h-[100px] sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 object-cover cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Product details on the right */}
      <div className="w-full p-12">
        <h1 className="text-2xl font-bold mb-2">
          THRST Classic Hue Swim Shorts
        </h1>
        <p className="text-xl font-semibold mb-4">$49.99</p>
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          cursus blandit magna, a vulputate arcu imperdiet id.
        </p>

        <div className="mb-4">
          <label className="flex justify-between items-center text-sm font-medium text-gray-700 w-full">
            <div>
              Size: <span className="text-sm">{selectedSize}</span>
            </div>
            <span className="text-sm text-blue-500 cursor-pointer">
              Size Guide
            </span>
          </label>

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

          <button className="bg-white w-full border-2 border-black text-black px-3 py-2 mt-5 hover:bg-black hover:text-white transition-colors duration-300">
            Add to Cart
          </button>
          <div className="p-4">
            <Dropdown title="PRODUCT INFORMATION">
              <p className="mb-4">
                The THRST Classic Hue Swim Shorts are constructed from a
                light-weight water resistant material that makes them both
                practical and on point in terms of style. The fit runs slightly
                longer through the outer leg for a comfortable look and feel.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Super quick-dry mesh lining</li>
                <li>Side pockets and back pocket with zip</li>
                <li>Elasticated adjustable waistband</li>
                <li>90% Polyester 10% elastane</li>
                <li>Model wears a size medium</li>
              </ul>
            </Dropdown>
            <Dropdown title="SIZE AND INFO">
              <p>
                Classic shorts run slightly longer through the outer leg and fit
                true to size at the waist. Mike wears a size medium.
              </p>
            </Dropdown>
            <Dropdown title="DELIVERY AND RETURNS">
              <p>
                FREE SHIPPING*: <br />
                UK: Over £70 <br />
                US: Over $100 <br />
                AUSTRALIA: Over $100 <br />
                CANADA: Over 170 CAD <br />
                EUROPE* (Germany, Netherlands, Sweden, Spain, France, Denmark,
                Ireland, Switzerland, Norway, Portugal, Italy, Belgium, Greece,
                Austria): Over €100
              </p>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
