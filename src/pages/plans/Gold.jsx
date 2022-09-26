import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Gold = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="memPlans">
          <h1>Panther's Club</h1>
          <div className="memTexts">
            Avail the best benefits of touring. Join Panther's Club!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Gold;
