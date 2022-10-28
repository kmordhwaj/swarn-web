import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./plans.css";
import { Helmet } from "react-helmet";

const Platinum = ({ title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content="Platinum plan for the trip." />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-plans swarn-holidays-platinum-plan"
        />
      </Helmet>

      {/* code */}
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
    </>
  );
};

Platinum.defaultProps = {
  title: "Swarn Holidays | Plans - Platinum",
};

export default Platinum;
