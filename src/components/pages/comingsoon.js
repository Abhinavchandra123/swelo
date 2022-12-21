import React from "react";
import Navbar from "../includes/Navbarwhite";
import bg1 from "../Images/coming/opening.jpg";

function openingsoon() {
  return (
    <>
      <Navbar />
      <div className="">
        <section className="position-relative">
          <img className="w-100" src={bg1} alt="" />
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 style={{ fontSize: 85 }} className="text-white">
              OPENING
            </h1>
            <h1 className="text-white text-center">Soon</h1>
          </div>
        </section>
        <div className="position-relative container border-bottom py-4  mx-auto my-5 d-flex">
          <h6 className="bg-white border border-dark py-2 px-4 position-absolute top-100 start-50 translate-middle">
            NEW YORK
          </h6>
        </div>
      </div>
    </>
  );
}

export default openingsoon;
