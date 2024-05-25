import { Link } from 'react-router-dom';
import { RootState } from '../Store/store';
import logo from '../assets/wardrobe (1).png';
import { toggleCart } from '../Slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Search from './Search';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const  cartItems = useSelector((state: RootState) => state.cart.items );
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
         <p onClick={() => setIsSearchOpen(!isSearchOpen)}>Search</p> 
          <div className="relative ml-8">
         
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
                    {cartItems.map(cartItem => (
                      <li key={cartItem.id} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                          <img src={cartItem.image} alt={cartItem.name} className="w-16 h-16 rounded-full mr-4" />
                          <div>
                            <h3 className="text-lg font-semibold">{cartItem.name}</h3>
                            <p className="text-black-500">{cartItem.description}</p>
                            <p className="text-black-700 font-bold">${cartItem.price}</p>
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
      {isSearchOpen && <Search isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
    </header>
  );
};

export default Header;


