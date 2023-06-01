import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Footer from './components/Footer';
// import Landing from './components/Landing';
import {Navbar} from './components/Navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';

function App() {
  return (
    <div className='div'>
<Router>
<Navbar />
{/* <Footer/>  */}
  <Routes>
<Route path="/" element={<Shop/>} />
<Route path="/cart"  element={<Cart/>}/>

  </Routes>
</Router>

    </div>
   

  );
}

export default App;

 
