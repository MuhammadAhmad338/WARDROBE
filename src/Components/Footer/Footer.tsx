import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-8 shadow-lg mt-auto">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <Link to="/about" onClick={scrollToTop}>
            <p>About Us</p>
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            <p>Contact Us</p>
          </Link>
          <Link to="/faq" onClick={scrollToTop}>
            <p>FAQ</p>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Our Policy</h3>
          <Link to="/shippingpolicy" onClick={scrollToTop}>
            <p>Shipping Policy</p>
          </Link>
          <Link to="/privacypolicy" onClick={scrollToTop}>
            <p>Privacy Policy</p>
          </Link>
          <Link to="/termsofservice" onClick={scrollToTop}>
            <p>Terms of Service</p>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <p>Subscribe to our Newsletter</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Powered by Ahmad</p>
        <p>Theme by Masetroo</p>
      </div>
    </footer>
  );
};

export default Footer;
