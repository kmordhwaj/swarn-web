import "./register.css";
import React from "react";
import Image from "../../components/login-register/Image";
import Form from "../../components/login-register/Form";
import { Helmet } from "react-helmet";

const Register = ({ title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Register to find best deals on holidays packages."
        />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-register"
        />
      </Helmet>

      <div className="bodyReg">
        <Image />
        <Form />
      </div>
    </>
  );
};

Register.defaultProps = {
  title: "Swarn Holidays | Register",
};

export default Register;
