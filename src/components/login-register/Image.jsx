import "./image.css";

const Image = () => {
  return (
    <div className="img1">
      <img
        src={`${process.env.PUBLIC_URL}/images/newlogo.png`}
        alt="logo"
        className="logo1"
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/Tour.png`}
        alt="logo"
        className="logo2"
      />
    </div>
  );
};

export default Image;
