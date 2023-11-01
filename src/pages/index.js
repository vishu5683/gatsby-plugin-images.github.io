import * as React from "react"
import "./index.css"
// import { StaticImage } from "gatsby-plugin-image"
import HomeSection from "../components/Section-1/HomeSection"
import Static from "../components/Section-1/Static"
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BlogPost from "../components/Section-1/blogPost";


export default function Home() {
  const data = useStaticQuery(graphql`
  query {
    sun1: file(relativePath: { eq: "sun2.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400, placeholder: BLURRED, layout: FIXED)
      }
    }
  
  }
`);
const image1 = getImage(data.sun1.childImageSharp);

  
  return (
    <>
    <div className="container"> 
    <h1>HELLO WORLD</h1>


    </div>
    
    <div className='image-container'>
          <GatsbyImage image={image1} alt='sun2.jpg' />
        </div>


    <HomeSection/>

<Static/>


{/* <BlogPost/> */}
    </>
  )
}
