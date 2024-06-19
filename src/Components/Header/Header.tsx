import { RootState } from '../../Store/store';
import { toggleCart } from '../../Slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Upperheader from './UpperHeaders/upperheader';
import Uppertolowerheader from './UpperHeaders/uppertolowerheader';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const  cartItems = useSelector((state: RootState) => state.cart.items);
  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // If scrolling down
        setIsVisible(false);
      } else { // If scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);
  // @ts-ignore
  return (  
   <>
  <Upperheader />
<Uppertolowerheader />
<header className={`flex py-4 px-4 bg-amber-50 transition-transform duration-300`}>
  {/* Left-aligned navigation */}
  <nav className="flex items-center space-x-4">
    <a href="/" className="text-gray-700 hover:text-gray-900 text-sm">Home</a>
    <a href="/allProducts" className="text-gray-700 hover:text-gray-900 text-sm">All Products</a>
    <a href="/about" className="text-gray-900 hover:text-gray-900 text-sm">About us</a>
    <a href="/newarticles" className="text-gray-900 hover:text-gray-900 text-sm">New articles</a>
    <a href="/contact" className="text-gray-900 hover:text-gray-900 text-sm">Contact us</a>
  </nav>
  
  {/* Margin-left logo */}
  <div className="ml-56  ">
    <img src="src/assets/wardrobe (1).png" alt="Logo" className="h-7 w-auto" />
  </div>

  {/* Right-aligned elements (search and cart) */}
  <div className="flex items-center flex-grow justify-end space-x-4">
    <button className="text-gray-700" onClick={() => setIsSearchOpen(!isSearchOpen)}>
      Search
    </button>
    <div className="relative">
      <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700 cursor-pointer" onClick={handleToggleCart} />
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
          <div className="fixed right-0 top-0 w-full md:w-2/6 h-screen shadow-3xl bg-white z-50 transition duration-300 ease-in-out transform translate-x-full lg:translate-x-0">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold pt-4 text-gray-800">Cart</h2>
                <button type="button" onClick={handleToggleCart} className="text-black pt-4">
                  <FontAwesomeIcon icon={faTimes} className="text-2xl cursor-pointer" />
                </button>
              </div>
              <ul className="overflow-y-auto flex-grow">
                {/* Iterate over cart items */}
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
              <div className="mt-auto pt-4">
                <button className="bg-amber-50 shadow-md border border-black text-black px-6 py-2 mb-4 w-full">Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
</header>
  </>
  );
};

export default Header;


