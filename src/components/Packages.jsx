import React from "react"
import grey from "../images/grey.png"
import "./Packages.scss"

const packageDetails = [
  {
    image: grey,
    title: "DIABETES PACK",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    title: "DIABETES PACK",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    title: "DIABETES PACK",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
  {
    image: grey,
    title: "DIABETES PACK",
    para:
      "Includes: Lipid Profile, Complete Blood Count, Differential Leukocyte Count, Hemoglobin, Blood Group Test, Some other test",
  },
]

const Packages = () => {
  return (
    <div className="package">
      <div className="container">
        <h1 className="title-heading">packages & OFFERS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="Slider">
          <div className="Slide">
            {packageDetails.map((doc, index) => (
              <div className="slideBox" key={index}>
                <img src={doc.image} alt="galleryImg" />
                <div className="boxPadding">
                  <h1 className="title-heading">
                    {doc.title}
                    <span>$ 21</span>
                  </h1>
                  <p className="para">{doc.para}</p>
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
