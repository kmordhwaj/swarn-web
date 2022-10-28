import React from "react";
import "./plans.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";

const Gold = ({title}) => {
  return (
    <>
    {/* seo portion */}
    <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="description" content="Gold plan for the trip." />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-plans swarn-holidays-gold-plan"
        />
      </Helmet>
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
    </>
  );
};

Gold.defaultProps = {
  title: "Swarn Holidays | Plans - Gold",
};

export default Gold;
