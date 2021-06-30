import React from "react"
import banner from "../../images/grey.png"
import "../About/About.scss"

const Doctor2 = () => {
  return (
    <div className="About1">
      <div className="container">
        <div className="aboutImg">
          <img src={banner} alt="about" />
          <p className="para">Dr. Name</p>
        </div>
        <div className="aboutDetail">
          <h1 className="heading">DOCTOR’S MESSAGE</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Doctor2
