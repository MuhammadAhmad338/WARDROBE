import { useState } from "react";
import { Link } from "react-router-dom";
import QuickViewWidget from "../../Widgets/quickViewWidget";

// Assuming ProductCard is in a separate file
interface ProductProps {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

const Products = ({ products }: any) => {
  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product: any, index: number) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <ProductCard id={product.id}
                       name={product.name}
                       description={product.description}
                       image={product.image}
                       price={product.price}
                       quantity={product.quantity}  />
        </div>
      ))}
    </div>
  );
};

const ProductCard: React.FC<ProductProps> = ({ id, name, description, price, image })  => {

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickViewToggle = () => {
    setIsQuickViewOpen(!isQuickViewOpen);
  };
  
  return (
    <>
    <div className="max-w overflow-hidden shadow-lg bg-white">
      
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt={name} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
          <button onClick={handleQuickViewToggle} className="text-white text-sm font-semibold bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-600 transition duration-300">
            Quick View
          </button>
        </div>
      </div>

      <Link to={`/products/${id}`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 truncate">{name}</div>
        <p className="text-gray-700 text-base line-clamp-2">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
          ${price.toFixed(2)}
        </span>
        <button className="bg-black hover:bg-white text-white hover:text-black hover:border hover:border-black  font-bold py-2 px-4 focus:outline-none focus:shadow-outline transition duration-300">
          Add to Cart
        </button>
      </div>
      </Link>
    </div>

    {/* Quick View Modal */}
    {isQuickViewOpen && (
       <QuickViewWidget
       name={name}
       image={image}
       description={description}
       price={price}
       handleQuickViewToggle={handleQuickViewToggle}
     />
      )}
    </>
   
  );
};

export default Products;