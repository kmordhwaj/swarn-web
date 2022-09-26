import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Silver = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="memPlans">
          <h1>Long Holidays</h1>
          <div className="memTexts">
            Planning for a long holiday with group? Contact us!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Silver;
