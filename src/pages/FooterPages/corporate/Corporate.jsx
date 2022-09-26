import React from "react";
import "./corporate.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Corporate = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="aboutheading">
          <h1>Corporate</h1>
        </div>
        <div className="contactCareer">
          <div>
            <a
              target="_blank"
              href="https://lovepik.com/images/png-business.html"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/corporate_meet.png`}
                alt="corporate"
                height={600}
              />
            </a>
          </div>
          <div className="ContainerCareer">
            Please contact us for corporate meet!
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Corporate;
