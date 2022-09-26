import React, { useState } from "react";
import "./dropdown.css";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Dropdown = ({ title, desc }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdowntitle">
        <div> {title}</div>
        <div onClick={() => setClicked(!clicked)}>
          {clicked ? <BsArrowUpCircle color="blue" /> : <BsArrowDownCircle />}
        </div>
      </div>
      {clicked ? <div className="dropdowndesc">{desc}</div> : <div></div>}
    </div>
  );
};

export default Dropdown;
