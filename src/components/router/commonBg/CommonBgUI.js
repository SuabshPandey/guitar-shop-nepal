import React from "react";
import './CommonBg.css';

const CommonBgUI = (props) => {
  return (
    <div>
      <div className="container product_bg_container">
        <div className="row ma_tb">
          <div className="col-md-12 container_bg p-0">
            <img className="bg_image" src={props.bgImg} alt="bgbgbgb" />
            <div className="bg_title">
              <h2 className="pa_tb wc">{props.bgTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBgUI;
