import React from "react";
import "./gallerycard.css";
import { Link } from "react-router-dom";
import Star from "../star/Star";

const GalleryCard = ({ listing, id }) => {
  return (
    <Link className="gallerylink" to={`/gallery/${id}`}>
      <div className="gallerycard" key={id}>
        <h3 className="legendg">{listing.name}</h3>
        <br />
        <img src={listing.img} />
        <br />
        {(() => {
          if (listing.rating === 9)
            return (
              <div className="stardirection">
                <Star />
                <Star />
                <Star />
              </div>
            );
          if (listing.rating === 8)
            return (
              <span>
                <div className="stardirection">
                  <Star />
                  <Star />
                </div>
              </span>
            );
          else 
          return (
            <div className="stardirection">
              <Star />
            </div>
          );
        })()}

        
        <p className="legend">{listing.comment}</p>
      </div>
    </Link>
  );
};

export default GalleryCard;
