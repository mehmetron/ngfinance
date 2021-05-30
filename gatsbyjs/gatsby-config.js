module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
  siteMetadata: {
    title: 'My page',
  },
};
