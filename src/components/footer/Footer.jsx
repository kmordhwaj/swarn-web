import "./footer.css";
import { Link } from "react-router-dom";
//import { FaSearchLocation } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fListsL">
        <div className="fLists">
          <ul className="fList">
            <li className="fListItemB">ABOUT</li>
            <Link style={{ textDecoration: "none" }} to="/about">
              <li className="fListItem">Company</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/gallery">
              <li className="fListItem">Gallery</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact-us">
              <li className="fListItem">Contact Us</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/careers">
              <li className="fListItem">Careers</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/corporate">
              <li className="fListItem">Corporate</li>
            </Link>
          </ul>
          <ul className="fList">
            <li className="fListItemB">HELP</li>
            {/* <Link style={{ textDecoration: "none" }} to="/payments">
              <li className="fListItem">Payments</li>
            </Link> */}
            <Link style={{ textDecoration: "none" }} to="/offers">
              <li className="fListItem">Offers</li>
            </Link>
            {/* <Link style={{ textDecoration: "none" }} to="/tenures">
              <li className="fListItem">Tenures</li>
            </Link> */}
            <Link style={{ textDecoration: "none" }} to="/FAQs">
              <li className="fListItem">FAQs</li>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/report-infringement">
              <li className="fListItem">Report Infringement</li>
            </Link>
          </ul>
          <ul className="fList">
            <div>
              <li className="fListItemB">POLICY</li>
              <Link style={{ textDecoration: "none" }} to="/privacy-policy">
                <li className="fListItem">Privacy Policy</li>
              </Link>
            </div>
            <div className="fLisr">
              <li className="fListItemB">HOLIDAYS</li>
              <Link style={{ textDecoration: "none" }} to="/holiday-plans">
                <li className="fListItem">Holiday Plans</li>
              </Link>
            </div>
            {/* <Link style={{ textDecoration: "none" }} to="/security">
              <li className="fListItem">Security</li>
            </Link> */}
          </ul>
        </div>
        <div className="fListsR">
          <ul className="fListR">
            <li className="fListItemB">SOCIAL</li>
            <div className="fListItemRb">
              <a href="https://www.facebook.com/profile.php?id=100085610123136">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      src={`${process.env.PUBLIC_URL}/images/fbook.png`}
                      alt=""
                    />
                    {/* <h3>/swarnholidays</h3> */}
                  </div>
                </li>
              </a>
              <a href="https://www.instagram.com/swarnholidays">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                      alt=""
                    />
                    {/* <h3>/swarnholidays</h3> */}
                  </div>
                </li>
              </a>
              <a href="https://fb.me/mordhwaaz94">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                      alt=""
                    />
                    {/* <h3>/swarnholidays</h3> */}
                  </div>
                </li>
              </a>
              <a href="https://www.linkedin.com/company/swarn-holidays/">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      src={`${process.env.PUBLIC_URL}/images/linkedin-logo.png`}
                      alt=""
                    />
                    {/* <h3>/swarnholidays</h3> */}
                  </div>
                </li>
              </a>
              <a href="https://fb.me/mordhwaaz94">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      src={`${process.env.PUBLIC_URL}/images/youtube.png`}
                      alt=""
                    />
                    {/* <h3>/swarnholidays</h3> */}
                  </div>
                </li>
              </a>
            </div>
          </ul>
          <ul className="fListR">
            <li className="fListItemB">DOWNLOAD APP</li>
            <div className="fListItemRbs">
              <a href="https://fb.me/mordhwaaz94">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      width={100}
                      src={`${process.env.PUBLIC_URL}/images/playstore.png`}
                      alt="play store"
                    />
                  </div>
                </li>
              </a>
              <a href="https://fb.me/mordhwaaz94">
                <li className="fListItem">
                  <div className="fListItemS">
                    <img
                      height={30}
                      width={100}
                      src={`${process.env.PUBLIC_URL}/images/applestore.png`}
                      alt="apple store"
                    />
                  </div>
                </li>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="fText">Copyright © 2022 Swarn Holidays</div>
    </div>
  );
};

export default Footer;
