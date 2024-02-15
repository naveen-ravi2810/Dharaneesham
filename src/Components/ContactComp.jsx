import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";

export const ContactComp = () => {
  return (
    <div className='py-10'>
      <div className='flex justify-center'>
      <p className='text-[40px] font-bold'>Contact Me</p>
      </div>
      <div className='flex justify-between px-20 pt-5 text-xl'>
        <div id="aboutmecontact" className='pr-44'>
          <h1 className='text-3xl pt-[50px] font-bold'>About me</h1> <br />
          <p>I blend entertainment and education in 
            game design using C#, Unity Engine, and 
            Blender, with expertise in 3D modeling, 
            animation, and more.</p>
        </div>
        <div id="linkcontact" className='w-1/3 px-10 text-xl'>
          <h1 className='text-3xl pt-[50px] font-bold'>Links</h1>  <br />
          <Link to='/'><button >Home</button></Link> <br /> <br />
          <Link to='/about'><button >About</button></Link> <br /> <br />
          <Link to='/project'><button>Project</button></Link> <br /> <br />
          <Link to='/contact'><button >Contact</button></Link>
        </div>
        <div id="haveaquestioncontact" className='w-1/3 px-10 text-xl'>
          <h1 className='text-3xl pt-[50px] font-bold'>Have a Questions?</h1> <br />
          <p className='flex pb-4 items-center gap-5'>
          <MdOutlineMail/> <p>Email{"-->"}dharaneeshrage@gmail.com</p>
          </p>
          <p className='flex py-4 items-center gap-5'>
          <CiLinkedin/> <p> Linkedln{"-->"} https://www.linkedin.com/in/dharaneesh-am-bb5413237/ </p>
          </p>
          <p className='flex py-4 items-center gap-5'>
          <PiGithubLogoLight/> <p>GitHub {"-->"}https://github.com/DharaneeshAM</p>
          </p>
        </div>
      </div>
    </div>
  )
}
