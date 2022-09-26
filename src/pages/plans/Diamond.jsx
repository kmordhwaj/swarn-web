import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Diamond = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="memPlans">
          <h1>Lions club</h1>
          <div className="memTexts">
            want to explore best service? Join Lion's Club!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Diamond;
