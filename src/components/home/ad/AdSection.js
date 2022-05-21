import React from "react";
import multipleAd from "./AdSectionList";
import AdSectionUI from "./AdSectionUI";
import "./AdSection.css";
const AdSection = () => {
  return (
    <div className="row">
      {multipleAd.map((madItems) => {
        return (
          <div key={madItems.id} className="col-md-4">
            <AdSectionUI key={madItems.id} adImgSrc={madItems.adImgSrc} />
          </div>
        );
      })}
    </div>
  );
};

export default AdSection;
