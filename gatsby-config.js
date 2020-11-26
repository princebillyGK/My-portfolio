/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCr6hbyXksCw7gKgrwfoGzOeLFfaX7Jkbc",
          authDomain: "my-portfolio-2924a.firebaseapp.com",
          databaseURL: "https://my-portfolio-2924a.firebaseio.com",
          projectId: "my-portfolio-2924a",
          storageBucket: "my-portfolio-2924a.appspot.com",
          messagingSenderId: "811085489935",
          appId: "1:811085489935:web:3c599dd51248a7febf007a",
          measurementId: "G-BM4G12W52Q"
        }
      }
    }
  ]
}
