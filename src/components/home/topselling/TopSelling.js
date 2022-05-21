import React from "react";
import Slider from "react-slick";
import "./TopSelling.css";
import TopSellingUI from "./TopSellingUI";
import topSellingList from "./TopsellingList";

const TopSelling = () => {
  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {topSellingList.map((pitems) => {


          return (
            <div key = {pitems.id} className="col-md-12 ">
              <TopSellingUI
                key={pitems.id}
                pId = {pitems.id}
                pname={pitems.product_name}
                pprice={pitems.product_price}
                pimage={pitems.imgSrc}
                discount={pitems.discount}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopSelling;
