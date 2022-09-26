import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./plans.css";
import background from "../../../assets/download.jpg";
import silver from "../../../assets/silver.jpg";
import golden from "../../../assets/golden.jpg";
import diamond from "../../../assets/diamond.jpg";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="memberShip">
          <Link className="link" to="/holiday-plans/weekend-gateways">
            <article
              className="articleh"
              style={{ backgroundImage: `url(${background})` }}
            >
              <h3 className="headerS">Weekend Gateways</h3>
            </article>
          </Link>
          <Link className="link" to="/holiday-plans/lions-club">
            <article
              className="articleh"
              style={{ backgroundImage: `url(${diamond})` }}
            >
              <h3 className="headerS">Lion's Club</h3>
            </article>
          </Link>
          <Link className="link" to="/holiday-plans/panthers-club">
            <article
              className="articleh"
              style={{ backgroundImage: `url(${golden})` }}
            >
              <h3 className="headerS">Panther's Club</h3>
            </article>
          </Link>
          <Link className="link" to="/holiday-plans/long-holidays">
            <article
              className="articleh"
              style={{ backgroundImage: `url(${silver})` }}
            >
              <h3 className="headerS">Long Holidays</h3>
            </article>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Plans;
