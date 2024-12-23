import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className='w-11/12 m-auto'>
        {/* navbar */}
        <Navbar/>
        <Outlet/>
    </div>
  )
}
