import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer_ui_container">
      <ul>
        <li className="wc">{props.name}</li>
        <li>{props.ship}</li>
        <li>{props.order}</li>
        <li>{props.contact}</li>
      </ul>
    </div>
  );
};

export default Footer;
