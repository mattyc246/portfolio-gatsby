exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allDatoCmsBlog {
        edges {
          node {
            originalId
            slug
          }
        }
      }
    }
  `);

  const postsPerPage = 10;
  const posts = result?.data?.allDatoCmsBlog?.edges;
  const numPages = Math.ceil(posts?.length / postsPerPage);

  posts?.forEach(({ node: page }) => {
    createPage({
      path: `/blog/${page?.slug}`,
      component: require.resolve('./src/templates/blog-page.js'),
      context: {
        originalPageId: page?.originalId
      }
    });
  });

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page-${i + 1}`,
      component: require.resolve('./src/templates/blog-index.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};
