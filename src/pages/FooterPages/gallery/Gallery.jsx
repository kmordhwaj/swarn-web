import React, { useEffect, useState } from "react";
import "./gallery.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { db } from "../../../firebase-config";
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
import GalleryCard from "../../../components/gallery/GalleryCard";
import { Grid } from "@mui/material";

const Gallery = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  //fetch listing
  useEffect(() => {
    const fetchlisting = async () => {
      try {
        //reference
        const listingsRef = collection(db, "gallery");

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
    <div className="home">
      <Navbar />
      <div className="homeContainer">
        <div>
          <div className="galleryCon">
            {listing && listing.length > 0 ? (
              <>
                <div>
                  <Grid container spacing={3}>
                    {listing.map((list) => (
                      <GalleryCard
                        listing={list.data}
                        id={list.id}
                        key={list.id}
                      />
                    ))}
                  </Grid>
                </div>
              </>
            ) : (
              <p>Gallery is loading.....</p>
            )}
          </div>
          <div></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
