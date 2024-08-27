import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';

const Home = lazy(() => import('./company/Home'));
const About = lazy(() => import('./company/About'));
const Contact = lazy(() => import('./company/Contact'));
const Policy = lazy(() => import('./company/Policy'));
const Terms = lazy(() => import('./company/Terms'));
const Products = lazy(() => import('./company/Products'));
const Services = lazy(() => import('./company/Services'));
const ProductDetail = lazy(() => import('./company/ProductDetail'));

function App() {
  return (
    <Suspense fallback={
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader />
      </div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/product-detail" element={<ProductDetail />} /> */}
          <Route path="/policy" element={<Policy />} />
          <Route path="/terms" element={<Terms />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
