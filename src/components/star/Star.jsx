import React from "react";
import "./star.css";

const Star = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/star.png`}
        alt=""
        height="25px"
        width="25px"
      />
    </div>
  );
};

export default Star;
