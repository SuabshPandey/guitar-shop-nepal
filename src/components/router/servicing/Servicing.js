import React, { useState } from "react";
import baseUrl from "../../home/Constant";
import "./Servicing.css";

const Servicing = () => {
  const [serviceData, setServiceData] = useState({
    name: "",
    email: "",
    phone_no: "",
    address: "",
    date: "",
    instrument_name: "",
    description: "",
  });

  // const token =
  const token = localStorage.getItem("key");
  let sub_button = document.getElementById('sub_button')

  const handleInputs = (e) => {
    e.persist();
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const postServiceData = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", serviceData.name);
    // formData.append("email", serviceData.email);
    // formData.append("phone_no", serviceData.phone_no);
    // formData.append("address", serviceData.address);
    // formData.append("instrument_name", serviceData.instrument_name);
    // formData.append("date", serviceData.date);
    // formData.append("description", serviceData.description);

    const {
      // user,
      name,
      email,
      phone_no,
      address,
      date,
      instrument_name,
      description,
      //   citizenship_photo,
      //   pp_size,
    } = serviceData;
    console.log(date)
    const today = new Date().toISOString().slice(0, 10);
    console.log(today)
            

    if (name === "" || email === "" || phone_no === "" || address === "" || date === "" || instrument_name === "" || description === "") {
      alert("Please enter all the details")
    }
    else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
      alert("Enter a valid email address")
    }
    else if(date < today ){
      alert("Enter a valid date")
    }

    else { 
      sub_button.disabled = true

    const response = await fetch(`${baseUrl}/book/service`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone_no,
        address,
        date,
        instrument_name,
        description,
      }),
    });
    if(response){
      sub_button.disabled = false
    }
    const responseData = await response.json();
    console.log(responseData);

    setServiceData({
      name: "",
      email: "",
      phone_no: "",
      address: "",
      date: "",
      instrument_name: "",
      description: "",
    });

    if (response.status === 200) {
      alert(
        "Your service booking details  has been successfully recorded !!! Thank You"
      );
    } else {
      console.log("Error");
    }
  }
  };

  return (
    <div className="servicing">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <div className="container">
        <div class="contact-area">
          <div class="container">
            <div class="contact-area-bg">
              <div class="row">
                <div class="col-lg-6">
                  <div class="contact-form">
                    <div class="section-title text-center">
                      <h2>Inquiry For Servicing Your Instrument </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris ante nisi, feugiat vel leo eget, dictum.
                      </p>
                    </div>
                    <form
                      id="contactForm"
                      novalidate="true"
                      onSubmit={postServiceData}
                      encType="multipart/form-data"
                    >
                      <div class="row">
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={serviceData.name}
                              onChange={handleInputs}
                              class="form-control"
                              required=""
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={serviceData.email}
                              onChange={handleInputs}
                              class="form-control"
                              required=""
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="phone_no"
                              id="phone_number"
                              required=""
                              value={serviceData.phone_no}
                              onChange={handleInputs}
                              class="form-control"
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="date"
                              name="date"
                              id="date"
                              class="form-control"
                              required=""
                              value={serviceData.date}
                              onChange={handleInputs}
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              class="form-control"
                              value={serviceData.address}
                              onChange={handleInputs}
                              required=""
                              placeholder="Address"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="instrument_name"
                              id="device_name"
                              class="form-control"
                              value={serviceData.instrument_name}
                              onChange={handleInputs}
                              required=""
                              placeholder="Device Name"
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <textarea
                              name="description"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="8"
                              value={serviceData.description}
                              onChange={handleInputs}
                              required=""
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12 text-center">
                          <button type="submit" class="default-btn" id="sub_button">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicing;
