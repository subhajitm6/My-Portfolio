import React, { useState } from 'react'

const Service = () => {

const [details, setDetails]=useState([
    {
        title:"Web Developer",
        urls: "fa-brands fa-aws",
        detls: "I am a web developer dedicated to designing and building responsive, user-friendly websites. I specialize in front-end and back-end technologies, ensuring seamless and engaging digital experiences for users.",
        id: 1
    },
    {
        title:"Front-end Developer",
        urls: "fa-brands fa-uikit",
        detls: "I am a front-end developer focused on creating intuitive and dynamic user interfaces. With expertise in HTML, CSS, and JavaScript, I bring designs to life, ensuring seamless and engaging user experiences.",
        id: 2
    },
    {
        title:"Backend Developer",
        urls: "fa-solid fa-gears",
        detls: "I am a back-end developer specializing in server-side logic, database management, and API integration. I ensure robust and efficient application functionality, handling data processing and server communication seamlessly.",
        id: 3
    }
]);
  return (
    <div className='mt-4'>
        <h2 className='text-3xl font-semibold text-center'>My Service</h2>
        <div className='mt-8 flex text-black space-x-10 space-y-3'>
            {details.map((val)=>(
                <div key={val.id} className='border-2 p-4 rounded-xl border-gray-400 bg-gray-400 shadow-lg shadow-gray-500/50'>
                    <div className='flex justify-center'>
                        <a href="">
                            <i class={val.urls}></i>
                        </a>
                    </div>
                    <h2 className='text-center text-xl font-semibold mt-3'>{val.title}</h2>
                    <p className='mt-3 mb-2'>{val.detls}</p>
                    <a className='px-3 py-1 bg-orange-600 rounded-3xl text-sm' href="#">Click Me</a>
            </div> 
            ))}         
        </div>
    </div>
  )
}

export default Service