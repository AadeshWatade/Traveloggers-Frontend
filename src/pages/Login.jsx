import React from 'react'
import svg1 from "../assets/images/LoginSignupSvg.svg"
import LoginSignupCard from '../components/Login/LoginSignupCard'
const Login = () => {
    return (
        <div className='relative top-0'>
            <img className='h-screen absolute -z-10' src={svg1} alt="" />
            <LoginSignupCard />
        </div>
    )
}

export default Login