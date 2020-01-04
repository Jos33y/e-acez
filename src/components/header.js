import React, { useState } from 'react';
import { graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = (props) => {
 
  const data = useStaticQuery(graphql`
  query Images {
    file ( relativePath: {eq: "eicon.png"}){
      id
      childImageSharp{
        fixed(
          width:50 , height:50
        )
        {
            ...GatsbyImageSharpFixed
        }
      }
      
    }
  } 
  `)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      
      <Navbar navbar fixed="top" light expand="sm" id="mainNav">
     <div className="container">
        <NavbarBrand href="/">
          <Img className="logo" fixed={data.file.childImageSharp.fixed } />
          
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">Team</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </div>
      </Navbar>
    
    
)

  }

export default Header
