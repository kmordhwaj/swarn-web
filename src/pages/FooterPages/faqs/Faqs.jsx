import React from "react";
import "./faqs.css";
import Dropdown from "../../../components/dropdown/Dropdown";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const Faqs = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="offers">
          <div className="titleFaq">
            <h2>Frequently Asked Questions</h2>
          </div>
          <Dropdown
            title="Best natural places to visit in Chhattisgarh?"
            desc="Mainpat and Jagdalpur"
          />
          <Dropdown
            title="Best Historical places to visit in Chhattisgarh?"
            desc="'Laxman Mandir, Sirpur' and 'Bhoramdev Mandir, Kabirdham'"
          />
          <Dropdown
            title="Best places to visit for it's sea view?"
            desc="Vizag, Puri, Chennai and Goa"
          />
          {/* <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" />
          <Dropdown title="what is my hometown" desc="bilha" /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;
