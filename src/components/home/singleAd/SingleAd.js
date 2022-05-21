import React from "react";
import ad from "./SingleAdList";
import SingleAdUI from "./SingleAdUI";
import "./SingleAd.css";

const SingleAd = () => {
  return (
    <div className="mb-5">
      {ad.map((items) => {
        return <SingleAdUI key={items.id} adImg={items.imgSrc} />;
      })}
    </div>
  );
};

export default SingleAd;
