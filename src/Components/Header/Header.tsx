import { RootState } from '../../Store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Upperheader from './UpperHeaders/upperheader';
import Uppertolowerheader from './UpperHeaders/uppertolowerheader';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, title: "Product 1", price: 19.99, quantity: 2, image: "https://via.placeholder.com/150" },
    { id: 2, title: "Product 2", price: 24.99, quantity: 1, image: "https://via.placeholder.com/150" }
  ]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const increaseQuantity = (id: any) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decreaseQuantity = (id: any) => {
    const updatedItems = items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id: any) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };


  
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (  
    <>
    <Upperheader />
    <Uppertolowerheader />
    <div className="relative bg-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left side: Navigation Links */}
        <div className="flex items-center space-x-4 ">
          <div className="text-black cursor-pointer lg:hidden" onClick={toggleDrawer}>
            &#9776; Menu
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link to="/" className="text-black text-sm hover:text-gray-500">Home</Link>
             <Link to="/about" className="text-black text-sm hover:text-gray-500">About Us</Link>
             <Link to="/contact" className="text-black text-sm hover:text-gray-500">Contact Us</Link>
             <Link to="/products" className="text-black text-sm hover:text-gray-500">New Arrivals</Link>
             <Link to="/products" className="text-black text-sm hover:text-gray-500">All Products</Link>
          </div>
        </div>
        
        {/* Center: Logo */}
       
       {/* Center: Logo */}
       <div className="text-black text-1xl lg:text-3xl lg:absolute lg:inset-x-0 lg:left-0 lg:right-0 lg:text-center">
          <Link to="/">
            W A R D R O B E
          </Link>
        </div>
        
        {/* Right side: Cart and Search */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div className="text-black cursor-pointer" onClick={toggleCart}>
            &#128722; 
          </div>
          
          {/* Search Icon */}
          <div className="text-black cursor-pointer" onClick={toggleSearch}>
            &#128269; 
          </div>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
          <div className="absolute top-0 left-0 h-full w-4/5 sm:w-80 lg:w-60 bg-white shadow-lg">
            <div className="p-4">
              {/* Drawer Content with Links */}
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-black hover:text-gray-500" onClick={toggleDrawer}>Home</Link>
                <Link to="/about" className="text-black hover:text-gray-500" onClick={toggleDrawer}>About</Link>
                <Link to="/contact" className="text-black hover:text-gray-500" onClick={toggleDrawer}>Contact</Link>
                <Link to="/products" className="text-black hover:text-gray-500" onClick={toggleDrawer}>All Products</Link>
              </div>
              <button className="text-gray-800 mt-4" onClick={toggleDrawer}>Close</button>
            </div>
          </div>
        </div>
      )}
       {/* Cart */}
     
      {/* Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="absolute top-0 right-0 h-full w-4/5 sm:w-80 lg:w-60 bg-white shadow-lg rounded-lg">
            <div className="p-4 flex flex-col h-full">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <div className="overflow-y-auto flex-1">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 mt-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-1">
                        <button onClick={() => decreaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 px-2">
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 px-2">
                          +
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-700">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl">${totalPrice.toFixed(2)}</p>
              </div>
              <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-sm">Proceed to Checkout</button>
              <button className="text-gray-800 mt-4" onClick={toggleCart}>Close</button>
            </div>
          </div>
        </div>
      )}


      {/* Search */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="absolute top-0 right-0 h-full w-4/5 sm:w-80 lg:w-60 bg-white shadow-lg">
            <div className="p-4">
              Search Content
              <button className="text-gray-800" onClick={toggleSearch}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
   </>
  );
};

export default Header;


