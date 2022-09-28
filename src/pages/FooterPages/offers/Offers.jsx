import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const Offers = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="offers">
          <h2>Offers</h2>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Offers;
