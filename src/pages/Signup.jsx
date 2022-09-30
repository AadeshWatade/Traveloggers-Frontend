import React from 'react'
import svg1 from "../assets/images/Vector 10 (1).svg"
import SignupCard from '../components/login signup/SignupCard'

const Signup = () => {
    return (
        <>
            <div className=''>
                <img className='hidden md:inline-block h-full absolute top-0 -z-10' src={svg1} alt="" />
                <SignupCard />
            </div>
        </>
    )
}

export default Signup