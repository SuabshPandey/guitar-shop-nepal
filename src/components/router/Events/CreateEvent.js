import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../../home/Constant";
import "./CreateEvents.css";

const CreateEvent = () => {
  const time = new Date();

  console.log(time.getUTCMinutes());

  const [eventData, setEventData] = useState({
    event_name: "",
    title: "",
    date: "",
    time: "",
    description: "",
  });
  const [images, setImages] = useState([]);

  const token = localStorage.getItem("key");
  const create_button = document.getElementById("createe");
  var apiCalling = false;
  const handleInputs = (e) => {
    e.persist();
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setImages({ image: e.target.files[0] });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    console.log(e.name);
    if (!apiCalling) {
      console.log("Api Calling");
      apiCalling = true;
    } else {
      console.log("Api is not calling");
      return;
    }
    const today = new Date().toISOString().slice(0, 10);
    console.log(today);

    if (
      eventData.event_name === "" ||
      eventData.title === "" ||
      eventData.description === ""
    ) {
      alert("Please Enter all the details");
    } else if (eventData.date < today) {
      alert("Please enter the upcoming date");
    } else {
      const formData = new FormData();
      formData.append("image", images.image);
      formData.append("event_name", eventData.event_name);
      formData.append("title", eventData.title);
      formData.append("date", eventData.date);
      formData.append("description", eventData.description);
      formData.append("time", eventData.time);

      create_button.disabled = true;

      axios
        .post(`${baseUrl}/event/save`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log(res);
          apiCalling = false;
          console.log(time.getTime());
          if (res.status === 200) {
            alert(res.data.message);
            setEventData({
              event_name: "",
              title: "",
              date: "",
              time: "",
              description: "",
            });
          } else {
            alert("Please Login First");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      create_button.disabled = false;
    }
  };

  return (
    <div className="events">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <h1 className="tc create_event_title">Event Registration Form</h1>
      <div className="container">
        <div className="create_event_main_div">
          <form onSubmit={submitProduct} encType="multipart/form-data">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_name">
                    Event Name <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style"
                    type="text"
                    id="e_name"
                    name="event_name"
                    onChange={handleInputs}
                    value={eventData.event_name}
                    placeholder="Event Name"
                    required
                  />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_title">
                    Event Title <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style"
                    type="text"
                    name="title"
                    id="e_title"
                    onChange={handleInputs}
                    value={eventData.title}
                    placeholder="Event Title"
                    required
                  />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_date">
                    Event Date <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style "
                    type="date"
                    name="date"
                    id="e_date"
                    onChange={handleInputs}
                    value={eventData.date}
                    placeholder="Event Date"
                    required
                  />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_time">
                    Event Time <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style"
                    type="time"
                    id="e_time"
                    name="time"
                    onChange={handleInputs}
                    value={eventData.time}
                    placeholder="Event Time"
                    required
                  />
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_description">
                    Event Description <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style"
                    type="text"
                    name="description"
                    onChange={handleInputs}
                    value={eventData.description}
                    placeholder="Event Description"
                    required
                  />
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                  <label className="event_label" htmlFor="e_banner">
                    Event Banner <sup className="e_required">*</sup>
                  </label>
                  <input
                    className="form-control custom_form_input_style"
                    id="e_banner"
                    type="file"
                    onChange={handleImage}
                    name="image"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="create_event_img_div">
                  <img
                    src="/images/Events/event_create.jpg"
                    alt="guitar_logo"
                    className="create_event_img"
                  />
                </div>
              </div>
            </div>
            <div className="custom_form_btn_div tc">
              <button
                id="createe"
                type="submit"
                className="tc custom_form_btn_div  btn btn-outline-dark"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
