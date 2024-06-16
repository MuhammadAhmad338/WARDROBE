import { Link } from 'react-router-dom';
import { RootState } from '../../Store/store';
import logo from '../../assets/wardrobe (1).png';
import { toggleCart } from '../../Slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Search from '../Search/Search';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const  cartItems = useSelector((state: RootState) => state.cart.items);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // @ts-ignore
  return (
    <header className="bg-peach-lightest shadow-lg">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
      </Link>

      <nav className="hidden md:flex flex-grow justify-center items-center space-x-4">
      <p>
    <a href="/" className="text-sm text-gray-700 hover:text-gray-900">HOME</a>
    <a href="/allProducts" className="ml-4 text-sm text-gray-700 hover:text-gray-900 hover:underline">ALL PRODUCTS</a>
    <a href="/about" className="ml-4 text-sm text-gray-900 hover:text-gray-900 hover:underline">ABOUT US</a>
    <a href="/contact" className="ml-4 text-sm text-gray-900 hover:text-gray-900 hover:underline">CONTACT US</a>
</p>
      </nav>

      <div className="flex items-center">
        <button className="text-gray-700" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          Search
        </button>
        <div className="relative ml-8">
          <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700 cursor-pointer" onClick={handleToggleCart} />
          {isOpen && (
            <>
              <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div> {/* Background overlay */}
              <div className="fixed right-0 top-0 w-full md:w-2/6 h-screen shadow-3xl bg-white z-50 transition duration-300 ease-in-out transform translate-x-full lg:translate-x-0">
                {/* Cart content */}
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold pt-4 text-gray-800">Cart</h2>
                    <button type="button" onClick={handleToggleCart} className="text-black pt-4">
                      <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer" />
                    </button>
                  </div>
                  {/* Scrollable list of cart items */}
                  <ul className="overflow-y-auto flex-grow">
                    {/* Flex-grow for full height scrolling */}
                    {cartItems.map((cartItem) => (
                      <li key={cartItem.id} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                          <img src={cartItem.image} alt={cartItem.name} className="w-16 h-16 rounded-full mr-4" />
                          <div>
                            <h3 className="text-lg font-semibold mb-3">{cartItem.name}</h3>
                            <p className="text-gray-500 mb-3">{cartItem.description}</p>
                            <p className="text-gray-700 font-bold mb-3">${cartItem.price}</p>
                            <hr />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Sticky Checkout button */}
                  <div className="mt-auto pt-4">
                    <button className="bg-amber-50 shadow-md border border-black text-black px-6 py-2 mb-4 w-full">Checkout</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    {isSearchOpen && <Search isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
  </header>
  );
};

export default Header;


