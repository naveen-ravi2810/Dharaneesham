import React from 'react'
import bg_image from './../assets/BG-image.jpeg'
import profile from './../assets/Aboutpage.jpg'
import blenderlogo from './../assets/Logo/blenderlogo.jpeg'
import unitylogo from './../assets/Logo/UnityLogo.jpeg'
import editlogo from './../assets/Logo/EditLogo.jpeg'
import unreallogo from './../assets/Logo/UnrealengineLogo.jpeg'


export const About = () => {
  return (
    <div>


      <div id='styleandtopic' className='w-full h-96 pt-20 relative'>
        <img className='w-full h-full object-cover' src={bg_image} alt="Background" />
        <div className='absolute inset-0 flex pl-20 items-center'>
          <div className='text-white text-4xl text-center uppercase'>
            About Me
          </div>
        </div>
      </div>

      <hr />

      <div id="photoandcontent" className='flex justify-center py-32 gap-20'>
        <div><img src={profile} width={400}/></div>
        <div className='w-1/3'>
          <h1 className='text-3xl font-bold'>Game developer , Scripting ,Level design, Character design , Animator , 3D modeling</h1> <br /> <br />
          <p className='text-[24px]'>A Passionate Game developer, with hands on individual experience in C# scripting, Level design and 3D Modeling 
            a final year student pursuing artificial intelligence and data science engineering and a freelancer.</p> <br />
          <p className='text-[24px]'>I have skills in a number of software packages such as Unity, Blender, Maya, Unreal Engine 4, Adobe Photoshop,
             Adobe After Effects, Adobe Premiere Pro......</p>
        </div>
      </div>

      <div className='bg-[#2A2A2A] h-72 flex justify-center px-32  py-4'>
        <div className='flex justify-between'>
          <img src={unreallogo} alt="" />
          <img src={unitylogo} alt="" />
          <img src={blenderlogo} alt="" />
          <img src={editlogo} alt="" />
        </div>
      </div>


      <div id="knowledgeandexperience" className='pb-20'>
        <h1 className='text-center underline text-4xl py-20 font-bold'>KNOWLEDGE I EXPERIENCED</h1>
        <div className='flex px-32'>
          <div className='bg-[#E9FFFC] text-black p-8 w-2/3 rounded-xl'>
          <h1 className='text-3xl font-bold'>3D Model </h1> <br />
          <h3 className='text-3xl font-bold'>Game  - Character Model</h3> <br />
          <p className='text-[24px]'>I design the 2 Fully Equipped Soldier boys holding a Machine Gun character and 2  full equipped soldier 
          girls holding ghot gun and bag with ammo, water bottle.</p>
          </div>
          <div className='bg-[#FFE660] text-black p-8 w-1/3 rounded-xl'>
          <h1 className='text-3xl font-bold'>Freelance</h1> <br />
            <p className='text-[24px]'>Understanding the needs, behaviors, and attitudes of user and designed base product based on the 3D Design.
            3D Model, Environment Design, Animation</p>
          </div>
        </div>
      </div>

      <hr />

      <div className=' pb-20'>
        <h1 className='flex justify-center text-[40px] font-bold py-20'><p><p>5 Unity Games , 20+ Blender Designs & </p>
        <p className='pl-10'>2 Years of Individual experience</p></p></h1>

        <div className=' flex justify-center'>
          <div className='w-2/3 bg-[#B7B9C7] rounded bg-opacity-25 p-5'>
            <h1 className='text-[40px]'>PATH OF MY WORK</h1> <br />
            <p className='text-[24px]'>Forging pathways in game development, I merge creativity with technical skill to sculpt immersive digital 
              experiences. With expertise in 3D modeling and game design, I craft captivating worlds that captivate 
              players. Passionately innovating, I navigate the evolving landscape of gaming to create memorable interactive 
              adventures.</p>
          </div>
        </div>

      </div>

  </div>
  )
}
