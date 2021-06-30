import React from "react"
import { useState } from "react"
import banner from "../../images/grey.png"
import "./Banner.scss"
import Modal from "../../Utils/Modal"

const Banner1 = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="Banner3">
      <img src={banner} alt="banner" />
      <div className="container">
        <h1 className="heading">banner title comes here</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="firstbtn" onClick={() => setOpen(true)}>
          Book an appointment
        </button>
        <Modal modalOpen={open} modalClose={setOpen} />
      </div>
    </div>
  )
}

export default Banner1
