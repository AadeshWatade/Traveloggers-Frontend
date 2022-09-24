import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex flex-row relative bg-[#151313]/70 text-white justify-between py-3 px-8 z-10'>
            <p className='text-logoColor text-3xl '>Traveloggers</p>
            <ul className='flex flex-row justify-end space-x-8 text-xl my-auto'>
                <li>About</li>
                <li>Our Services</li>
                <li>Blogs</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar