import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='text-white py-16'>
        <div className='max-w[1240] mx-auto md:px-40 gap-8 '>
            <div>
                <h1 className='text-green-300 m-4 font-bold text-3xl font-mono'>ByteBucks.</h1>
                <p className='font-mono m-4'>"Stay connected with BytesBucks and join our community today. Explore our diverse range of games, dive into eco-themed adventures, and contribute to sustainability while having fun."</p>
                <div className='m-4 flex'>
                  <FaFacebookSquare href='' className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                  <FaInstagram href='' className='text-3xl mx-2 cursor-pointer shadow-md border-none hover:shadow-white'/>
                </div>
            </div>  
        </div>
    </div>
    </>
  )
}

export default Footer