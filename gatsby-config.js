module.exports = {
  siteMetadata: {
    title: "React-Portfolio",
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito Sans:300,400,400i,700`],
        display: "swap",
      },
    },
  ],
};
