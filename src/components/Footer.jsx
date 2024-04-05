import React from 'react'
import {FaInstagram,FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='text-white py-16'>
        <div className='max-w[1240] mx-auto md:px-40 gap-8 '>
            <div>
                <h1 className='text-green-300 m-4 font-bold text-3xl font-mono'>ByteBucks.</h1>
                <p className='font-mono m-4'>"Stay connected with BytesBucks and join our community today. Explore our diverse range of games, dive into eco-themed adventures, and contribute to sustainability while having fun."</p>
                <div className='m-4 flex'>
                  <a href="https://www.instagram.com/bytebucks_bsc?igsh=cTUxdGt2azhqMW8y&utm_source=qr" target='_blank'><FaInstagram  className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white' /></a>
                  <a href="https://whatsapp.com/channel/0029VaZkl5oKbYMFQVsY3q3s" target='_blank'><FaWhatsapp   className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white' /></a>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Footer