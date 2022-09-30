import React from 'react'
import HeroSecImg from '../../assets/images/HeroSectionImg.svg'
import Line1 from '../../assets/images/Line 1.svg'
import Group40 from '../../assets/images/Group 40.svg'
import Navbar from '../../common/Navbar'

const HeroSection = () => {
    return (
        <div className='flex h-screen top-0 justify-center'>
            <Navbar />
            <img className='absolute w-full top-0 -z-10' src={HeroSecImg} alt="" />
            <div className='relative bg-black/70 py-8 place-self-center w-screen'>
                <p className='text-6xl text-white font-playfair text-center py-4'>Welcome to the community</p>
                <img className='mx-auto my-4' src={Line1} alt="" />
                <button className='flex justify-center bg-acccentColor py-2 font-poppins rounded-md text-white mt-12 mx-auto px-1'>Create Your First Blog</button>
                <button className='fixed bottom-12 right-12 px-1 z-10'><img className='h-20' src={Group40} alt="" /></button>
            </div>
        </div>
    )
}

export default HeroSection