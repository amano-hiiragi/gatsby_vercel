import React from "react"
import { graphql, Link } from "gatsby"
// ↑にgraphqlを。gatsbyがつくってくれてるものなので安心して使います。詳しくは公式に。
// dataがあったらすぐ「あーgraphqlのことね」とわかってくれるGatsbyの優しさに夢女る。

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({ data }) => { // export default 1コンポーネント1回限り
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>エラーの積み重ね。Frequent errors.</h1>
        {/* <h5>{data.allMarkdownRemark.totalCount}</h5> */}
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.frontmatter.path}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </div>

          ))
        }
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        order: DESC,
        fields: [frontmatter___date]
      }
      filter: {
        frontmatter: {
          status: { eq: "published" }
        }
      }
    ){
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            path
            title
            date
            description
          }
        }
      }
    }
  }
`