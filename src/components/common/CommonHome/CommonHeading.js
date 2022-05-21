import React from "react";
import "./CommonHome.css";

const CommonHeading = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="heading_top">
            <h2 className="wc">{props.heading}</h2>
          </div>
        </div>
        {/* <div className="col-md-9">
          <hr className="horizontal_line_full wc ma_tb" />
        </div> */}
      </div>
    </div>
  );
};

export default CommonHeading;
