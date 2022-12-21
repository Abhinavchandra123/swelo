import React from "react";
// import {Link} from "react-router-dom";
import fb from "../Images/icons/fb.svg";
import insta from "../Images/icons/insta.svg";
import twitter from "../Images/icons/twitter.svg";
import youtube from "../Images/icons/youtube.svg";


function Footer() {
  return (
    <footer className="text-center bg-black text-white py-5" height="">
    <div className="container">
      <section className="my-3">
        <a className="text-white text-decoration-none mx-3" href="#!">© SEWELOPARIS 2022</a>
        <a className="text-white text-decoration-none mx-3" href="#!">PRIVACY POLICY</a>
        <a className="text-white text-decoration-none mx-3" href="#!">COOKIE POLICY</a>
        <a className="text-white text-decoration-none mx-3" href="#!">TERMS & CONDITIONS</a>
        <a className="text-white text-decoration-none mx-3" href="#!">TERMS OF SERVICE</a>
      </section>
      <section className="mb-3">
        <a className="text-white text-decoration-none mx-3" href="#!">CONTACT US</a>
        <a className="text-white text-decoration-none mx-3" href="#!">STORES</a>
        <a className="text-white text-decoration-none mx-3" href="#!">FAQ</a>
        <a className="text-white text-decoration-none mx-3" href="#!">BLOG</a>
      </section>
      <section className="">
        <a className="social mx-1" href="#!"><img height={25} src={fb} alt=""/></a>
        <a className="social mx-1" href="#!"><img height={25} src={insta} alt=""/></a>
        <a className="social mx-1" href="#!"><img height={25} src={twitter} alt=""/></a>
        <a className="social mx-1" href="#!"><img height={25} src={youtube} alt=""/></a>
      </section>
    </div>
  </footer>
  );
}

export default Footer;
