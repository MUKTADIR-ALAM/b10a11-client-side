import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div>
      <div className='w-11/12 m-auto'>
        {/* navbar */}
        <Navbar/>
        <div className='min-h-screen my-2'><Outlet/></div>
    </div>
    <Footer/>
    </div>
  )
}
