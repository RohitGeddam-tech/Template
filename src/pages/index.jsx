import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import Banner1 from "../components/Banner/Banner1"
// import Banner2 from "../components/Banner/Banner2"
// import Banner3 from "../components/Banner/Banner3"
import About1 from "../components/About/About1"
import About2 from "../components/About/About2"
import Doctor1 from "../components/Doctor/Doctor1"
import Doctor2 from "../components/Doctor/Doctor2"
import Services from "../components/Services"
import Equipments from "../components/Equipments"
import Gallery from "../components/Gallery"
import Packages from "../components/Packages"
import Test from "../components/Test"
import Contact from "../components/Contact"
import Slick from "../Utils/Slick"
import Slick2 from "../Utils/Slick2"
import Slick3 from "../Utils/Slick3"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slick />
    <Slick2 />
    <Slick3 />
    {/* <Banner1 /> */}
    {/* <Banner2 /> */}
    {/* <Banner3 /> */}
    <About1 />
    <About2 />
    <Doctor1 />
    <Doctor2 />
    <Services />
    <Equipments />
    <Gallery />
    <Packages />
    <Test />
    <Contact />
  </Layout>
)

export default IndexPage
