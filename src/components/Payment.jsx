import React from 'react'
import Section from './elements/Section'

function Payment() {
  return (
    <div id='Payment'>
        <Section 
        mainHeading={'Payments'} 
        img={''} 
        para={"Note: Please Provide logined email id in comment while UPI payment or call the provided number to update the ByteBucks in your account"} 
        style={'text-2xl'}
        bg={'bg-orange-400'}/>
    </div>
  )
}

export default Payment