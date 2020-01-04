const { slugify } = require('./src/util/utilityFunctions')
const path = require('path')
const authors = require('./src/util/authors')


exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark'){
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: `slug`,
            value: slugFromTitle,
        })
    }
}

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const singlePostTemplate = path.resolve('src/templates/single-post.js')
    const postListTemplate  = path.resolve('src/templates/post-list.js') 
   const res = await graphql(`
    {
        allMarkdownRemark {
            edges {
                node{
                    frontmatter{
                        author  
                                
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `) 
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: singlePostTemplate,
          context: {
                    //passing slug for template to use to get post
                    slug: node.fields.slug,
                    //find author image url
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
                }
            })
        })
}




