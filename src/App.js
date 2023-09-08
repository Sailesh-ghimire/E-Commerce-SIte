
import "./App.css";
import {Home} from "./pages/home";
import { MainNavbar } from './components/MainNavbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {Landing2} from "./pages/landing/Landing";
import Footer from './components/Footer';
import Products from "./pages/landing/Products";
import ProductDisplay from "./pages/ProductDisplay";
import Khalti from "./components/Khalti/Khalti";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className=" overflow-hidden">
        <ShopContextProvider>
      <BrowserRouter>
      <MainNavbar/>
        <Routes>
          <Route path="/">
            <Route index element={<Landing2 />} />
            <Route path="admin" element={<Home />} />
          <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            
            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<ProductDisplay/>} />              
            <Route path="khalti" element={<Khalti/>}/>
         </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
    </div>
  );
}

export default App;