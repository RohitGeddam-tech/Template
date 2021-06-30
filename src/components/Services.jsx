import React from "react"
import "./Services.scss"
import circle from "../images/circle.png"

const serviceData = [
  {
    image: circle,
    title: "Service 1",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
  {
    image: circle,
    title: "Service 2",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
  {
    image: circle,
    title: "Service 3",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
  {
    image: circle,
    title: "Service 4",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
  {
    image: circle,
    title: "Service 5",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
  {
    image: circle,
    title: "Service 6",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor.",
  },
]

const Services = () => {
  return (
    <div className="service">
      <div className="container">
        <h1 className="title-heading">SERVICES / FEATURES</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="serviceDetails">
          {serviceData.map((doc, index) => (
            <div className="serviceBox" key={index}>
              <img src={doc.image} alt="detailsIcon" />
              <div className="serviceBoxDetails">
                <h1 className="heading">{doc.title}</h1>
                <p className="para">{doc.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
