import { Link } from 'react-router-dom';
import { RootState } from '../Store/store';
import logo from '../assets/wardrobe (1).png';
import { toggleCart } from '../Slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 150,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 150,
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">

        <div className="flex">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="h-8 w-auto mr-2 pr-12" />
          </Link>

          <nav className="hidden md:flex flex-grow justify-center items-center space-x-4 pl-40">
            <a href="/" className="text-gray-700 hover:text-gray-900 hover:underline">HOME</a>
            <a href="/allProducts" className="text-gray-700 hover:text-gray-900 hover:underline">ALL PRODUCTS</a>
            <a href="/about" className="text-gray-900 hover:text-gray-900 hover:underline">ABOUT US</a>
            <a href="/contact" className="text-gray-900 hover:text-gray-900 hover:underline">CONTACT US</a>
          </nav>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700 cursor-pointer" onClick={handleToggleCart} />
            {isOpen && (
              <div className="fixed right-0 top-0 w-2/6 h-screen shadow-3xl bg-gray-300 bg-opacity-75 z-50 transition duration-300 ease-in-out transform translate-x-full lg:translate-x-0">
                {/* Cart content */}
                <div className="p-4">

                  <div className="flex items-center ">
                    <h2 className="text-xl font-semibold mb-2 pt-4 text-gray-800">Cart</h2>
                    {/* Close icon */}
                    <button className="absolute top-4 right-4 text-black pt-4">
                      <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer" onClick={handleToggleCart} />
                    </button>
                  </div>

                  {/* Scrollable list of cart items */}
                  <ul className="overflow-y-auto">
                    {/* Map over products array */}
                    {products.map(product => (
                      <li key={product.id} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-full mr-4" />
                          <div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-black-500">{product.description}</p>
                            <p className="text-black-700">${product.price}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white shadow-md text-black px-4 py-2 mt-4 w-full">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


