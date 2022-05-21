import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingPlaceHolder from "../Loading/LoadingPlaceHolder";


const ShopBrandsUI = (props) => {
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
    <div>
      <div className="text-center shop_brand_items">
        <div className="img_container">
          <NavLink to="/brands">

            <img className="custom_brand_img" src={props.brandImage} alt="img1" onLoad={stuffLoaded} />
          </NavLink>
        </div>
        <div className="card-body text-dark">
          <p className="card-title custom_card_title ">{props.name}</p>
          <p className="card-title custom_card_title ">{props.pprice}</p>
        </div>
      </div>
    </div>
  );
};

export default ShopBrandsUI;
