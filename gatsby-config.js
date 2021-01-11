module.exports = {
  siteMetadata: {
    title: 'Frank Squared Trips',
    description:
      'A travel blog showcasing past trips, future plans, and what we are doing in the meantime.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
