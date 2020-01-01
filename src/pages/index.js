import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Post from "../components/blogpost"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <h1>Home Page</h1>
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

            />
            ))}
          </div>
        )
      }}/>
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
        }
        excerpt
        
      }
    }
  }
}
`
 

export default IndexPage
