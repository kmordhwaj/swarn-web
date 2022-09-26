import React, { useEffect, useState } from "react";
import "./mailList.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
// import { toast } from "react-toastify";
import { UserAuth } from "../../context route/AuthContext";

const MailList = () => {
  const [email, setEmail] = useState("");
  const { userId } = UserAuth();

  const onSubmit = async () => {
    try {
      console.log(userId);
      console.log(email);
      await addDoc(collection(db, "queries"), {
        name: "Tokyo",
        country: "Japan",
      });
    } catch (error) {
      console.log(error);
    }
    onSubmit();
  };

  return (
    <div className="mail">
      <h1 className="mailTitle">One stop for all the amusements!</h1>
      <span className="mailDesc">
        Subscribe and we will send best deals to you
      </span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onSubmit={onSubmit}>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
