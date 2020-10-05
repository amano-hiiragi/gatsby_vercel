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
        <h5>{data.allMarkdownRemark.totalCount}</h5>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h3>{node.frontmatter.title} * {node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
            </div>

          ))
        }
      </div>

    </Layout>
  )
}

// ここに queryを定義！！qraphqlしてあげるだけで理解してくれるGatsbyまじサンキュー。
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
          }
          excerpt
        }
      }
    }
  }
`