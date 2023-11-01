// import React from "react"
// import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

// function BlogPost({ data }) {
//   const image = getImage(data.blogPost.avatar)

//   return (
//     <section>
//       <h2>{data.blogPost.title}</h2>
//       <GatsbyImage image={image} alt={data.blogPost.author} />
//       <p>{data.blogPost.body}</p>
//     </section>
//   )
// }

// export const query = graphql`
// query($id: String!) {
//     avatar: file(relativePath: { eq: "Section-1/assets/sun3.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(
//           width: 200
//           placeholder: BLURRED
//           formats: [AUTO, WEBP, AVIF]
//         )
//       }
//     }
//     blogPost(id: { eq: $id }) {
//       title
//       body
//       author
//     }
//   }

// `

// export default BlogPost
