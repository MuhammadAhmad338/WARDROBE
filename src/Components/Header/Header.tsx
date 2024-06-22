import Upperheader from "./UpperHeaders/upperheader";
import Uppertolowerheader from "./UpperHeaders/uppertolowerheader";
import { RootState } from "../../Store/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 24.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Product 2",
      price: 24.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Product 1",
      price: 19.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Product 2",
      price: 24.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const increaseQuantity = (id: any) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decreaseQuantity = (id: any) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id: any) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down
        setIsVisible(false);
      } else {
        // If scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Upperheader />
      <Uppertolowerheader />
     
     
     
     
     
     
     
     
     
    <header className="relative flex justify-between items-center px-4 sm:px-6 py-4 sm:py-6 bg-white shadow-md">
        {/* Left: Navigation Links */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-black text-sm hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="text-black text-sm hover:text-gray-500">
            About Us
          </Link>
          <Link to="/contact" className="text-black text-sm hover:text-gray-500">
            Contact Us
          </Link>
          <Link to="/allProducts" className="text-black text-sm hover:text-gray-500">
            New Arrivals
          </Link>
          <Link to="/allProducts" className="text-black text-sm hover:text-gray-500">
            All Products
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl lg:text-3xl text-black">
          <Link to="/">W A R D R O B E</Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <div className="lg:hidden text-black cursor-pointer" onClick={toggleDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div onClick={toggleCart} className="text-black text-lg hover:text-gray-500 cursor-pointer ml-auto">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </header>
     




      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
          <div className="absolute top-0 left-0 h-full w-4/5 sm:w-80 bg-white shadow-lg p-4">
            <button className="text-gray-800 mb-4" onClick={toggleDrawer}>X</button>
            <div className="flex flex-col space-y-4">
              
              <Link to="/" className="text-black hover:text-gray-500" onClick={toggleDrawer}>Home</Link>
              <hr />
              <Link to="/about" className="text-black hover:text-gray-500" onClick={toggleDrawer}>About Us</Link>
              <hr />
              <Link to="/contact" className="text-black hover:text-gray-500" onClick={toggleDrawer}>Contact Us</Link>
              <hr />
              <Link to="/allProducts" className="text-black hover:text-gray-500" onClick={toggleDrawer}>New Arrivals</Link>
              <hr />
              <Link to="/allProducts" className="text-black hover:text-gray-500" onClick={toggleDrawer}>All Products</Link>
               <hr />
               <p  className="text-black hover:text-gray-500" onClick={toggleSearch}> Search</p>
            </div>
          </div>
        </div>
      )}

      {/* Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="absolute top-0 right-0 h-full w-4/5 sm:w-80 lg:w-1/3 xl:w-1/4 bg-white shadow-lg p-4 rounded-lg">
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <button className="text-gray-800" onClick={toggleCart}>Close</button>
              </div>
              <div className="overflow-y-auto flex-1">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 mt-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-1">
                        <button onClick={() => decreaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 px-2">-</button>
                        <span className="px-2">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className="text-gray-500 hover:text-gray-700 px-2">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-500 hover:text-gray-700">Remove</button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold">SubTotal:</p>
                <p className="text-xl">${totalPrice.toFixed(2)}</p>
              </div>
              <Link to="/checkouts">
                <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 shadow-sm">Proceed to Checkout</button>
              </Link>
              <Link to="/cart">
                <button onClick={toggleCart} className="mt-6 w-full bg-black border border-black text-white py-2 px-4 hover:bg-white hover:text-black">View Cart</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search */}
      {isSearchOpen && <Search isOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}   
    </>
  );
};

export default Header;
