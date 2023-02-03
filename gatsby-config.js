require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `matthewcross.me`,
    siteUrl: `https://matthewcross.me`
  },
  plugins: [
    'gatsby-plugin-mantine',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:300,400,500,600,700`,
          `source sans pro\:300,400,500,600,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500
            }
          },
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_CMS_API_TOKEN,
        environment: `master`,
        previewMode: true,
        disableLiveReload: false
      }
    }
  ]
};
