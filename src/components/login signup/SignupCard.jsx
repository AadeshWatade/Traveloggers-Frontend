import React from 'react'
import Input from './Input'
import aborderImg2 from '../../assets/images/Group 45.svg'


const SignupCard = () => {
    return (
        <div className='bg-acccentColor p-10 text-center rounded-xl justify-center z-10 mx-auto w-[60%] my-12'>
            <div className='relative'>
                <img className='mx-auto' src={aborderImg2} alt="" />
            </div>

            <p className='text-white text-2xl my-5'><i> Sign up</i></p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 mx-10'>

                <Input placeholder='Enter Full Name' type='text' />
                <Input placeholder='Enter Email' type='text' />
                <Input placeholder='Enter State' type='text' />
                <Input placeholder='Enter City' type='text' />
                <Input placeholder='Enter Password' type='password' />
                <Input placeholder='Confirm Password' type='password' />
            </div>
            <p className='text-xs text-black/80 text-right mt-1 mx-6 hover:text-black hover:underline'>Forgot Password?</p>
            <div className='flex flex-col'>
                <button className=' bg-white text-acccentColor rounded-full px-16 py-2 mt-10 w-1/2 text-xl mx-auto'>Signup</button>
                <a className='text-xs my-2 text-black/60 hover:text-black hover:underline' href="/login">Already have an account? Login</a>
            </div>

        </div>
    )
}

export default SignupCard