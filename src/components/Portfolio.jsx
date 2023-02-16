import React from 'react'
import project1 from '../assets/portfolio/educalc.png'
import project2 from '../assets/portfolio/gym.png'
import project3 from '../assets/portfolio/nodeaid.png'
import project4 from '../assets/portfolio/recipe.png'
import project5 from '../assets/portfolio/zani.png'
import project6 from '../assets/portfolio/reactSmooth.jpg'

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Portfolio = () => {

  const portfolioItems = [
    {
      id:1,
      src: project1, 
    },
    {
      id:2,
      src: project2, 
    },
    {
      id:3,
      src: project3, 
    },
    {
      id:4,
      src: project4, 
    },
    {
      id:5,
      src: project5, 
    },
    {
      id:6,
      src: project6, 
    },
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

        <motion.div 
             variants={fadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.9 }} className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Here are some of the projects I have worked on.</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0' >


        {
          portfolioItems.map(({id, src}) => (
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
             key={id} className='shadow-md shadow-gray-400 rounded-lg'>
              <img src={src} alt="" srcset="" className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center'>
                <button className='w-1/2 px-4 py-1 m-2 duration-200 hover:scale-105'>Demo</button>
                <button className='w-1/2 px-4 py-1 m-2 duration-200 hover:scale-105'>Code</button>
              </div>
            </motion.div>
        
          ))
        }
        </div>
   

      </div>
    </div>
  )
}

export default Portfolio