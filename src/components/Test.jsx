import React from "react"
import grey from "../images/account.png"
import "./Test.scss"

const packageDetails = [
  {
    image: grey,
    name: "Kiran Patil",
    title: "Absolutely Amazing",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    name: "Kiran Patil",
    title: "Absolutely Amazing",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    name: "Kiran Patil",
    title: "Absolutely Amazing",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    name: "Kiran Patil",
    title: "Absolutely Amazing",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
]

const Packages = () => {
  return (
    <div className="test">
      <div className="container">
        <h1 className="title-heading">testimonials</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="Slider">
          <div className="Slide">
            {packageDetails.map((doc, index) => (
              <div className="slideBox" key={index}>
                <div className="boxPadding">
                  <h1 className="title-heading">"{doc.title}"</h1>
                  <p className="para">{doc.para}</p>
                  <div className="cardIntro">
                    <img src={doc.image} alt="galleryImg" />
                    <span>{doc.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
