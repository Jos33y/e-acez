import React from 'react';
import {Card, CardTitle, CardBody, Form, FormGroup, Input, CardText, CardHeader } from 'reactstrap'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const SideBar = ({ author, authorFluid }) => (
        <div>
        {author && (
            <Card>
                <Img className="card-image-top rounded" fluid={authorFluid}/>
                <CardBody>
                    <CardTitle className="text-center text-uppercase font-weight-bold mb-3">
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
            <Card className="my-4">
                <CardHeader>
                    <h5 className="text-center font-weight-bold">Newsletter</h5>
                </CardHeader>
                    <CardBody>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email address..."/>
                        </FormGroup>
                        <button className="btn btn-outline-success"> Subscribe!</button>
                    </Form>
                </CardBody>
            </Card>
            <Card className="my-4">
                <CardHeader>
                    <h5 className="text-center font-weight-bold">Advertisement</h5>
                </CardHeader>
                <CardBody>
                    <img src="https://via.placeholder.com/320x200" 
                    alt="Advert" 
                    style={{width: '100%' }} 

                    />
                </CardBody>
            </Card> 
            <Card className="my-4">
                <CardHeader>
                    <h5 className="text-center font-weight-bold">Advertisement two</h5>
                </CardHeader>
                <CardBody>
                    <img src="https://via.placeholder.com/320x200" 
                    alt="Advert" 
                    style={{width: '100%' }} 

                    />
                </CardBody>
            </Card> 
            <Card className="my-4">
                
            <CardHeader>
                    <h5 className="text-center font-weight-bold">Recent Post</h5>
                </CardHeader>
                </Card>
                    
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