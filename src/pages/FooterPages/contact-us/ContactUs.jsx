import React from "react";
import "./contactus.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";

const ContactUs = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div className="aboutheading">
          <h1>Our Contacts</h1>
        </div>
        <div className="contact">
          <div className="aboutpara">
            <h3>Address</h3>
            Shaswat Nagar
            <br />
            RDA Colony Road
            <br />
            Boriya Khurd
            <br />
            Raipur
            <br />
            Chhattisgarh, India
            <br />
            492001
            <br />
            <br />
            <h3>Phone</h3>
            +91 9713085373
            <br />
            <br />
            <h3>Mail</h3>
            info@swarnholidays.com
          </div>
          <div className="contactimg3">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Shaswat+Nagar,+Boriyakhurd/@21.2075191,81.565826,13z/data=!4m9!1m2!2m1!1sshashwat+nagar+boriya!3m5!1s0x3a28dd3c8a4360d7:0xdc9476fa006af408!8m2!3d21.1957969!4d81.6429115!15sChVzaGFzaHdhdCBuYWdhciBib3JpeWGSAQ9ob3VzaW5nX3NvY2lldHk"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/address.png`}
                // alt=""
                // // height={400}
                // // width={400}
              />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
