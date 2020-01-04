import React from 'react';
import {Card, CardTitle, CardBody, Form, FormGroup, Input, CardText } from 'reactstrap'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const SideBar = ({ author, authorFluid }) => (
        <div>
        {author && (
            <Card>
                <Img className="card-image-top" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        {author.name}
                    </CardTitle>
                    <CardText>{author.bio}</CardText>
                        <div className="author-social-links text-center">
                            <ul>
                                <li> <a href={author.facebook} target="_blank" rel="noopener noreferrer"> <i className="fa fa-facebook-f fa-lg"></i> </a> </li>
                                  <li> <a href={author.twitter} target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter fa-lg"></i> </a> </li>
                                    <li> <a href={author.instagram} target="_blank" rel="noopener noreferrer"> <i className="fa fa-instagram fa-lg"></i> </a> </li>
                                      <li> <a href={author.linkedin} target="_blank" rel="noopener noreferrer"> <i className="fa fa-linkedin fa-lg"></i> </a> </li>
                            </ul>
                        </div>
                    
                </CardBody>
            </Card>
        )}
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email address..."/>
                        </FormGroup>
                        <button className="btn btn-outline-success text-uppercase"> Subscribe</button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Advertisement
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x200" 
                    alt="Advert" 
                    style={{width: '100%' }} 

                    />
                </CardBody>
            </Card> 
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Advertisement two
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x200" 
                    alt="Advert" 
                    style={{width: '100%' }} 

                    />
                </CardBody>
            </Card> 
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Recent Post
                    </CardTitle>
                    <StaticQuery query={sidebarQuery} render ={(data) => (
                        <div>
                            {data.allMarkdownRemark.edges.map(({node}) => (
                                <Card key={node.id}>
                                    <Link to={node.fields.slug}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={node.fields.slug}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    )} />
                </CardBody>
            </Card>           
        </div>
     )
                            
     const sidebarQuery = graphql`
        query sidebarQuery {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC}
                limit: 3
            ){
                edges{
                    node{
                        id
                        frontmatter{
                            title
                            image{
                                childImageSharp{
                                    fluid(maxWidth: 300){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        }`

 
export default SideBar;