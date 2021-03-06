/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Sidebar from './Sidebar'
import '../styles/index.scss'
import { Row, Col } from 'reactstrap'

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor}) => {
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
    <link 
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
    rel="stylesheet" 
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
     crossOrigin="anonymous">
     </link>

     <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
      <br/>
      <br/>
      <h2 class="font-weight-bolder">{pageTitle}</h2>
      <Row>
        <Col md="8">
        {children}
        </Col>
        <Col md ="4">
          <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
        </Col>
      </Row>
    </div>
    <Footer/> 
    </>      
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
