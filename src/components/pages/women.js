import React from "react";
import Navbar from "../includes/Navbarwhite";
import bg1 from "../Images/women/bg1.jpg";

function women() {
  return (
    <>
      <Navbar />
      <div className="">
      <section className=" position-relative">
        <img className="w-100" src={bg1} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{fontSize:70}} className="text-white">WOMEN'S BAGS</h1>
          <h1 className="text-white text-center">Coming Soon</h1>
        </div>
      </section>
      </div>
    </>
  );
}

export default women;
