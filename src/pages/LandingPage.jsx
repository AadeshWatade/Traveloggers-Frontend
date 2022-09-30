import React from 'react'
import Footer from '../common/Footer'
import HeroSection from '../components/landing page/HeroSection'
import TopBlogs from '../components/landing page/TopBlogs'
import WhyTraveloggers from '../components/landing page/WhyTraveloggers'

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <WhyTraveloggers />
            <TopBlogs />
            <Footer />
        </>
    )
}

export default LandingPage