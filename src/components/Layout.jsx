import React from 'react'
import Navbar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='bg-stone-50 h-screen font-mono'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
