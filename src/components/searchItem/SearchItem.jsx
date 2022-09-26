import './searchItem.css';

const SearchItem = () => {
  return (
    <div className="searchListResult">
    <div className='searchItem'>
        <img src="https://www.giorgettimeda.com/media/immagini/6246_z_Delhi_Penthouse_00.jpg" alt="" className="siImg" />
       <div className="siDesc">
        <div className="siHeader">
        <h1 className="siTitle">Giorgetti PentHouse</h1>
        <span className="siCity">New Delhi</span>
        </div>
        <span className="siDistance">200m from Houz khas Metro Station</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Fully furnished 5000 sq.ft. area</span>
        <span className="siFeatures">Fully Airconditioned 5bhk with swimming pool and personal theater</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel within 1 hr of check-in, so lock-in this great price today!
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
            <span className="siComment">
                Excellent
            </span>
            <button>9.2</button>
        </div>
        <div className="siDetailText">
        <span className='siM'>For Members</span>
            <span
            className="siPriceOffer">
                Rs.458 /day 
            </span>
            <span className="siPriceActual">
                Rs.4000 /day 
            </span>
            <span className="siTaxOp">
                Including GST 
            </span>
            <button className='siCheckButton'>See Availability</button>
        </div>
       </div>
    </div>
    <div className='searchItem'>
        <img src="https://image.wedmegood.com/resized/800X/uploads/member/1342470/1641542088_Screenshot_from_2022_01_07_13_22_25.png" alt="" className="siImg" />
       <div className="siDesc">
        <div className="siHeader">
        <h1 className="siTitle">Hilton Resort</h1>
        <span className="siCity">Goa</span>
        </div>
        <span className="siDistance">3km from Intnl. Airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Covered across 30 acre area</span>
        <span className="siFeatures">Amusement Park with Golf court</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel within 1/2 hr of check-in, so lock-in this great price today!
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
            <span className="siComment">
                Very Good
            </span>
            <button>8.9</button>
        </div>
        <div className="siDetailText">
        <span className='siM'>For Members</span>
            <span
            className="siPriceOffer">
                Rs.458 /day 
            </span>
            <span className="siPriceActual">
                Rs.4000 /day 
            </span>
            <span className="siTaxOp">
                Including GST 
            </span>
            <button className='siCheckButton'>See Availability</button>
        </div>
       </div>
    </div>
    <div className='searchItem'>
        <img src="https://cdnassets.hw.net/c8/80/3c8d235044798327029f5159abbc/afbd1cf55fab4763a7e3d1c3786819d6.jpg" alt="" className="siImg" />
       <div className="siDesc">
        <div className="siHeader">
        <h1 className="siTitle">Southwind Clubhouse</h1>
        <span className="siCity">Kolkata</span>
        </div>
        <span className="siDistance">4km from NSCB Intl. Airport, 500m from Howraw bridge</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Well Furnished 5000 sqft area</span>
        <span className="siFeatures">Including house theater and free bar pass</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel within 1/2 hr of check-in, so lock-in this great price today!
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
            <span className="siComment">
                Very Good
            </span>
            <button>8.5</button>
        </div>
        <div className="siDetailText">
        <span className='siM'>For Members</span>
            <span
            className="siPriceOffer">
                Rs.343 /day 
            </span>
            <span className="siPriceActual">
                Rs.3000 /day 
            </span>
            <span className="siTaxOp">
                Including GST 
            </span>
            <button className='siCheckButton'>See Availability</button>
        </div>
       </div>
    </div>
    <div className='searchItem'>
        <img src="https://sayajihotels.com/images/innerBanner/sayaji-indore-overview/banner1.jpg" alt="" className="siImg" />
       <div className="siDesc">
        <div className="siHeader">
        <h1 className="siTitle">Hotel Sayaji</h1>
        <span className="siCity">Indore</span>
        </div>
        <span className="siDistance">5km from Indore Jn, 3km from DABH Intl Airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">5 star hotel covering 2000 sqft per 3bhk room area</span>
        <span className="siFeatures">Luxurious housekeeping free food free spa</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">
            You can cancel within 1/2 hr of check-in, so lock-in this great price today!
        </span>
       </div>
       <div className="siDetails">
        <div className="siRating">
            <span className="siComment">
                Excellent
            </span>
            <button>9.1</button>
        </div>
        <div className="siDetailText">
            <span className='siM'>For Members</span>
            <span
            className="siPriceOffer">
                Rs.572 /day 
            </span>
            <span
            className="siPriceActual">
                Rs.5000 /day 
            </span>
            <span className="siTaxOp">
                Including GST 
            </span>
            <button className='siCheckButton'>See Availability</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default SearchItem