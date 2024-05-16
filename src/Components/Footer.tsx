import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-orange-200 text-gray-800 py-8 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-center h-full">
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
          <p>Blog</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Our Policy</h3>
          <p>Shipping Policy</p>
          <p>Returns & Exchanges</p>
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
            <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Subscribe</button>
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
