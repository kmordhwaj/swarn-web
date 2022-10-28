import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";

const Silver = ({ title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content="Silver plan for the trip." />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-plans swarn-holidays-silver-plan"
        />
      </Helmet>

      {/* code */}
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
    </>
  );
};

Silver.defaultProps = {
  title: "Swarn Holidays | Plans - Silver",
};

export default Silver;
