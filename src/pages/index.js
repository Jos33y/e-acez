import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/blogpost"
import  {Col, Row} from 'reactstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Blog Post</h1>
      <Row>
        <Col md="8">
        <StaticQuery 
      query={indexQuery} 
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post 
            title= {node.frontmatter.title }
            author={node.frontmatter.author}
            path={node.frontmatter.path}
            date={node.frontmatter.date}
            body={node.excerpt} 
            fluid={node.frontmatter.image.childImageSharp.fluid}

            />
            ))}
          </div>
        )
      }}/>

        </Col>
        <Col md="4">
          <div style= {{width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.4"}}> </div>

        </Col>

      </Row>
  

      </div>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark( sort: {fields: [frontmatter___date], order: DESC}){
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MM - DD - YYYY")
          author
          path
          image{
            childImageSharp{
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        
      }
    }
  }
}
`
 

export default IndexPage
