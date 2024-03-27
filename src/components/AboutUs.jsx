import React from 'react'
import Section from './elements/Section'
import ByteBucks from "./assets/ByteBucks.png"

function AboutUs() {
  return (
    <div id='AboutUs'>
        <Section
        mainHeading={'About Us'} 
        img={ByteBucks} 
        para={"At BytesBucks, we're passionate about merging innovation with the natural world. Our platform seamlessly integrates digital currency and gaming, offering a unique space where users can engage in entertaining experiences while promoting environmental awareness. With a focus on agriculture and forestry, we strive to create a community that values sustainability and embraces the beauty of nature. Through secure online UPI transactions, we provide easy access to our diverse range of captivating games, inviting users to explore, learn, and play their part in building a greener tomorrow. Join us on this exciting journey as we redefine the boundaries of gaming and conservation."} 
        bg={'bg-white'} 
        />

    </div>
  )
}

export default AboutUs