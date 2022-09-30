import React from 'react'
import svg1 from "../assets/images/LoginSvg.svg"
import LoginCard from '../components/login signup/LoginCard'
const Login = () => {
    return (
        <div className='relative top-0'>
            <img className='hidden md:inline-block h-screen absolute -z-10' src={svg1} alt="" />
            <LoginCard />
        </div>
    )
}

export default Login