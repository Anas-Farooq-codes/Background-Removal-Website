import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-1 border-gray-400 pl-4  md:text-lg text-gray-500 max-sm:hidden'>Copyright <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'><a href="https://www.linkedin.com/in/anas-farooq06/">@AnasCodes</a></span> | All rights reserved </p>
        <div className='flex gap-1'>
            <a href=""><img width={40} src={assets.facebook_icon} alt="facebook" /></a>
            <a href=""><img width={40} src={assets.twitter_icon} alt="twitter" /></a>
            <a href=""><img width={40} src={assets.google_plus_icon} alt="google" /></a>
        </div>
    </div>
  )
}

export default Footer