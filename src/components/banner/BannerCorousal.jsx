import React from "react";
import { Link } from "react-router-dom";

const BannerCorousal = ({ listing, id }) => {
  return (
    <Link to={`/banner/${id}`}>
      <div className="cimg" key={id}>
        <img src={listing.img} />
        <p className="legend">{listing.name}</p>
      </div>
    </Link>
  );
};

export default BannerCorousal;
