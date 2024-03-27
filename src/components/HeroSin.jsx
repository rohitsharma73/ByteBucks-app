import React from 'react'
import { ReactTyped } from "react-typed";
import { useUser } from "@clerk/clerk-react";
import Btn from './elements/Btn';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

function HeroSin() {
    const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) {
        // Handle loading state however you like
        return null;
    }

    if (isSignedIn) return (
        <div id='HeroSin'>
            <div className="text-white mx-2">
                <div className='max-w-[900px] mt-[-96px] h-screen  mx-auto flex flex-col justify-center'>
                    <p className='text-orange-400 text-sm font-bold p-2'>Every Bit, Worth it!!</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Hello, <span>{user.fullName}</span></h1>

                    <div className=''>
                        <p className='font-mono md:text-4xl sm:text-3xl text-2xl py-4'>
                            Welcome in &nbsp;
                            <ReactTyped
                                className='font-mono md:text-4xl sm:text-3xl text-2xl'
                                strings={['ByteBucks']}
                                typeSpeed={120}
                                backSpeed={130}
                                loop
                            />
                        </p>
                    </div>
                    <p className='md:text-2xl text-xl text-gray-600'>Discover BytesBucks seamless online UPI transactions, endless games. Dive into eco-themed adventures, gaming for a greener tomorrow..</p>

                    <BrowserRouter>
                    <Link to="#Payment" smooth>
                        <Btn text='Get ByteBuck Now' />
                    </Link>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    )
    return <div>Not signed in</div>;
}

export default HeroSin