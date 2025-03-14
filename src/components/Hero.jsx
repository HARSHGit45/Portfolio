import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profile from '../assets/1724984648273.jpeg'
import {motion} from 'framer-motion'

const container = (delay) => ({
  hidden: {opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    }
  }
})


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 '>
      <div className='flex flex-wrap pt-36'>
        <div className='w-full lg:w-1/2 pt-18'>
          <div className='flex flex-col item-center lg:items-start '>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='text-6xl pb-16 font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >
              Harshal Mali
            </motion.h1>
          
            <motion.span
            
            variants={container(0.5)}
              initial='hidden'
              animate='visible'

             className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer | AI/ML Enthusiast
            </motion.span>

            <motion.p
            
            variants={container(1)}
              initial='hidden'
              animate='visible'


             className='my-2 max-w-xl py-6 font-light tracking-tighter'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img 
            initial={{ x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{duration: 1, delay: 1.2}}
              src={profile} 
              alt='profile' 
              className='w-full  max-w-sm rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
