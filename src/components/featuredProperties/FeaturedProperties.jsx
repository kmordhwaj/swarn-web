import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://bangalore247.in/wp-content/uploads/2021/03/Mysore-Palace.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Mysore palace</span>
        <span className="fpCity">Mysore</span>
        {/* <span className="fpPrice">Rs 1372 per day</span> */}
        <div className="fpRating">
          <button className="rating">9.7</button>
          <span className="comment">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://image.wedmegood.com/resized/800X/uploads/member/1342470/1641542088_Screenshot_from_2022_01_07_13_22_25.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Resort</span>
        <span className="fpCity">Goa</span>
        {/* <span className="fpPrice">Rs 458 per day</span> */}
        <div className="fpRating">
          <button className="rating">8.9</button>
          <span className="comment">Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdn0.weddingwire.in/vendor/1140/3_2/960/jpeg/6152f0ba-ec13-4a68-9222-3b6a5da5ce24_15_71140-162185968397671.jpeg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Shubham Villa</span>
        <span className="fpCity">Mumbai</span>
        {/* <span className="fpPrice">Rs 343 per day</span> */}
        <div className="fpRating">
          <button className="rating">7.8</button>
          <span className="comment">Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.giorgettimeda.com/media/immagini/6246_z_Delhi_Penthouse_00.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Georgetti penthouse</span>
        <span className="fpCity">Delhi</span>
        {/* <span className="fpPrice">Rs 458 per day</span> */}
        <div className="fpRating">
          <button className="rating">9.2</button>
          <span className="comment">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cdnassets.hw.net/c8/80/3c8d235044798327029f5159abbc/afbd1cf55fab4763a7e3d1c3786819d6.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Southwind clubhouse</span>
        <span className="fpCity">Kolkata</span>
        {/* <span className="fpPrice">Rs 343 per day</span> */}
        <div className="fpRating">
          <button className="rating">8.5</button>
          <span className="comment">Very good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
