module.exports = {
  siteMetadata: {
    title: `| Front End Web Developer`,
    description: `Personal blog for Front End Developer Liam Silk. Based in Kingston Upon Hull, United Kingdom.`,
    author: ``,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GraphCMS",
        fieldName: "graphcms",
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckb183wlo0bdo01yxglnvh8wn/master",
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `liam-silk`,
        short_name: `LS`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#151515`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
