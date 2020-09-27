require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    description: 'The site description',
    image:
      'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
    siteUrl: 'https://yourdomain.com',
    siteName: 'SiteName',
    twitterHandle: 'T04435',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-tslint',
    'gatsby-plugin-scss-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            subsets: ['latin'],
            variants: ['100', '400', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SiteName`,
        short_name: `SiteName`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          header: require('./src/schemas/header.json'),
          home: require('./src/schemas/home.json'),
        },
        prismicToolbar: true,
        // Provide a default set of Imgix image transformations applied to
        // Imgix-backed gatsby-image fields. These options will override the
        // defaults set by Prismic.
        // See: https://docs.imgix.com/apis/url
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
      },
    },
    'gatsby-plugin-layout',
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_WRITE_KEY,
        devKey: process.env.SEGMENT_WRITE_KEY,
        trackPage: true,
      },
    },
  ],
};
