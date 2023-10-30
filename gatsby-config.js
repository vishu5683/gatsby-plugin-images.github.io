/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

module.exports = {

 pathPrefix: "/gatsby-plugin-images.github.io",

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 

    {
      resolve: `gatsby-source-filesystem`,
      options: {
    
        name: `pages`,
        
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        
        name: `components`,
        
        path: `${__dirname}/src/components`,
      },
    },
    {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `components`,
               path: path.join(__dirname, `src`, `components`), 
            },
           }, 
         
           {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
               path: path.join(__dirname, `src`, `pages`), 
            },
           }, 


  ],
}

// const path = require('path');

// module.exports = {


//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `assets`,
//         path: path.join(__dirname, `src`, `components`), 
//       },
//     }, 
//      {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: path.join(__dirname, `src`, `pages`), 
//       },
//     },
    

//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//   ],
// };
