import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`flex flex-row top-0 fixed  text-white justify-between py-3 px-8 z-10 w-full ${isScrolled && 'bg-black'
            }`}>
            <p className='text-logoColor text-3xl '>Traveloggers</p>
            <ul className='flex flex-row justify-end space-x-8 text-xl my-auto'>
                <li><a href='/login'> Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar