import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import baseUrl from "../Constant";
import guitarList from "./HomeGuitarList";
import axios from "axios";
import "./HomeGuitar.css";
import HomeBrandItemsUI from "../../common/CommonHome/HomeBrandItemsUI";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
// import HomeGuitarUI from "./HomeGuitarUI";

const HomeGuitar = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [data, setData] = useState([]);
  const params = useParams();
  // const matchedId = params.id
  // console.log("Home Guitar Params",data[0].id);

  useEffect(() => {
    axios
      .get(`${baseUrl}/category/get`)
      .then((res) => {
        setCategoryData(res.data.data.categories[0]);
        const responseId = res.data.data.categories[0].id;

        axios
          .get(`${baseUrl}/instrument/getByCategory/${responseId}`)
          .then((res) => {
            setData(res.data.data.instruments);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    margin: 20,
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
    <div className="container-fluid brand_bg_guitar">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 mb-5">
            <div className="heading_top">
              <h2 className="wc">{categoryData.name}</h2>
            </div>
          </div>
          <Slider {...settings}>
            {data?.map((guitarItems) => {
              {
                /* console.log("ma items",guitarItems.images[0].image) */
              }
              return (
                <div>
                  <NavLink to={`/productdetails/${guitarItems.id}`}>
                    <HomeBrandItemsUI
                      key={guitarItems.id}
                      pId={guitarItems.id}
                      name={guitarItems.name}
                      pprice={guitarItems.price}
                      dprice = {guitarItems.discount}
                      brandImg={guitarItems.images}
                    />
                  </NavLink>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeGuitar;
