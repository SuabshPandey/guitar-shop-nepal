import React from "react";
import CommonHome from "../../common/CommonHome/CommonHome";
import allcommonBg from "../commonBg/allCommonBg";
import CommonBgUI from "../commonBg/CommonBgUI";
import { NavLink, Route, Routes } from "react-router-dom";
import "./Events.css";
import EventsUI from "./EventsUI";
import CreateEvent from "./CreateEvent";

const Events = () => {
  const token = localStorage.getItem('key')
  // const {url}
  return (
    <div className="events">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[2].bgImg}
        bgTitle={allcommonBg[2].bg_title}
      />
      <div className="custom_div">
      <CommonHome heading="Join The Event" />
      </div>
      <div className="container p-0">
        <EventsUI />
        <hr className="horizontal_line " />
      </div>
      {!(token)? <><div className="create_event">
        <NavLink to="/login">
          <h2 className="tc">Online Event Registration</h2>
        </NavLink>
      </div></>:
      <><div className="create_event">
        <NavLink to="/create">
          <h2 className="tc create_event_form_title">Online Event Registration</h2>
        </NavLink>
      </div></>}
     
    </div>
  );
};

export default Events;
