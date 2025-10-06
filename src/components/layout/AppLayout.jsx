import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <main className='pt-20'>
            <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AppLayout
