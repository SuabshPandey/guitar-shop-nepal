import React, { useEffect, useState } from "react";
import baseUrl from "../../home/Constant";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const EventDetail = () => {
  // const location = useLocation();
  // console.log(location);
  const matchedId = useParams();
  console.log(matchedId.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      // .get(`${baseUrl}/event/get`)
      .get(`${baseUrl}/event/get/${matchedId.id}`)
      .then((res) => {
        console.log("Event Matched Data is", res.data.data.events);
        setData(res.data.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="events_detail">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <div className="container-fluid bg_event_detail">
        <div className="container bg_event_detail_container">
          <div className="row">
            <div className="event_detail_title">
              <h1 className="event_heading tc">Event: {data.name}</h1>
            </div>
            <div className="event_img_detail_div">
              <img
                // src="/images/Events/event_banner.jpg"
                src={data.image}
                alt="event_detail_image"
                className="event_detail_img"
              />
            </div>

            <div className="event_description col-lg-6">
              <h1 className="desp_name">All about Event</h1>
              <h2 className="">{data.title}</h2>
              <p className="desp_about">
                {
                  <div
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  ></div>
                }
              </p>
            </div>
            <div className="col-lg-6 event_detail_info">
              <h4 className="event_info">Event Venue: {data.location}</h4>
              <h4 className="event_info">Event Date: {data.date}</h4>
              <h4 className="event_info">Event Time: {data.time}</h4>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
