import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { IoDocumentTextSharp } from "react-icons/io5";

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
          <div className='flex pt-10'>
            <a href='https://drive.google.com/file/d/1_xI5c9i_qzaZTyhnWJLx7n9g_S3K0Gxe/view?usp=drivesdk' download="Dharaneesh AM" rel="noreferrer" target='_blank'>
              <IoDocumentTextSharp size={70} />
              <p className='font-bold'>VIEW MY RESUME</p>
            </a>
          </div>
        </div>
        <div id="linkcontact" className='w-1/3 px-10 text-xl'>
          <h1 className='text-3xl pt-[50px] font-bold'>Links</h1>  <br />
          <Link to='/'><button >Home</button></Link> <br /> <br />
          <Link to='/about'><button >About</button></Link> <br /> <br />
          <Link to='/contact'><button >Contact</button></Link>
        </div>
        <div id="haveaquestioncontact" className='w-1/3 px-10 text-xl'>
          <h1 className='text-3xl pt-[50px] font-bold'>Have a Questions?</h1> <br />
          <Link to='mailto:dharaneeshrage@gmail.com' className='flex py-4 items-center gap-5'>
          <MdOutlineMail size={60}/> <p>Email <br/> dharaneeshrage@gmail.com</p>
          </Link>
          <Link to='https://www.linkedin.com/in/dharaneesh-a-m-bb5413237/' target='_blank' className='flex py-4 items-center gap-5'>
          <CiLinkedin size={90}/> <p> Linkedln  <br/> https://www.linkedin.com/in/dharaneesh-am-bb5413237/ </p>
          </Link>
          <Link to='https://github.com/DharaneeshAM' target='_blank' className='flex py-4 items-center gap-5'>
          <PiGithubLogoLight size={60}/> <p>GitHub  <br/> https://github.com/DharaneeshAM</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
