import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
// import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { Cart } from './pages/cart/cart';
import { Contact } from './pages/contact';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
           
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path='contact' elements={<Contact/>}/>
            <Route path="/cart" element={<Cart />} />

          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>


  );
}

export default App;


