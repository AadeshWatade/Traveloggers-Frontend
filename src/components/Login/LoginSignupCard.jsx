import React from 'react'
import image from '../../assets/images/Rectangle 35.png'
import Input from './Input'
import borderImg1 from '../../assets/images/Group 42.png'
import borderImg2 from '../../assets/images/Group 43.png'

const LoginSignupCard = () => {
    return (
        <div className='grid grid-cols-2 justify-center z-10 mx-auto w-[60%] pt-16'>
            <div>

                <img className='' src={image} alt="" />
            </div>
            <div className='bg-[#00BCCA] p-10 text-center rounded-r-3xl'>
                <div className='relative'>
                    <img className='absolute left-4 -mt-2' src={borderImg1} alt="" />
                    <img className='absolute right-3 -mt-1 p-3' src={borderImg2} alt="" />
                    <h1 className='text-white text-3xl font-semibold'>TRAVELOGGERS</h1>
                </div>

                <p className='text-white text-2xl my-8'><i> Login</i></p>
                <div className='flex flex-col space-y-16 mt-16 mx-6'>

                    <Input placeholder='Enter Email/Username' type='text' />
                    <Input placeholder='Password' type='password' />
                </div>
                <p className='text-xs text-black/80 text-right mt-1 mx-6 hover:text-black hover:underline'>Forgot Password?</p>
                <div className='flex flex-col'>
                    <button className=' bg-white text-[#00BCCA] rounded-full px-16 py-2 mt-10 w-1/2 text-xl mx-auto'>Login</button>
                    <a className='text-xs my-2 text-black/60 hover:text-black hover:underline' href="/">Don’t have an account? Register now</a>
                </div>

            </div>
        </div>
    )
}

export default LoginSignupCard