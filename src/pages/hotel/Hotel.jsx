import './hotel.css';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener, faBed, faBicycle, faBowlFood, faCab, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faGlassWhiskey, faLocationDot, faShower, faSwimmingPool, faTelevision, faWifi3 } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {src:"https://ak-d.tripcdn.com/images/0222h120008jn3i5n299C_Z_1100_824_R5_Q70_D.jpg"},
    {src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/ff/bf/42/hotel-gt-star-raipur.jpg?w=600&h=-1&s=1"},
    {src:"https://cdn0.weddingwire.in/vendor/7905/3_2/960/jpg/12509393-250188405313508-3802125599361980612-n_15_147905_v1.jpeg"},
    {src:"https://r1imghtlak.mmtcdn.com/95ee39383bed11e992c70242ac110002.jpg"},
  ]

const handleOpen = (index) => {
  setSlideNumber(index);
  setOpen(true);
}

const handleMove = (direction) => {
  let newSlideNumber;

  if(direction === 'l'){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1 ;
  } else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1 ;
  }

  setSlideNumber(newSlideNumber);
}

  return (
    <div>
      <Navbar/>
      <Header type= "list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
        <FontAwesomeIcon icon ={faCircleXmark } className="close" onClick={() => setOpen(false)} />
        <FontAwesomeIcon icon ={faCircleArrowLeft } className="arrow" onClick={() => handleMove("l")} />
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon ={faCircleArrowRight } className="arrow" onClick={() => handleMove("r")} />
          </div>}
        <div className="hotelWrapper">
          <div className="hotelUpper">
            <div className="hotelUpperLeft">
          <h1 className="hotelTitle">Grand Imperia Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon ={faLocationDot} />
            <span>VIP Road, Vishal Nagar, Raipur 492006</span>
          </div>
          <span className="hotelDistance">
            7km from SV Intl Airport, 8km from Raipur Jn
          </span>
          <span className="hotelPriceHighlight">
            Book now to get free taxi to airport
          </span>
          <span className='siMN'>For Members</span>
            <span
            className="siPriceOffer">
                Rs. 572 /day 
            </span>
            <span
            className="siPriceActual">
                Rs. 5000 /day 
            </span>
            </div>
            <div className="hotelUpperRight">
              <div className="hotelDetailsText">
                <h3 className="hoteltitle">
                  Stay in the porsche area of the city
                </h3>
                <p className="hotelDesc">
                Featuring contemporary rooms, a modern fitness centre and a multi-cuisine restaurant, Hotel Grand Imperia extends a comfortable stay experience in Raipur.
Start your day with an intense workout session at the on-site fitness centre with modern gym equipment.
Get easy connectivity as the hotel is within 8 km from both Swami Vivekananda Airport and Raipur Railway Station.
Enjoy a comfortable stay as the hotel offers babysitting services and various children's activities to keep them engaged. 
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h3>Perfect for 7-night stay</h3>
                <span>
                  this place is of outstanding architecture, and had an Excellent score of 9.1
                </span>
                <button>
                  Reserve or book now!
                </button>
              </div>
            </div>
            </div>
           <div className="divIcons">
       <div className='iconName'>  <FontAwesomeIcon icon ={faBed} className='icon'  />
       <span className='iconN' >Bed</span>  </div> 
       <div className='iconName'>  <FontAwesomeIcon icon ={faShower} className='icon' />
       <span className='iconN' >Shower</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faAirFreshener} className='icon' />
       <span className='iconN' >Sanitized</span>  </div> 
       <div className='iconName'>  <FontAwesomeIcon icon ={faWifi3} className='icon' />
       <span className='iconN' >Wi-fi</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faTelevision} className='icon' />
       <span className='iconN' >Television</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faSwimmingPool} className='icon' />
       <span className='iconN' >Pool</span>  </div> 
       <div className='iconName'>    <FontAwesomeIcon icon ={faGlassWhiskey} className='icon'/>
       <span className='iconN' >Juice</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faBowlFood} className='icon'/>
       <span className='iconN' >Food</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faCab} className='icon'/>
       <span className='iconN' >Cab</span>  </div> 
       <div className='iconName'>   <FontAwesomeIcon icon ={faBicycle} className='icon'/>
       <span className='iconN' >tredmill</span>  </div>                   
           </div>
            <div className="hotelImgs">
              {photos.map( (photo, index) => (
                <div className="hotelImgWrapper">
                  <img onClick={() => handleOpen(index)} src={photo.src} alt="" className="hotelIMg" />
                </div>
              )) }
            </div>          
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel