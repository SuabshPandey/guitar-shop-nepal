import React from "react";
import CommonHeading from "../common/CommonHome/CommonHeading";
import CommonHome from "../common/CommonHome/CommonHome";
import More from "../common/CommonHome/More";
import AdSection from "./ad/AdSection";
import HomeCarousel from "./carousel/HomeCarousel";
import CategroyList from "./categoryList/CategroyList";
import "./Home.css";
import HomeBanner from "./homebanner/HomeBanner";
import Homeblog from "./homeBlog/Homeblog";
import HomeDrums from "./homedrums/HomeDrums";
import HomeGuitar from "./homeguitar/HomeGuitar";
import HomeUkelele from "./homeukelele/HomeUkelele";
import ShopBrands from "./shopbrands/ShopBrands";
import ShopInstrument from "./shopinstrument/ShopInstrument";
import SingleAd from "./singleAd/SingleAd";
import TopSelling from "./topselling/TopSelling";

const Home = () => {
  return (
    <div className="home">
      <div className="main_banner"></div>

      <div className="container ">
        {/* Home Carousel and Category List Section */}
        <div className="category_banner ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-12 home_categorylist">
                <CategroyList />
              </div>
              <div className="col-lg-9 col-md-12 home_carousel_list">
                <HomeCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Selling section Starts */}
      {/* Top Selling Heading */}
      <div className="container bg_selling">
        <div className="line">
          <CommonHome heading="Top Selling" />
        </div>

        {/* Top Selling Products */}

        <div className="container ">
          <TopSelling />
        </div>
        {/* <hr className="ma_tb hr_lines" /> */}
      </div>

      {/* Shop By brands section */}

      <div className="container-fluid bg_shop_brands">
        <div className="container ">
          <div className="brands_shop_div">
            <div className="line ">
              <CommonHeading heading="Shop By Brands" />
            </div>
            <ShopBrands />
            <More link="brands" title="Explore Brands" />
          </div>
        </div>
      </div>

      {/* Shop By Instruments Section */}

      <div className="container bg_instrument">
        <div className="row top_selling ">
          <div className="col-md-12 ">
            <h2>Shop By Categories</h2>
          </div>
        </div>
        <div className="instrument_div">
          <ShopInstrument />
        </div>
      </div>

      {/* Home Banner section started from here */}
      <div className="container bg_home_banner">
        <HomeBanner />
      </div>

      {/* Home Guitar Sections */}
      <div className="bg_home_guitar">
        <div className="container">
          <HomeGuitar />
          <More link="products" title="Explore More" />
        </div>
      </div>

      {/* Home Drums Sections */}
      <div className="container-fluid bg_home_drums">
        <HomeDrums />
        <div className="container">
          <More link="products" title="Explore More" />
        </div>
      </div>

      {/* Home Ukelele Sections */}

      <div className="container-fluid bg_home_ukulele">
        <HomeUkelele />
        <div className="container">
          <More link="products" title="Explore More" />
        </div>
      </div>

      {/* Home Blogs Sections */}
      <div className="bg_home_blog">
        <div className="container ">
          <Homeblog />
          <More link="blogs" title="Read More Blogs" />
        </div>
      </div>
      {/* Ad Sections */}

      {/* <div className="container bg_home_ad">
        <SingleAd />
        <AdSection />
      </div> */}
    </div>
  );
};

export default Home;
