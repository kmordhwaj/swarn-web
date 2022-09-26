import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./about.css";

const About = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="aboutheading">
          <h1>About Company</h1>
        </div>
        <div className="about">
          <div className="aboutpara">
            <p>
              We are a holidays planning company headquartered in raipur,
              chhattisgarh established in 2021. we are determined and commited
              for making holidays memories memorable. we have fulfilled over
              100+ satisfied clients and tied up with great luxurious resorts
              villas properties over the nation.
            </p>
          </div>
          <div className="aboutimg">
            <img
              src={`${process.env.PUBLIC_URL}/images/welcome.png`}
              alt="welcome"
              height={200}
              width={300}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
