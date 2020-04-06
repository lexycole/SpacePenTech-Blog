module.exports = {
    siteMetadata: {
      title: 'SpacePenTech Blog',
      description:
        'A site we built together during a full-day Frontend Masters Gatsby workshop!',
    },
    plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/components/layout.js'),
          },
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: 'posts',
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: 'images',
        },
      },
      {
      resolve: 'gatsby-source-instagram',
        options: {
          username: 'spacepentech',
        },
      },
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          production: true,
          disable: !process.env.ANALYZE_BUNDLE_SIZE,
          generateStatsFile: true,
          analyzerMode: 'static',
        },
    },
    ],
  };
  