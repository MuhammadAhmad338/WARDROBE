import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NotFound from './Components/NotFound';
import Contact from './Components/Contact';
import About from './Components/About';
import AllProducts from './Components/AllProducts';
import ProductPage from './Components/Product';

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
          <Route path="*" element={<NotFound />} />
          {/* Route for the single product page */}
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;





