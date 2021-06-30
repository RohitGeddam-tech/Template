import React from "react"
import banner from "../../images/grey.png"
import "./About.scss"

const About2 = () => {
  return (
    <div className="About1">
      <div className="container">
        <div className="aboutDetail">
          <h1 className="heading">About us</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="btn">Learn More</button>
        </div>
        <div className="aboutImg">
          <img src={banner} alt="about" />
          <p className="para">Dr. Name</p>
        </div>
      </div>
    </div>
  )
}

export default About2
