import React from "react";
import Loader from "react-js-loader";

const OurStoreUI = (props) => {
  return (
    <div className="container">
      <div className="card store_card_div">
        <div className="card_img_div">
          <a href={props.location} target="_blank">
            <img src="/images/location.png" alt="" className="store_img"  />
          </a>
        </div>
        <div className="store_title">
          <h5>{props.locationName}</h5>
          <hr />
        </div>
        <div className="store_details">
          <p>Phone:{props.phone}</p>
          <p>Email:{props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default OurStoreUI;
