
import { SignInButton } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


function Header() {
    const [icon, setIcon] = useState(false);
    return (
        <BrowserRouter>
            <div className=' text-white  w-full h-24 flex justify-between items-center max-w-[1240px] mx-auto'>
                {/* nav heading */}
                <img src="/ByteBucks.png" width={90} alt="logo ByteBucks" />
                <h1 className='text-orange-400 w-full font-bold text-3xl font-mono pr-0 p-3'>ByteBucks.</h1>

                {/* large scree nav links */}
                <ul className='md:flex hidden text-xl gap-5'>
                    <Link to="#HeroSin" smooth className='p-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Home</Link>
                    <Link to="#AboutUs" smooth className='p-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>About</Link>
                    <Link to="#Updates" smooth className='p-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Updates</Link>
                </ul>
                <SignInButton className='md:flex hidden border w-[200px] mx-auto my-6 py-3  justify-center text-white font-bold rounded-md border-white border-l-2 uppercase  hover:border-orange-500 hover:text-orange-400 duration-500 ease-in-out' />

                {/* icon */}
                <div onClick={() => setIcon(!icon)} className='md:hidden p-3 block'>
                    {
                        icon ? <IoMdClose className='text-2xl' /> : <IoMdMenu className='text-2xl' />
                    }
                </div>

                {/* small screen navlink */}
                <div className={`${icon ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
                    <h1 className='text-green-300 w-full m-4 font-bold text-3xl font-mono'>React.</h1>
                    <ul className='uppercase p-4 flex flex-col'>
                        <Link to="#Hero" className='p-4 border-b border-gray-600'>Home</Link>
                        <Link to="#AboutUs" className='p-4 border-b border-gray-600'>About</Link>
                        <Link to="#Updates" className='p-4 border-b border-gray-600'>Update</Link>
                        <SignInButton className='px-4 py-2 m-2 border font-mono border-white border-l-2 hover:border-orange-400 hover:text-orange-400' />
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Header