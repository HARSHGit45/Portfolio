import React from 'react'
import { FaNodeJs, FaReact, FaJava, FaPhp } from 'react-icons/fa'
import { SiMongodb, SiTensorflow, SiKeras, SiDjango, SiExpress } from 'react-icons/si'
import {motion} from 'framer-motion'


const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "easeInOut"
    }
  }
})



const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
       className='my-20 text-center text-4xl'>TECHNOLOGIES</motion.h1>

      <motion.div
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-6xl text-green-500' />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-6xl text-green-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaReact className='text-6xl text-cyan-400' />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTensorflow className='text-6xl text-orange-500' />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiKeras className='text-6xl text-red-500' />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiDjango className='text-6xl text-green-600' />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-6xl text-red-400' />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial='initial'
        animate='animate'
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-6xl text-gray-200' />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPhp className='text-6xl text-purple-500' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technology
