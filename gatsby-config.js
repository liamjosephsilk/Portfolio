require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Front End Web Developer`,
    description: `Personal blog for Front End Developer Liam Silk. Based in Kingston Upon Hull, United Kingdom.`,
    author: `Liam Silk`,
    siteUrl: "https://www.liamsilk.dev",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@atoms": "src/components/atoms/index",
          "@molecules": "src/components/molecules/index",
          "@organisms": "src/components/organisms/index",
          "@layouts": "src/components/layouts/index",
          "@utils": "src/lib/utils/index",
        },
        extensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.liamsilk.dev`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GraphCMS",
        fieldName: "graphcms",
        url: process.env.GRAPHCMS_API,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
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
    // `gatsby-plugin-offline`,
  ],
}
