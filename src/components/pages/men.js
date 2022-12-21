import React from "react";
import Navbar from "../includes/Navbarwhite";
import bg1 from "../Images/men/bg1.jpg";

function men() {
  return (
    <>
      <Navbar />
      <div className="">
      <section className=" position-relative">
        <img className="w-100" src={bg1} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{fontSize:65}} className="text-white">MEN'S ACCESSORIES</h1>
          <h1 className="text-white text-center">Coming Soon</h1>
        </div>
      </section>
      </div>
    </>
  );
}

export default men;
