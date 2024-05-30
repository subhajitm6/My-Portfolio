import React from 'react';
import ProfilePic from '../assets/pic2.jpeg';

const About = () => {
  return (
    <div className='mt-5'>
      <h2 className='text-3xl font-semibold text-center'>About Me</h2>
      <div className="flex items-center mt-8">
        <div className='w-full flex justify-center'>
              <img className='rounded-full shadow-lg w-fit h-[350px]' src={ProfilePic} alt="" srcset="" />
        </div>
        <div className='w-full flex justify-center'>
              <div className='w-2/3 my-5'>
                  <h3 className='text-4xl font-semibold'>Front-end Developer</h3>
                  <p className='mt-4'>I am a front-end developer passionate about crafting visually appealing and user-friendly interfaces. Utilizing HTML, CSS, and JavaScript, I bring design concepts to life, ensuring responsive and engaging user experiences.</p>

                  <p className='mt-4'>My expertise lies in creating seamless interactions and optimizing performance. I stay updated with the latest web technologies and trends, striving to deliver intuitive and efficient solutions that meet user needs and enhance usability.
                  </p>
                  <div className='my-4'>
                      <a className='px-5 py-2 bg-orange-600 rounded-3xl sadow-b-3xl' href="/contact">Contact Me</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About