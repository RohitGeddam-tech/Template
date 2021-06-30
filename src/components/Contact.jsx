import React from "react"
import "./Contact.scss"
import location from "../images/location.png"
import call from "../images/call.png"
import mail from "../images/email.png"
import Form from "../Utils/Form"

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="left">
          <h1 className="title-heading">contact us</h1>
          <div className="contactDetails">
            <div className="address">
              <a href="/" className="title-heading">
                <span>
                  <img src={location} alt="location" />
                </span>
                Address :
              </a>
              <a href="/" className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </a>
            </div>
            <div className="address">
              <a href="/" className="title-heading">
                <span>
                  <img src={call} alt="call" />
                </span>
                Call :
              </a>
              <a href="/" className="para">
                +91 98697 53936
              </a>
            </div>
            <div className="address">
              <a href="/" className="title-heading">
                <span>
                  <img src={mail} alt="mail" />
                </span>
                Mail :
              </a>
              <a href="/" className="para">
                contact@labname.com
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
