import PropTypes from "prop-types"
import React , { useState } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
  
      <Navbar navbar fixed="top" light expand="sm" id="mainNav">
     <div className="container">
        <NavbarBrand href="/">
        <Img  fixed={data.file.childImageSharp.fixed} />
        <span className="logo-head">e-acez </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags">Tags</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </div>
      </Navbar>
    
)

  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

export const query = graphql`
query {
  file(relativePath: { eq: "images/eicon.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
