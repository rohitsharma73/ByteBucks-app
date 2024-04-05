
import { UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Coins from './Coins';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';


function HeaderSin() {
    const [icon, setIcon] = useState(false);
    return (
        <BrowserRouter>
            <div className='  text-white sticky top-0 bg-black w-full h-24 flex justify-between items-center mx-auto'>
                {/* nav heading */}
                <img src="/ByteBucks.png" width={90} alt="logo ByteBucks" />
                <h1 className='text-orange-400 w-full font-bold text-3xl font-mono pr-0 p-3'>ByteBucks.</h1>

                {/* large scree nav links */}
                <ul className='md:flex hidden text-xl gap-5'>
                    <Link to="#HeroSin" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Home</Link>
                    <Link to="#AboutUs" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>About</Link>
                    <Link to="#Payment" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Pay</Link>
                    <Link to="#PaymentHistory" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>PayHis</Link>
                    <Link to="#Tips" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Grow</Link>
                    <Link to="#Schemes" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Schemes</Link>
                    <Link to="#Updates" smooth className='px-2 py-4 hover:text-orange-400  transition-all ease-in-out duration-500 font-mono uppercase'>Updates</Link>
                    <Coins />
                    <UserButton />
                </ul>

                {/* icon */}
                <div onClick={() => setIcon(!icon)} className='md:hidden p-3 block'>
                    {
                        icon ? <IoMdClose className='text-2xl' /> : <IoMdMenu className='text-2xl' />
                    }
                </div>

                {/* small screen navlink */}
                <div className={`${icon ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
                    <h1 className='text-orange-400 w-full m-4 font-bold text-3xl font-mono'>ByteBucks.</h1>
                    <ul className='uppercase p-4 flex flex-col'>
                        <UserButton />
                        <Coins />
                        <Link to="#HeroSin"  className='p-4 border-b border-gray-600'>Home</Link>
                        <Link to="#AboutUs"  className='p-4 border-b border-gray-600'>About</Link>
                        <Link to="#Payment"  className='p-4 border-b border-gray-600'>Payment</Link>
                        <Link to="#PaymentHistory"  className='p-4 border-b border-gray-600'>Payment History</Link>
                        <Link to="#Tips" className='p-4 border-b border-gray-600'>Grow</Link>
                        <Link to="#Schemes" className='p-4 border-b border-gray-600'>Schemes</Link>
                        <Link to="#Updates" className='p-4 border-b border-gray-600'>Update</Link>
                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default HeaderSin