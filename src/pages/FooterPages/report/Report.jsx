import React from "react";
import "./report.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const Report = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="offers">
          <div className="titleFaq">
            <h2>Report Infringement</h2>
          </div>
          <div className="report">
            <div className="reportAbout">
              About: <input type="text" className="reportInpTitle" />
            </div>
            <div className="reportAbout">
              Description:
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="type here..."
              ></textarea>
            </div>
          </div>
          <button className="rButton">Submit</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Report;
