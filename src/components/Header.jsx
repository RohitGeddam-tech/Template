import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import "./Header.scss"
import logo from "../images/Logo.png"
import Modal from "../Utils/Modal"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <div className="container">
          {/* <div className='navImage'> */}
          <img src={logo} alt="logo" />
          {/* </div> */}
          <div className="navDetails">
            <Link to="/">Packages</Link>
            <Link to="/">Services</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
            <button className="noOutline">Login</button>
            <button className="firstbtn" onClick={() => setOpen(true)}>
              Book an appointment
            </button>
          </div>
        </div>
      </header>
      <Modal modalOpen={open} modalClose={setOpen} />
    </>
  )
}

export default Header
