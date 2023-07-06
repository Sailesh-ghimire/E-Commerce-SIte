// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// // import Footer from './components/Footer';
// // import Landing from './components/Landing';
// import { Navbar } from './components/Navbar';
// import { Cart } from './pages/cart/cart';
// import { Contact } from './pages/contact';
// import { Shop } from './pages/shop/shop';
// import { ShopContextProvider } from './context/shop-context';
// import { Sidebar } from './components/Sidebar';
// import { Home } from './pages/home';
// // import { List } from './pages/list/list';
// import { Login } from './pages/login/login';
// import { New } from './pages/new/new';
// import { Single } from './pages/single/single';



// function App() {
//   return (
//     <div className='App'>
//       <ShopContextProvider>
//         <Router>
//           <Navbar />

//           <Routes>
//             {/* <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path='contact' elements={<Contact/>}/>
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/Sidebar" element={<Sidebar />} /> */}

//             <Route path='/'>
//               <Route index element={<Home />} />
//               <Route path="shop" element={<Shop />} />
//               <Route path='contact' elements={<Contact />} />
//               <Route path="cart" element={<Cart />} />
//               <Route path="sidebar" element={<Sidebar />} />
//               <Route path="login" element={<Login />} />
//               <Route path="users">
//                 {/* <Route index element={<List />}/>
//                 <Route path=":userId" element={<Single/>} />
//                 <Route path="new" element={<New/>} /> */}

//             </Route>

//             <Route path="products">
//                 {/* <Route index element={<List />}/>
//                 <Route path=":productId" element={<Single/>} />
//                 <Route path="new" element={<New/>} /> */}

//             </Route>

//             </Route>

//           </Routes>
//           {/* <Footer /> */}
//         </Router>
//       </ShopContextProvider>
//     </div>


//   );
// }

// export default App;




import "./App.css";
import {Home} from "./pages/home";
import { MainNavbar } from './components/MainNavbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
// import Login from "./pages/login/login";
// import New from "./pages/new/new";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {Landing2} from "./pages/landing/Landing";
import Footer from './components/Footer';
import Products from "./pages/landing/Products";
import Product from "./pages/landing/Product";

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
            {/* <Route path="login" element={<Login />} /> */}
            
            <Route path="products" element={<Products />} />
              
              {/* <Route path=":id" element={<Products />} /> */}
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            {/* </Route> */}
            <Route path="product">
              
              <Route path=":id" element={<Product />} />
              </Route>
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