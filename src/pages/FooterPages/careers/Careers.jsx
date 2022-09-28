import React from "react";
import "./careers.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const Careers = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="aboutheading">
          <h1>Careers</h1>
        </div>
        <div className="contactCareer">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/job.png`}
              alt="job"
              className="careerImg"
            />
          </div>
          <div className="ContainerCareer">
            Sorry! <br /> No current openings here.
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
