import React from "react";
import Home from "./components/pages/Home";
// import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/footer";
import Contactus from "./components/pages/Contact";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Ourstory from "./components/pages/Ourstory";
import Product from "./components/pages/product";
import MensAccessories from "./components/pages/men";
import WomensBags from "./components/pages/women";
import Openingsoon from "./components/pages/comingsoon";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="swelo" element={<Home />}exact />
          <Route path="Ourstory" element={<Ourstory />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="MensAccessories" element={<MensAccessories/>} />
          <Route path="WomensBags" element={<WomensBags/>} />
          <Route path="Openingsoon" element={<Openingsoon/>} />
          <Route path="Contactus" element={<Contactus/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
