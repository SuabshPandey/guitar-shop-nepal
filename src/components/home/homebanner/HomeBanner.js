import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <NavLink to="/details">
          <img
            className="event_ad_banner"
            src="/images/Events/ad_guitar.jpg"
            alt="Guitar"
          />
        </NavLink>
      </div>
      <div className="col-md-9">
        <NavLink to="/events">
          <img
            className="event_ad_banner"
            src="/images/Events/event_banner.jpg"
            alt="event"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HomeBanner;
