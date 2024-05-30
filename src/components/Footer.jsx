import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between mt-8'>
        <div className='w-full'>
            <p className='text-center'>
                @2024 Subhajit Manna | Contact: +918910443107 <span> All Rights Reserved</span>
            </p>
        </div>
        <div className='w-full'>
            <div className='flex space-x-5 justify-center'>
                <a href='/about'>About Me</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Licensing</a>
                <a href='/contact'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Footer