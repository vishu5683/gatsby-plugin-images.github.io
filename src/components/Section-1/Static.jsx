import React from 'react'
import "./static.css"
import { StaticImage } from 'gatsby-plugin-image'

const Static = () => {
  return (
   
   <>
    
    <div className='helloImg'>
        
<h2> Sunset Image (Static Method)</h2>

    </div>
    <div className='image-container'>
    <StaticImage src="./assets/sun1.jpg"  alt="pic12" width={400}  />
<StaticImage src="./assets/demo2.jpg"  alt="pic2" width={400} />

</div>
   </>
  )
}

export default Static
