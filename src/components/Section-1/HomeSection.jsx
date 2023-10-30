import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './home.css';

const HomeSection = () => {
  const data = useStaticQuery(graphql`
    query {
      sun1: file(relativePath: { eq: "Section-1/assets/sun3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      sun2: file(relativePath: { eq: "Section-1/assets/demo1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image1 = getImage(data.sun1.childImageSharp);
  const image2 = getImage(data.sun2.childImageSharp);

  return (
    <>
      <div className='helloImg'>
        <h2> Sunset Images (Dynamic)
        </h2>
      </div>
      <div>
        <div className='image-container'>
          <GatsbyImage image={image1} alt='sun1.jpg' />
        </div>
        <div className='image-container'>
          <GatsbyImage image={image2} alt='demo2.jpg' />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
