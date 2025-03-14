import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'


const Navbar = () => {
  const socialLinks = [
    { icon: <FaGithub size={25} />, url: 'https://github.com/HARSHGit45' },
    { icon: <FaLinkedin size={25} />, url: 'https://www.linkedin.com/in/harshal-mali-87800729a/' },
    { icon: <FaInstagram size={25} />, url: 'https://www.instagram.com/harshal_.45/' },
    { icon: <FaXTwitter size={25} />, url: '?' }
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full  backdrop-blur-sm shadow-sm z-50"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-4xl font-thick text-white p-2 cursor-pointer"
          >
           HM
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 } 
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
