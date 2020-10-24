module.exports = {
  siteMetadata: {
    title: `柊。engineering.`,
    description: `エンジニアリングを求めて情報収集した際の記録。Records of information gathered in search of engineering.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    // for markdowns
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-remark-autolink-headers`,
      options: {
        offsetY: `30`,
        icon: false,
        className: `custom-class`,
        maintainCase: true,
      },
    },
    // end for markdowns

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
