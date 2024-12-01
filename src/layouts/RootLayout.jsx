import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='min-h-[calc(100vh-690px)]'>
      <Outlet/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default RootLayout
