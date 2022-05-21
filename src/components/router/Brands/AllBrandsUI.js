import React from "react";

const AllBrandsUI = (props) => {
  return (
    <div>
      <div className=" brand_item_div">
        <img
          className="brand_item_img"
          src={props.brandItemImg}
          alt="brand-ig"
        />
      </div>
    </div>
  );
};

export default AllBrandsUI;
