import React from "react";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import "./Contact.css";
import ContactUI from "./ContactUI";

const Contactus = () => {
  return (
    <div className="contactus">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[4].bgImg}
        bgTitle={allcommonBg[4].bg_title}
      />
      <div className="container">
        <ContactUI />
      </div>
    </div>
  );
};

export default Contactus;
