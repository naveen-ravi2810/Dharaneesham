import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation();
    const path = location.pathname.split("/").pop();
  return (
    <div className='flex justify-between text-2xl px-20'>
        <div className='text-2xl uppercase'>Dharaneesh A.M</div>
        <div></div>
        <div></div>
        <div></div>
        <Link to='/'><button className={`${path===""?'underline':''}`}>Home</button></Link>
        <Link to='/about'><button className={`${path==="about"?'underline':''}`}>About</button></Link>
        <Link to='/project'><button className={`${path==="project"?'underline':''}`}>Project</button></Link>
        <Link to='/contact'><button className={`${path==="contact"?'underline':''}`}>Contact</button></Link>
    </div>
  )
}
