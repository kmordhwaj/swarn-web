import "./loginFirst.css";
import Image from "../../components/login-register/Image";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LoginFirst = ({ title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="UnAuthenticated ones are not allowed to find best deals on holidays packages with us."
        />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-login-first"
        />
      </Helmet>

      <div className="bodyReg">
        <Image />
        <div className="rightBody">
          <span className="alreadylf">
            Sorry! You are Not Authenticated for access. Please Login First!{" "}
          </span>
          <div className="lfrbody">
            <Link to="/">
              <button className="loginfaccount">Login</button>
            </Link>
            <Link to="/register">
              <button className="loginfaccount">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

LoginFirst.defaultProps = {
  title: "Swarn Holidays | Login-First",
};

export default LoginFirst;
