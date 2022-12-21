import React from "react";
import Navbar from "../includes/Navbarwhite";
import bgleft from "../Images/ourstory/bg1left.jpg";

function Ourstory() {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          <div><h1 className="text-end pb-4" style={{fontSize:"60px"}}>Our Story</h1></div>
          <div className="col-lg-5">
            <img src={bgleft} className="w-100" alt="" />
          </div>
          <div className="col-lg-7 ps-5 py-5">
            <p>
              A fragrance is unique to each being, it conveys a different aura
              to everyone. The comfort lies in the scent of the perfume, and the
              unearthing of a gem from the depths of the Karowe diamond mine has
              inspired the Sewelô .fragrance line.
              <br/><br/>A cologne displays a different character when one wears it
              and communicates their persona. Sewelo is created to leave an
              unforgettable impression wherever they go and radiates a
              confidence that attracts the heart and soul of .the sophisticated
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end"><p className="border border-dark py-1 px-5">View More</p></div>

      </div>
    </>
  );
}

export default Ourstory;
