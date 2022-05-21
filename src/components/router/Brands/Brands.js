import React from "react";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import "./Brands.css";
import allBrands from "./allbrands";
import CommonHome from "../../common/CommonHome/CommonHome";
import AllBrandsUI from "./AllBrandsUI";
import Filter from "../Products/Filter";
import brandProductList from "./BrandsList";
import ShopBrandsUI from "../../home/shopbrands/ShopBrandsUI";

const Brands = () => {
  return (
    <div className="brands">
      <div className="main_banner"></div>
      {/* <div className="page-gap"></div> */}
      <CommonBgUI
        bgImg={allcommonBg[1].bgImg}
        bgTitle={allcommonBg[1].bg_title}
      />

      <div className="bg_brands_div">
        <CommonHome heading="Featured Brands" />

        <div className="all_brands_div container">
          <div className="row">
            {allBrands?.map((items) => {
              return (
                <div className="col-lg-3">
                  <AllBrandsUI key={items.id} brandItemImg={items.brandImg} />
                </div>
              );
            })}
          </div>
          <hr className="ma_tb" />
        </div>

        <div className="bg_product_container">
          <CommonHome heading="Featured Brands Products" />

          <Filter />
          <div className="container">
            <div className="row">
              {brandProductList?.map((items) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <ShopBrandsUI
                      key={items.id}
                      brandImage={items.brandItemImg}
                    />
                  </div>
                );
              })}
              <hr className="ma_tb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
