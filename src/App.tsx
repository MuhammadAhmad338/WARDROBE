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
import Checkout from './Components/Checkout/checkout';

const App = () => {
  return (
    <>
    <Router>
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Home />
          <Footer />
        </>
      }
    />
    <Route
      path="/allProducts"
      element={
        <>
          <Header />
          <AllProducts />
          <Footer />
        </>
      }
    />
    <Route
      path="/contact"
      element={
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      }
    />
    <Route
      path="/about"
      element={
        <>
          <Header />
          <About />
          <Footer />
        </>
      }
    />
    <Route
      path="/stock"
      element={
        <>
          <Header />
          <StockItemsList />
          <Footer />
        </>
      }
    />
    <Route
      path="/products/:id"
      element={
        <>
          <Header />
          <ProductPage />
          <Footer />
        </>
      }
    />
    <Route path="/checkouts" element={<Checkout />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/termsofservice" element={<Termsofservice />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/shippingpolicy" element={<ShippingPolicy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>;
    </>
  );
};

export default App;





