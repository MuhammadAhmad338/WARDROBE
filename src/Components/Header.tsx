import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import { toggleCart } from '../Slice/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/wardrobe (1).png';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex"> 
       <Link to={"/"}>
          <img src={logo} alt="Logo" className="h-8 w-auto mr-2 pr-12"  />
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
              <div className="absolute top-full right-0 bg-white border border-black p-4">
                Your Cart is Open
              </div>
            )}
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;


