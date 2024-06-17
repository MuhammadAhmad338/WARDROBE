import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from './Components/NotFound/NotFound';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import AllProducts from './Components/AllProducts/AllProducts';
import ProductPage from './Components/Product/Product';
import PrivacyPolicy from './Components/Privacypolicy/PrivacyPolicy';
import Termsofservice from './Components/Termsofservice/Termsofservice';
import ShippingPolicy from './Components/ShippingPolicy/ShippingPolicy';
import Home from "./Components/Home/Home";
import FAQ from './Components/FAQ/FAQ';
import StockItemsList from './Components/StockItemList/stockItemList';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/stock" element={<StockItemsList />} />
  
          <Route path="*" element={<NotFound />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofservice" element={<Termsofservice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />

          {/* Route for the single product page */}
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;





