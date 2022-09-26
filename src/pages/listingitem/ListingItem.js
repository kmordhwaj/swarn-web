import React from 'react';
import { Link } from 'react-router-dom';


const ListingItem = ({listing, id}) => {
  return (
    <>
    <div className='card' >
      <Link to={`/category/${listing.product_type}/${id}`}>
        <div className='row container'>
          <div className='col-md-5'>
            <img src={listing.images[0]} alt={listing.product_type} height={400}/>
          </div>
          <p>col2</p>
        </div>
        </Link>
    </div>
    </>
  )
}

export default ListingItem