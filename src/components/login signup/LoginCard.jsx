import React from 'react'
import image from '../../assets/images/Rectangle 35.png'
import Input from './Input'
import aborderImg2 from '../../assets/images/Group 45.svg'


const LoginSignupCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center z-10 mx-auto w-[60%] pt-16'>
            <img className='hidden md:inline-block' src={image} alt="" />
            <div className='bg-acccentColor p-10 text-center rounded-3xl md:rounded-r-3xl md:rounded-l-none'>
                <div className='relative'>
                    <img className='mx-auto' src={aborderImg2} alt="" />
                </div>
                <p className='text-white text-2xl my-5'><i> Login</i></p>
                <div className='flex flex-col space-y-16 mt-16 mx-6'>

                    <Input placeholder='Enter Email/Username' type='text' />
                    <Input placeholder='Password' type='password' />
                </div>
                <p className='text-xs text-black/80 text-right mt-1 mx-6 hover:text-black hover:underline'>Forgot Password?</p>
                <div className='flex flex-col'>
                    <button className=' bg-white text-accentColbg-acccentColor rounded-full px-16 py-2 mt-10 w-1/2 text-xl mx-auto'>Login</button>
                    <a className='text-xs my-2 text-black/60 hover:text-black hover:underline' href="/signup">Don’t have an account? Register now</a>
                </div>

            </div>
        </div>
    )
}

export default LoginSignupCard