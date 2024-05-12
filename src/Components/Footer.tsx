const Footer = () => {
  return (
    <footer className="bg-orange-200 text-gray-800 py-8 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-4">
          <h3 className="text-lg font-semibold mb-2">Our Policy</h3>
          <p>Shipping Policy</p>
          <p>Returns & Exchanges</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
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

