import React, { useEffect, useState } from "react";
import "./banner.css";
import { db } from "../../firebase-config.js";
import { toast } from "react-toastify";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import BannerCorousal from "./BannerCorousal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  //fetch listing
  useEffect(() => {
    const fetchlisting = async () => {
      try {
        //reference
        const listingsRef = collection(db, "banner");

        //query
        const q = query(listingsRef);

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
        setLoading(false);
      } catch (error) {
        toast.error("Unable to fetch data!");
      }
    };
    //call function
    fetchlisting();
  }, []);

  return (
    <div>
      <div>
        {listing && listing.length > 0 ? (
          <>
            <div>
              <Carousel
                autoPlay="true"
                centerMode="true"
                infiniteLoop="true"
                className="corousel"
                dynamicHeight="true"
                showIndicators="true"
                showThumbs="false"
              >
                {listing.map((list) => (
                  <BannerCorousal
                    listing={list.data}
                    id={list.id}
                    key={list.id}
                  />
                ))}
              </Carousel>
            </div>
          </>
        ) : (
          <p>Banner is loading.....</p>
        )}
      </div>
    </div>
  );
};

export default Banner;
