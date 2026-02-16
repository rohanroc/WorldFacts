import React from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { Outlet } from 'react-router-dom'
import HeroSection from './ui/HeroSection'
const AppLayout = () => {
    return (
        <>
            <Header />
            {/* <HeroSection /> */}
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout
