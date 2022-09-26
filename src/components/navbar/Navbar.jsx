import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
// import UserAvatar from "react-users-avatar";
import { UserAuth } from "../../context route/AuthContext";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import CircleAvatarNew from "./CircleAvatarNew";
import { db } from "../../firebase-config";
import { toast } from "react-toastify";
import TestCircleAvatar from "./TestCircleAvatar";

const Navbar = () => {
  const { userId, logout } = UserAuth();
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("you are logged out!");
    } catch (err) {
      console.log(err.message);
    }
  };

  const [listing, setListing] = useState(null);
  // const [loading, setLoading] = useState(false);

  //fetch listing
  useEffect(() => {
    const fetchlisting = async () => {
      try {
        //reference
        const listingsRef = collection(db, "users");

        //query
        const q = query(listingsRef, where("id", "==", userId));

        // setLoading(true);

        //query execution --> we get snapshot in firebase
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          //push data to empty array listings
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListing(listings);
        // setLoading(false);
      } catch (error) {
        toast.error("Unable to fetch data!");
      }
    };
    //call function
    fetchlisting();
  }, []);

  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <Link to="/home"> */}
        <img
          style={{ height: 90, width: 160 }}
          src={`${process.env.PUBLIC_URL}/images/newlogo.png`}
          alt="logo"
          className="logo"
        />
        {/* </Link> */}
        <div className="navT">
          <Link to="/home" className="navTs">
            Home
          </Link>
          <Link to="/holiday-plans" className="navTs">
            Holiday Plans
          </Link>
          {/* <Link to="/profile" className="navTs">
            Profile
          </Link> */}
        </div>
        <div className="navItemss">
          <Popup
            trigger={
              <button className="buttoncol">
                {listing && listing.length > 0 ? (
                  <div>
                    {listing.map((list) => (
                      <CircleAvatarNew
                        listing={list.data}
                        id={list.id}
                        key={list.id}
                      />
                    ))}
                  </div>
                ) : (
                  <TestCircleAvatar />
                )}
              </button>
            }
            position="bottom center"
          >
            <div className="popupcontents">
              <list>
                <ul>
                  <span onClick={handleLogout} className="navButton">
                    LogOut
                  </span>
                </ul>
                <ul>
                  <span className="navButton">LogIn</span>
                </ul>
              </list>
            </div>
          </Popup>
          <div className="contactS">
            <a
              style={{ textDecoration: "none" }}
              href="https://wa.me/9713085373"
            >
              <div className="contactSupport">
                <FaWhatsapp />
                <span>+91 9713085373</span>
              </div>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href={`mailto:info@swarnholidays.com?subject=Please Show me best deal&body=check out this video`}
            >
              <div className="contactSupport">
                <FontAwesomeIcon icon={faMessage} />
                <span>info@swarnholidays.com</span>
              </div>
            </a>
            <a style={{ textDecoration: "none" }} href="tel:+917470745373">
              <div className="contactSupport">
                <FaPhoneAlt />
                <span>+91 7470745373</span>
              </div>
            </a>
          </div>
        </div>
        <div className="navMenu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              className="menuButton"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu2Line
              color="#fff"
              size={27}
              className="menuButton"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="menuContainer scale-up-center">
              <div>
                {listing && listing.length > 0 ? (
                  <div>
                    {listing.map((list) => (
                      <CircleAvatarNew
                        listing={list.data}
                        id={list.id}
                        key={list.id}
                      />
                    ))}
                  </div>
                ) : (
                  <TestCircleAvatar />
                )}
              </div>
              <div className="menuContainer-links">
                <Link to="/home" className="navTs">
                  Home
                </Link>
                <Link to="/holiday-plans" className="navTs">
                  Holiday Plans
                </Link>
              </div>
              <div className="menucontainer-contacts">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://wa.me/9713085373"
                >
                  <div className="contactSupportM">
                    <FaWhatsapp />
                    <span>+91 9713085373</span>
                  </div>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href={`mailto:info@swarnholidays.com?subject=Please Show me best deal&body=check out this video`}
                >
                  <div className="contactSupportM">
                    <FontAwesomeIcon icon={faMessage} />
                    <span>info@swarnholidays.com</span>
                  </div>
                </a>
                <a style={{ textDecoration: "none" }} href="tel:+917470745373">
                  <div className="contactSupportM">
                    <FaPhoneAlt />
                    <span>+91 7470745373</span>
                  </div>
                </a>
              </div>
              <div className="menucontainer-profilelogin">
                <span onClick={handleLogout} className="navButton">
                  LogOut
                </span>
                <span className="navButton">Settings</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
