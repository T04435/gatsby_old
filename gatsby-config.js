/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-tslint',
    'gatsby-plugin-scss-typescript',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            subsets: ['latin'],
            variants: ['100', '400', '700']
          },
        ],
      },
    }
  ],
};
