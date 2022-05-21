import React from "react";

const SingleAdUI = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <img className="event_ad_banner" src={props.adImg} alt="ad-imgg" />
      </div>
    </div>
  );
};

export default SingleAdUI;
