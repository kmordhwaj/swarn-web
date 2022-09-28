import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertylist/PropertyList";
import "./home.css";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Banner />
        <h1 className="homeTitle">Browse by cities</h1>
        <Featured />
        {/* <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList /> */}
        <h1 className="homeTitle">Property visitors loved</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
