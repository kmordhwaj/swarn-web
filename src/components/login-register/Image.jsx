import "./image.css";

const Image = () => {
  return (
    <div className="img1">
      <img
        style={{ height: 130, width: 260 }}
        src={`${process.env.PUBLIC_URL}/images/newlogo.png`}
        alt="logo"
        className="logo1"
      />
      <img
        style={{ height: 350, width: 500 }}
        src={`${process.env.PUBLIC_URL}/images/Tour.png`}
        alt="logo"
      />
    </div>
  );
};

export default Image;
