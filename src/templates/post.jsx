import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const post = data.markdownRemark
  console.log(post);
  const title = post.frontmatter.title
  const description = post.frontmatter.description
  const date = post.frontmatter.date
  const html = post.html

  return (
    <Layout>
      <SEO description={description} title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        date
        title
        description
      }
    }
  }
`
export default Post
