import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faCalendarDays,
  faCarriageBaby,
  faHotel,
  faPerson,
  faTaxi,
  faTree,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/* <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faTree }/>
            <span>Green</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed}/>
            <span>Bed</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHotel}/>
            <span>Hotel</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBath}/>
            <span>Bath</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Taxi</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faWifi}/>
            <span>Wifi</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCarriageBaby}/>
            <span>Baby</span>
            </div>
            </div> */}
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">
              let's explore from under the hood and save 85-95% per deal
            </h1>
            <p className="headerDescription">
              Get ready to move to a place full of majestic architecture with
              well planned trip.
            </p>
            <Popup
              trigger={<button className="headerBtn">Get the Deal</button>}
              position="bottom center"
            >
              <div className="popupcontentsh">
                <a href="https://wa.me/9713085373">
                  <FaWhatsapp />
                </a>

                <a
                  href={`mailto:info@swarnholidays.com?subject=Please Show me best deal&body=check out this video`}
                >
                  <FontAwesomeIcon icon={faMessage} />
                </a>

                <a href="tel:+917470745373">
                  <FaPhoneAlt />
                </a>
              </div>
            </Popup>
            {/* <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where do you want to visit?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}{" "}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult  ${options.children} children  ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionContainer">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButten"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButten"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionContainer">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButten"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButten"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionContainer">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButten"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButten"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerButton" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
