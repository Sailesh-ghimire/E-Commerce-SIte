import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Footer from './components/Footer';
// import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className='div'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <Footer/>  */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>


  );
}

export default App;


