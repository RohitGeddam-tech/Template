import React, { useState } from "react"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import TextField from "@material-ui/core/TextField"
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
// import { Modal } from "@material-ui/core";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// }

const defaultFormState = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  select: "",
  date: "",
}

const BookModal = ({ modalOpen, modalClose }) => {
  const [details, setDetails] = useState({ ...defaultFormState })
  const [error, setError] = useState({})

  const handleChange = e => {
    const tempDetails = { ...details },
      tempError = { ...error }
    tempDetails[e.target.name] = e.target.value
    tempError[e.target.name] = ""
    setDetails(tempDetails)
    setError(tempError)
  }

  const validateForm = () => {
    const tempError = { ...error }
    var fnameRegExp = /^[A-Za-z\s]+$/,
      lnameRegExp = /^[A-Za-z\s]+$/,
      emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      phoneRegExp = /^[0-9]{10}$/,
      selectRegExp = /^[A-Za-z\s]+$/,
      dateRegExp = /^[A-Za-z0-9_\-. :\s/]+$/

    tempError.fname =
      (!details.fname && "The Firstname field is required.") ||
      (!fnameRegExp.test(details.fname) && "The Firstname field is invalid.")

    tempError.lname =
      (!details.lname && "The Lastname field is required.") ||
      (!lnameRegExp.test(details.lname) && "The Lastname field is invalid.")

    tempError.mobile =
      (!details.mobile && "The phone number field is required.") ||
      (!phoneRegExp.test(details.mobile) &&
        "The phone number field is invalid.")

    tempError.email =
      (!details.email && "The email field is required.") ||
      (!emailRegExp.test(details.email) && "The email field is invalid.")

    tempError.select =
      (!details.select && "The select field is required.") ||
      (!selectRegExp.test(details.select) && "The select field is invalid.")

    tempError.date =
      (!details.date && "The date field is required.") ||
      (!dateRegExp.test(details.date) && "The date field is invalid.")

    setError(tempError)
    return Object.values(tempError).some(val => val)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError({})
    const errorExist = validateForm()
    if (!errorExist) {
      console.log(details)
      modalClose(false)
    } else {
      console.log("error")
    }
  }

  // const [clicked, setClicked] = useState(false)

  const selectedOpts = [
    {
      value: "blue",
      label: "test and packages",
    },
    {
      value: "green",
      label: "green",
    },
    {
      value: "violet",
      label: "violet",
    },
    {
      value: "red",
      label: "red",
    },
  ]

  return (
    <Modal
      open={modalOpen}
      center
      onClose={() => modalClose(false)}
      classNames="modal"
    >
      <form className="modal" onSubmit={handleSubmit}>
        <div className="alignHeading">
          <h1 className="title-heading">Book an appointment</h1>
        </div>
        <div className="text-input">
          <input
            className="input"
            value={details.email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="email" className="input-placeholder">
            Email
          </label>
        </div>
        {error && error.email ? (
          <p className="error-text">{error.email}</p>
        ) : null}
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">
            Select a Test/Package
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={details.select}
            onChange={handleChange}
            label="Select a Test/Package"
            name="select"
          >
            {selectedOpts.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </FormControl>
        {error && error.select ? (
          <p className="error-text">{error.select}</p>
        ) : null}
        {/* <div className='text-input'>
          <select
            className="input"
            value={details.select}
            name="select"
            onChange={handleChange}
          >
            {selectedOpts.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <label htmlFor="select" className="input-placeholder">
            Select a Text/Package
          </label>
        </div> */}
        <div className="text-input">
          <input
            value={details.mobile}
            className="input"
            name="mobile"
            onChange={handleChange}
          />
          <label htmlFor="mobile" className="input-placeholder">
            Mobile No.
          </label>
        </div>
        {error && error.mobile ? (
          <p className="error-text">{error.mobile}</p>
        ) : null}
        <div className="text-input">
          <input
            value={details.fname}
            className="input"
            name="fname"
            onChange={handleChange}
          />
          <label htmlFor="fname" className="input-placeholder">
            First name
          </label>
        </div>
        {error && error.fname ? (
          <p className="error-text">{error.fname}</p>
        ) : null}
        <div className="text-input">
          <input
            value={details.lname}
            className="input"
            name="lname"
            onChange={handleChange}
          />
          <label htmlFor="lname" className="input-placeholder">
            Last name
          </label>
        </div>
        {error && error.lname ? (
          <p className="error-text">{error.lname}</p>
        ) : null}
        <div className="text-input date">
          <TextField
            id="datetime-local"
            type="datetime-local"
            label="Select Date & Time"
            className="textfield"
            value={details.date}
            name="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        {error && error.date ? (
          <p className="error-text">{error.date}</p>
        ) : null}
        <button type="submit" className="btn" onClick={handleSubmit}>
          Book
        </button>
      </form>
      {/* <button onClick={() => modalClose(false)}>close</button> */}
    </Modal>
  )
}

export default BookModal
