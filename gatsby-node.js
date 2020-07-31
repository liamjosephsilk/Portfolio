/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      graphcms: { posts },
    },
  } = await graphql(`
    {
      graphcms {
        posts(stage: PUBLISHED) {
          id
          slug
        }
      }
    }
  `)
  posts.forEach(({ id, slug }) =>
    createPage({
      path: `/posts/${slug}`,
      component: require.resolve(`./src/templates/PostPage.js`),
      context: {
        id,
      },
    })
  )
}
