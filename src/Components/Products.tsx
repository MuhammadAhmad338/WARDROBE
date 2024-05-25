import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store/store.ts";
import {addItem} from "../Slice/cartSlice.ts";
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

const ProductCard: React.FC<ProductProps> = ({ id, name, description, price, image, quantity })  => {
    const dispatch : AppDispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id, name, price, quantity, image, description}));
    };

    return (
        <Link to={`/products/${id}`} className="max-w-sm overflow-hidden shadow-md hover:cursor-pointer">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base overflow-hidden line-clamp-2">{description}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">PKR {price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddToCart}
                >Add to Cart</button>
            </div>
        </Link>
    );
};

export default Products;