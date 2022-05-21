import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingPlaceHolder from "../Loading/LoadingPlaceHolder";

const ShopInstrumentUI = (props) => {


  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
    let imageLoadNum = 0;

    const stuffLoaded = () => {
        imageLoadNum++;
        if(imageLoadNum < 2) return;
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    };



  return (
    <div className="instrument_card">
      <div className="img_container">
          <img
            className="custom_instrument_img"
            src={props.instrumentImg} onLoad={stuffLoaded}
            alt="img1"
          />
      </div>
      <div className="card-body custom_instrument_body text-dark">
        <h5 className="card-title instrument_title ">{props.instrumentName}</h5>

        <p>
          More &nbsp;
          <NavLink to="/products">
            <img
              className="icon_more_instrument wb"
              src="/images/iconsblack.png"
              alt="Icon"
            />
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ShopInstrumentUI;
