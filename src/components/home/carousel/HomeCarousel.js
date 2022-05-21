import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";
import axios from "axios";
import Loader from "react-js-loader";
import baseUrl from "../Constant";
import { NavLink } from "react-router-dom";
import LoadingPlaceHolder from "../Loading/LoadingPlaceHolder";

const HomeCarousel = () => {
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

  useEffect(() => {
    axios
      .get(`${baseUrl}/carousel/get`)
      .then((res) => {
        setData(res.data.data.carousels);
        console.log("Carousel Data are",res.data.data.carousels)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home_carousel_div">
      <Carousel>
        {data?.map((item) => {
          return (
            <Carousel.Item interval={2000}>
              <div className="carousel_img">
              {!loaded &&  <a href={item.link} target="_blank"><LoadingPlaceHolder 
              
              
              
              extraStyles={{width: '100%', height: '100%'}} /> </a> }
                <a href={item.link} target="_blank">
                  <img
                    className="d-block w-100 "
                    src={item.image_path} onLoad={stuffLoaded}
                    alt="First slide"
                  />
                </a>
              </div>
              <Carousel.Caption className="carousel_items">
                <h1>Limited Edition</h1>
                <NavLink to="/products">
                  <button className="btn btn-sm carousel_btn">
                    Buy Now
                  </button>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
