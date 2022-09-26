import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Delhi</h3>
          <h5>123 locations</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://s3.india.com/travel/wp-content/uploads/2014/09/Mumbai-Gateway-625x470.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Mumbai</h3>
          <h5>173 locations</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Chennai</h3>
          <h5>77 locations</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.holidify.com/images/bgImages/KOLKATA.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Kolkata</h3>
          <h5>88 locations</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Bengaluru</h3>
          <h5>45 locations</h5>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/1/2022_1$largeimg_1999985048.JPG"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h3>Hyderabad</h3>
          <h5>67 locations</h5>
        </div>
      </div>
    </div>
  );
};

export default Featured;
