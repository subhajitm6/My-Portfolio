import React, { useState } from 'react'

const Skills = () => {
    const [exp, setExp]=useState([
        {
            skill: "Java",
            id: 1
        },
        {
            skill: "JavaScript",
            id: 2
        },
        {
            skill: "React Js",
            id: 3
        },
        {
            skill: "DSA",
            id: 4
        },
        {
            skill: "OOPs",
            id: 5
        },
        {
            skill: "Tailwind CSS",
            id: 6
        },
        {
            skill: "Node Js",
            id: 7
        },
        {
            skill: "DBMS",
            id: 8
        },
        {
            skill: "Python",
            id: 9
        },
        {
            skill: "Office 365",
            id: 10
        },
        {
            skill: "Power Apps",
            id: 11
        },
        {
            skill: "Sharepoint List",
            id: 12
        },
        {
            skill: "Power Automate",
            id: 13
        },
        {
            skill: "Azure",
            id: 14
        }
    ]);
  return (
    <div className='mt-6'>
        <h2 className='text-3xl font-semibold text-center'>My Skills</h2>
        <div className='flex items-center mt-6 bg-gradient-to-l from-yellow-400 via-green-500'>
            <div className='w-full flex justify-center bg-gradient-to-r from-red-600'>
                <div className='w-2/3 my-5'>
                    <h1 className='mt-4 text-5xl font-bold'>Subhajit Manna</h1>
                    <h2 className='mt-4 text-2xl font-bold'>I am a developer</h2>
                    <p className='mt-4'>I am a developer passionate about creating innovative solutions. I love coding, problem-solving, and bringing ideas to life through technology. Constantly learning and evolving, I thrive on building impactful applications.
                    </p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex justify-center flex-wrap w-2/3 h-fit space-x-3 text-black text-sm'>
                    {exp.map((val)=>(
                        <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer' key={val.id}>
                            {val.skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills