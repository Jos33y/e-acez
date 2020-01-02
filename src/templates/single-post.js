import React from 'react';
import Layout from '../components/layout'
import Sidebar from '../components/Sidebar'
import SEO from "../components/seo"
import { graphql, Link } from 'gatsby'
import {Badge, Row, Col, Card, CardBody, CardSubtitle} from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const SinglePost = ({data}) => {
    const post = data.markdownRemark.frontmatter
    return ( 
        <Layout>
            <SEO title={post.title} />
            <h1>{post.title}</h1>
            <Row>
                <Col md="8">
                   <Card>
                       <Img className="card-image-top" fluid={post.image.childImageSharp.fluid} />
                       <CardBody>
                           <CardSubtitle>
                               <span className="text-info">{post.date}</span> by {' '}
                               <span className="text-info">{post.author}</span>
                           </CardSubtitle>
                           <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
                           <ul className="ul-style">
                               {post.tags.map(tag => (
                                  <li key={tag}>
                                   <Link to={`/tag/${slugify(tag)}`}>
                                       <Badge color="secondary">{tag}</Badge>
                                   </Link>
                                  </li>
                               ))}
                           </ul>
                       </CardBody>
                   </Card>

                </Col>
                <Col md="4">
                    <Sidebar />
                </Col>
            </Row>

        </Layout>
     );
}
 
export const postQuery = graphql`
    query blogPostBySlug($slug: String!){
        markdownRemark(fields: { slug: { eq: $slug}}){
            id
            html
            frontmatter{
                title
                author
                date(formatString: "MM-DD-YYYY")
                tags
                image{
                    childImageSharp{
                        fluid(maxWidth: 700){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default SinglePost;