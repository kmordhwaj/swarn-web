import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./plans.css";

const Platinum = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="memPlans">
          <h1>Weekend Gateways</h1>
          <div className="memTexts">
            Planning for a Weekend Gateway? Contact us!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Platinum;
