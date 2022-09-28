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
          src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ8ZNg-B-wKQ7hm2pID7S4ylFKG37cl-gIFPgmrgZ679jH4xmjpRia-t3ldtEu10GzT"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Palolem beach</span>
        <span className="fpCity">Goa</span>
        {/* <span className="fpPrice">Rs 458 per day</span> */}
        <div className="fpRating">
          <button className="rating">8.9</button>
          <span className="comment">Very Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.planetware.com/wpimages/2019/08/india-mumbai-top-attractions-bandra-worli-sea-link.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Bandra Sea-link</span>
        <span className="fpCity">Mumbai</span>
        {/* <span className="fpPrice">Rs 343 per day</span> */}
        <div className="fpRating">
          <button className="rating">7.8</button>
          <span className="comment">Good</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.thelalit.com/wp-content/uploads/2017/01/City-Attraction1-New-Delhi-e1493635162496-760-320.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Lotus Temple</span>
        <span className="fpCity">Delhi</span>
        {/* <span className="fpPrice">Rs 458 per day</span> */}
        <div className="fpRating">
          <button className="rating">9.2</button>
          <span className="comment">Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Victoria-Memorial-Sound-and-Light-Show.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Victoria Memorial</span>
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
