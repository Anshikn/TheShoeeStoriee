import Navbar from "./Components/Navbar/Navbar";
import Navbar1 from "./Components/Navbar/Navbar1";
import SearchResults from "./Components/SearchBar/SearchResult";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import boys_banner from "./Components/Assets/boys_banner.png";
import girl_banner from "./Components/Assets/girls_banner.png";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function Main() {


  const location = useLocation();
  // const hideNavbar = location.pathname === "/login";

  return (
    <div>
      {/* {!hideNavbar && <Navbar />} */}


      {/* <Router> */}
      {location.pathname !== "/login" && <Navbar1 />}
      {location.pathname !== "/login" && <Navbar />}

      {/* <Navbar1 />
      <Navbar /> */}
      <Routes>
        <Route path="/" element={<Shop gender="all" />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/boy" element={<ShopCategory banner={boys_banner} category="boy" />} />
        <Route path="/girl" element={<ShopCategory banner={girl_banner} category="girl" />} />
        <Route path="/nike" element={<ShopCategory banner={men_banner} brand="nike" />} />
        <Route path="/adidas" element={<ShopCategory banner={men_banner} brand="adidas" />} />
        {/* <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />

        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App;
