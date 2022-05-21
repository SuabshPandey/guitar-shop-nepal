import React from "react";
import "./CommonHome.css";

const CommonHome = (props) => {
  return (
    <div className= "container">
      <div className="row top_selling ">
        {/* <div className="col-md-5 horizontal_line_head d-none d-lg-block">
          <hr className="horizontal_line" />
        </div> */}
        <div className="col-md-12 ">
          <h2>{props.heading}</h2>
        </div>
        {/* <div className="col-md-5 horizontal_line_head d-none d-lg-block">
          <hr className="horizontal_line" />
        </div> */}
      </div>
    </div>
  );
};

export default CommonHome;
