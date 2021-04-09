import emailjs from "emailjs-com";
import React from "react";
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneSquare,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./contact.css";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vz4ech",
        "template_obs9gzp",
        e.target,
        "user_488Hc2VgHuDVwWjuoLGsl"
      )
      .then(
        (result) => {
          console.log("it worked : ", result.text);
        },
        (error) => {
          console.log("it didn't work .... :", error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="contact-container">
        <h1 className="contact-header">Contact</h1>
        <div className="form-container">
          <div className="phone-icon">
            <FontAwesomeIcon
              icon={faPhoneSquare}
              style={{
                width: "30px",
                height: "30px",
                color: "#b9b9b9",
                marginRight: "10px",
              }}
            />
            <p>(416) 206-8776</p>
          </div>
          <div className="email-icon">
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              style={{
                width: "30px",
                height: "30px",
                color: "#b9b9b9",
                margin: "0px 10px 0px 50px",
              }}
            />
            <p>davidaghazi@gmail.com</p>
          </div>
        </div>
        <form onSubmit={sendEmail} className="form-container">
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="name-form"
                cols="30"
                placeholder=" Name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="email-form"
                cols="30"
                placeholder=" Email Address"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="subject-form"
                cols="30"
                placeholder=" Subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="message-form"
                cols="30"
                placeholder=" Message"
                name="message"
              ></textarea>
            </div>
            <Button
              className="send-button"
              variant="outlined"
              style={{ backgroundColor: "#44475a" }}
              type="submit"
              value="Send Message"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
