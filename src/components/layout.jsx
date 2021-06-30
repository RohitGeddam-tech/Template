/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/Logo1.png"
import fb from "../images/fb.png"
import tweet from "../images/tweet.png"
import insta from "../images/insta.png"
import powered from "../images/Powered.png"
import copy from "../images/Copyright.png"

import Header from "./Header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{ paddingTop: "65px" }}>
        <main>{children}</main>
        <footer>
          <div className="container">
            <div className="firstDiv">
              <img src={logo} alt="logo" />
            </div>
            <div className="secondDiv">
              <img src={fb} alt="fb" />
              <img src={tweet} alt="tweet" />
              <img src={insta} alt="insta" />
            </div>
            <div className="lastDiv">
              <img src={powered} alt="powered" />
            </div>
          </div>
          <div className="imgCenter">
            <img src={copy} alt="copyright" />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
