import React from 'react'
import bg_image from './../assets/BG-image.jpeg'
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const Contact = () => {
  return (
    <div>


      <div id='styleandtopic' className='w-full h-96 pt-20 relative'>
        <img className='w-full h-full object-cover' src={bg_image} alt="Background" />
        <div className='absolute inset-0 flex pl-20 items-center'>
          <div className='text-white text-4xl text-center uppercase'>
            Get in Touch
          </div>
        </div>
      </div>

        <div className='py-32'>
          <div className='bg-[#FFE660] justify-center gap-52 py-20 text-black flex px-20'>
            <Link to='mailto:dharaneeshrage@gmail.com'>
              <div className='flex justify-center'><GoMail className='rounded-full bg-white p-3' size={60} color='black' /></div>
              <h1 className='text-2xl py-5 text-center'>Email</h1>
              <h3 className='text-xl'>dharaneeshrage@gmail.com</h3>
            </Link>
            <Link to='https://www.linkedin.com/in/dharaneesh-a-m-bb5413237/' target='_blank'>
              <div className='flex justify-center'><CiLinkedin className='rounded-full bg-white p-3' size={60} color='black'/></div>
              <h1 className='text-2xl py-5 text-center'>LinkedIn</h1>
              <h3 className='text-xl'> Dharaneesh A.M</h3>
            </Link>
            <Link to='https://github.com/DharaneeshAM' target='_blank'>
              <div className='flex justify-center'><FaGithub className='rounded-full bg-white p-3' size={60} color='black'/></div>
              <h1 className='text-2xl py-5 text-center'>Github</h1>
              <h3 className='text-xl'> DharaneeshAM</h3>
            </Link>
            <Link to='https://www.instagram.com/dharaneesh_rage_/' target='_blank'>
              <div className='flex justify-center'><FaInstagram className='rounded-full bg-white p-3' size={60} color='black'/></div>
              <h1 className='text-2xl py-5 text-center'>Instagram</h1>
              <h3 className='text-xl'>dharaneesh_rage</h3>
            </Link>
          </div>
        </div>

    </div>
  )
}
