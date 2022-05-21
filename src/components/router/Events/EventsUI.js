import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../home/Constant";
import { NavLink } from "react-router-dom";
import LoadingPlaceHolder from "../../home/Loading/LoadingPlaceHolder";

const EventsUI = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      // .get(`${baseUrl}/event/get`)
      .get(`${baseUrl}/event/get`)
      .then((res) => {
        console.log("Event Data are", res.data.data.events);
        setData(res.data.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [loaded, setLoaded] = useState(false);
  let imageLoadNum = 0;

  const stuffLoaded = () => {
    imageLoadNum++;
    if (imageLoadNum < 2) return;
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-8 p-0">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="event_bg_div">
                  {data[0] === undefined ? (
                    <></>
                  ) : (
                    <NavLink to={`/eventdetail/${data[0].id}`}>

                      <img
                        className="event_bg_img"
                        src={data[0].image} onLoad={stuffLoaded}
                        alt=""
                      />
                    </NavLink>
                  )}
                  <div className="event_body">
                    <h1 className="event_name">Event Name</h1>
                    <h1 className="event_title">Event Title</h1>
                    <p className="event_date">Date</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="event_div ma_tb">
                  {data[1] === undefined ? (
                    <div></div>
                  ) : (
                    <NavLink to={`/eventdetail/${data[1].id}`}>
                      <img src={data[1].image} alt="" className="event_img" onLoad={stuffLoaded} />
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event_div ma_tb">
                  {data[2] === undefined ? (
                    <div></div>
                  ) : (
                    <NavLink to={`/eventdetail/${data[2].id}`}>

                      <img src={data[2].image} alt="" className="event_img" onLoad={stuffLoaded} />
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="event_div custom_event_div">
            {/* <img
                src="/images/Events/event_banner.jpg"
                alt=""
                className="event_img"
              /> */}
              <h1>Other Events</h1>
            {data.map((event) => {
              return (
                <NavLink to={`/eventdetail/${event.id}`}>
                  <div key={event.id}>
                    <li className="list-group-item">{event.name}</li>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsUI;
