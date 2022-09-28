import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {db} from '../../firebase-config.js';
import {toast} from 'react-toastify';
import {collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import Navbar from '../../components/navbar/Navbar';
import ListingItem from '../listingitem/ListingItem';

const Test = () => {
  
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  //fetch listing
  useEffect(() => {
    const fetchlisting = async () => {
      try {
        
        //reference
        const listingsRef = collection(db, "products");

        //query
        const q =  query(
          listingsRef,
         // where('product_type', '==', 'books'),
          orderBy('original_price', "asc"),
          limit(3)
        );

        //query execution --> we get snapshot in firebase
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
         //push data to empty array listings
         return listings.push({
          id: doc.id,
          data: doc.data()
         });         
        });

        setListing(listings);
        setLoading(false);
      //  toast.success('success!');
      } catch (error) {
        toast.error('Unable to fetch data!');
      }
    }

    //call function
    fetchlisting();
  },
   []);

  return (
    <div>
      <Navbar/>
      {
         loading ? 
           (  
        listing && listing.length > 0 
        ? (<>
            <div>
              {
                listing.map((list) => (
                <ListingItem listing={list.data} id= {list.id} key={list.id}/>
              
                ))
              }
            </div>
        </>) 
        : <p>no listings here</p> ) : <p>hi</p>
      }
    </div>
  )
}

export default Test