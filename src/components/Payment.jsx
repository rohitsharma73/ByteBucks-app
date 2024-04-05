import React from 'react'
import Section from './elements/Section'
import barcode from './assets/barcode.jpg'

function Payment() {
  return (
    <div id='Payment'>
        <Section 
        mainHeading={'Payments'} 
        img={barcode}
        para={"Note: Please Provide logined email id in comment while UPI payment or call the provided number to update the ByteBucks in your account."} 
        para2={"Exchange Rate: 1BB Coin = ₹2 (1/10 of Carbon Credit)"}
        style={'text-2xl'}
        style2={'text-blue-900 text-2xl'}
        bg={'bg-orange-400'}/>
    </div>
  )
}

export default Payment;