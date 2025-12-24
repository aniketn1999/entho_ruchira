import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router'
import FloatingWhatsApp from './Whatsapp'

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <main className='md:pt-20' >
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp/>
        </>
    )
}

export default AppLayout
