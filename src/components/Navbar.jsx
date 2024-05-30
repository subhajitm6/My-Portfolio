import React, { useState } from 'react';
import Logo from '../assets/react.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import resume from '../assets/SubhajitMannaResume.pdf';


const Navbar = () => {

  

  useGSAP(()=>{
    var tl=gsap.timeline();
    tl.from('.logo',{
      opacity: 0,
      y: 30
    })

    tl.from('.val',{
      duration: 0.2,
      opacity: 0,
      y: -30,
      stagger: 1
    })

    tl.from('.btn',{
      duration: 0.2,
      opacity: 0,
      x: 30,
      stagger: 1
    })
  })

  const [menuitems, setMenuitems]=useState([
    {
      title: "Home",
      link: "/",
      id: 1
    },
    {
      title: "About",
      link: "/about",
      id: 2
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3
    },
    {
      title: "Contact",
      link: "/contact",
      id: 4
    }
  ]);
  return (
      <div className='bg-teal-950 h-fit rounded-2xl opacity-50 flex items-center justify-between pl-6 pr-6'>
        <div className='logo'>
          <img src={Logo} alt="sj" srcset=""/>
        </div>
        <div className='flex justify-center gap-10 p-4'>
          { menuitems.map((val)=>(
            <ul>
              <li className='hover:text-yellow-400 val'><a key={val.id} href={val.link}>{val.title}</a></li>
            </ul>
          ))}
        </div>
        <div className='flex justify-center gap-5'>
          <a href={resume} download='resume' className='border-2 border-white px-6 py-1 rounded-2xl bg-white text-black btn hover:cursor-pointer'>Resume</a>
          <button className='border-2 border-black px-6 py-1 rounded-2xl text-white btn'>Contact Me</button>
        </div>
      </div>
  )
}

export default Navbar