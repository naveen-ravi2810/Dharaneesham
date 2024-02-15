import React from 'react'
import HoleSizeGame from './../assets/videos/HoleSize.mp4'
import BoxGame from './../assets/videos/boxgame.mp4'
import ZombieGame from './../assets/videos/ZombiGame1.mp4'
import Spaceout from './../assets/videos/SpaceOut.mp4'
export const Project = () => {
  return (
    <div>

<div className=' snap-center p-[2rem] pb-10'>
      <div className='uppercase font-namefont text-5xl text-center bg-black text-white py-4' id="heading">UNITY PROJECTS</div>


      <div id="project2" className='flex py-[5rem] justify-center'>
          <p className='w-1/2 flex items-center text-2xl pr-8'>
            Create a captivating 3D space , allowing players to pilot customizable
            starships through a vast, visually stunning cosmic universe. Develop engaging spaceship
            controls, epic dogfights, and immersive celestial environments. Execute comprehensive
            testing, polish with effects and audio, and prepare for multi-platform release with
            ongoing marketing and support.
          </p>
          <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Spaceout game"
            src={Spaceout}
          />
      </div>


      <div id="project1" className='flex py-[5rem] justify-center'>
        <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Hole size game"
            src={HoleSizeGame}
          />
          <p className='w-1/2 flex items-center text-2xl pl-8'>
          orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore
          </p>
      </div>

      <div id="project2" className='flex py-[5rem] justify-center'>
          <p className='w-1/2 flex items-center text-2xl pr-8'>
            Create a captivating 3D space , allowing players to pilot customizable
            starships through a vast, visually stunning cosmic universe. Develop engaging spaceship
            controls, epic dogfights, and immersive celestial environments. Execute comprehensive
            testing, polish with effects and audio, and prepare for multi-platform release with
            ongoing marketing and support.
          </p>
          <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Box game"
            src={BoxGame}
          />
      </div>


      <div id="project1" className='flex py-[5rem] justify-center'>
        <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Zombie game"
            src={ZombieGame}
          />
          <div className='w-1/2 flex items-center text-2xl pl-8'>
            <p className=''>
            <h1 className='text-4xl font-bold underline uppercase'>Zombie game</h1>
              Developed a 3D Zombie game. Player can now navigate through an
              immersive world with dynamic features – walk, run, and jump while facing formidable
              zombie. The arsenal boasts 4 unique guns[AKM, Shot Gun, USI, Pistol] and a limited ammo
              supply, AKM it have Zoom-In and Zoom-Out option, Enemies pursue with cunning
              persistence, requiring sharp shooting skills to survive. There's an intense battle dynamic
              where players shoot enemies, and vice versa. Developed dark environment .
            </p>
          </div>
      </div>



    </div>



    </div>
  )
}
