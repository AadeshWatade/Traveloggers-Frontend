import React from 'react'
import HeroSecImg from '../../assets/images/unsplash_T7K4aEPoGGk.svg'
import Line1 from '../../assets/images/Line 1.svg'
import Group40 from '../../assets/images/Group 40.svg'
import Navbar from '../../common/Navbar'

const HeroSection = () => {
    return (
        <>
            <Navbar />
            <img className='absolute w-full top-0 -z-10' src={HeroSecImg} alt="" />
            <div className='relative bg-black/70 top-48 py-8'>
                <p className='text-6xl text-white font-playfair text-center py-4'>Welcome to the community</p>
                <img className='mx-auto my-4' src={Line1} alt="" />
                <button className='flex justify-center bg-acccentColor py-2 font-poppins rounded-md text-white mt-12 mx-auto px-1'>Create Your First Blog</button>
                <button className='fixed bottom-8 right-12 px-1'><img className='h-24' src={Group40} alt="" /></button>
            </div>
        </>
    )
}

export default HeroSection