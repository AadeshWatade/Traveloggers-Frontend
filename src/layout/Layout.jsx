import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout