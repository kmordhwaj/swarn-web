import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";

const Diamond = ({ title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content="Diamond plan for the trip." />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-plans swarn-holidays-diamond-plan"
        />
      </Helmet>
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
    </>
  );
};

Diamond.defaultProps = {
  title: "Swarn Holidays | Plans - Diamond",
};

export default Diamond;
