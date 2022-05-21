import React from "react";

const ContactUI = () => {
  return (
      <div className="row form-contact">
        <div className="col-lg-6">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="col-lg-12">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                possimus illo consectetur mollitia sit, reiciendis ullam
                consequatur, magnam ad ea fugit esse molestiae ex quos adipisci
                in facere itaque laboriosam!
              </p>
            </div>
            <div className="col-lg-12">
              <p>
                <i className="custom_contact_icon fas fa-map-marker-alt"></i>
                Kathmandu
              </p>
            </div>
            <div className="col-lg-12">
              <p>
                <i className="custom_contact_icon fas fa-phone-alt"></i>
                9808039867,9585894848
              </p>
            </div>
            <div className="col-lg-12">
              <p>
                <i className="custom_contact_icon fas fa-envelope"></i>
                www.guitarshopnepal.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg_contact">
          <div className="row form-group p-4">
            <div className="col-lg-12">
              <h3 className="contact_text">Say Something</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text_area ma_tb">
              <textarea
                className="form-control"
                placeholder="Write A Message"
                id=""
                rows="8"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 btn_div">
              <button className="custom_contact_btn btn btn-lg btn-block ma_b">
                Send <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactUI;
