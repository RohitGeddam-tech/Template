import React, { useState } from "react"
// import Textarea from "./Textarea"

const defaultFormState = {
  name: "",
  mobile: "",
  email: "",
  text: "",
}

const Form = ({ className = "" }) => {
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
    var nameRegExp = /^[A-Za-z\s]+$/,
      emailRegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
      phoneRegExp = /^[0-9]{10}$/,
      textRegExp = /^[A-Za-z0-9_\-.@\s%&*(){}?/!#+=:;"'~]+$/

    tempError.name =
      (!details.name && "The name field is required.") ||
      (!nameRegExp.test(details.name) && "The name field is invalid.")

    tempError.mobile =
      (!details.mobile && "The phone number field is required.") ||
      (!phoneRegExp.test(details.mobile) &&
        "The phone number field is invalid.")

    tempError.email =
      (!details.email && "The email field is required.") ||
      (!emailRegExp.test(details.email) && "The email field is invalid.")

    tempError.text =
      (!details.text && "The text field is required.") ||
      (!textRegExp.test(details.text) && "The text field is invalid.")

    setError(tempError)
    return Object.values(tempError).some(val => val)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError({})
    const errorExist = validateForm()
    if (!errorExist) {
      console.log(details)
    } else {
      console.log("error")
    }
  }

  const [clicked, setClicked] = useState(false)

  className += ` textfield ${details.text ? "has-value" : ""}`

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title-heading">Request a call back</h1>
      <div className="text-input">
        <input
          value={details.name}
          className="input"
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="name" className="input-placeholder">
          Full name
        </label>
      </div>
      {error && error.name ? <p className="error-text">{error.name}</p> : null}
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
        <textarea
          className="textfield"
          value={details.text}
          name="text"
          onChange={handleChange}
          onClick={() => setClicked(!clicked)}
        />
        <label htmlFor="message" className="input-placeholder">
          Write your message here*
        </label>
      </div>
      {error && error.text ? <p className="error-text">{error.text}</p> : null}
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  )
}

export default Form
