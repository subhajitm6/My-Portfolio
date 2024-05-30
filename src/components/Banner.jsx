import React from 'react';
import bannerImg from '../assets/pic1.jpeg';
import Typed from "typed.js";
import { useEffect, useRef } from "react";



const Banner = () => {

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Front-end Developer", "Back-end Developer", "Full Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 15,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='flex items-center mt-8'>
        <div className='w-full flex justify-center bg-gradient-to-r from-indigo-600'>
            <div className='w-2/3 my-5 dets'>
                <h3 className='text-3xl font-semibold'>Hi, I'm</h3>
                <h1 className='mt-4 text-5xl font-bold'>Subhajit Manna</h1>
                <h2 className='mt-4 text-2xl font-bold'>I am a <span className='text-bold text-green-400' ref={el}></span></h2>
                <p className='mt-4'>I am a versatile developer skilled in front-end, back-end, and full-stack development. I integrate user-friendly interfaces with robust server-side logic, creating comprehensive, efficient, and dynamic applications end-to-end.
                </p>
                <div className='mt-4 flex gap-5'>
                    <a href="https://www.facebook.com/sj.manna.7" className='hover:text-orange-500'>
                        <i class="fa-brands text-2xl fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/imsubhajit.m/" className='hover:text-orange-500'>
                        <i class="fa-brands text-2xl fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/subhajit-manna-1608651a9/" className='hover:text-orange-500'>
                        <i class="fa-brands text-2xl fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/subhajitm6" className='hover:text-orange-500'>
                        <i class="fa-brands text-2xl fa-github"></i>
                    </a>
                </div>
                <div className='my-4'>
                    <a className='px-5 py-2 bg-orange-600 rounded-3xl sadow-b-3xl' href="/contact">Contact Me</a>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <img className='rounded-full shadow-lg w-fit h-[350px]' src={bannerImg} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Banner