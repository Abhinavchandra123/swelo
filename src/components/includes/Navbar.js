import { Link } from "react-router-dom";
import logowhite from "../Images/logo/whiteLogo.svg";
import React, {useState, useEffect} from "react";
import axios from 'axios';

function Navbar() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    async function fetchProduct() {
      const {data} = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchProduct()
  },[])
  return (
    <>
      <nav
        className="navbar position-absolute fixed-top w-100 pt-lg-5"
        style={{ zIndex: 100 }}
      >
        <div className="container pt-3">
          <Link className="navbar-brand" to="/">
            <img src={logowhite} alt="SEWELO PARIS" width="150" height="" />
          </Link>
          {/* <Link className="navbar-brand" to="Aboutus">About</Link>
    <Link className="navbar-brand" to="Contactus">Contact</Link> */}
          <i
            id="abcd"
            onClick={openNav}
            type="button"
            className="h1 bi bi-list text-white"
          ></i>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        {" "}
        <Link className="closebtn text-white" onClick={closeNav}>
          &times;
        </Link>
        <ul>
          <Link style={{ textDecoration: "none" }} to="">
            {" "}
            FRAGRANCE COLLECTIONS{" "}
          </Link>
          <ul>
          {products.map((product) => (
              <Link to={`/products/${product.id}/`}>{product.brand}</Link>
          ))}
          </ul>

          <Link to="../MensAccessories">MEN'S ACCESSORIES</Link>

          <Link to="../WomensBags">WOMEN'S BAGS</Link>

          <Link to="">BOUTIQUE</Link>

          <Link to="../Ourstory">OUR STORY</Link>

          <Link to="../Contactus">CONTACT US</Link>
        </ul>
      </div>

      <div id="overlay" onClick={closeNav}></div>
    </>
  );
}

export default Navbar;

function overlay(isShow) {
  var elm = document.getElementById("overlay");
  if (isShow) {
    elm.style.display = "block";
  } else {
    elm.style.display = "none";
  }
}

function openNav() {
  overlay(true);
  document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
  overlay(false);
  document.getElementById("mySidenav").style.right = "-100%";
}
