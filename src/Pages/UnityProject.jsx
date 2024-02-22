import React from 'react'
import Sequence from './../assets/videos/Sequence.mp4'
import BoxGame from './../assets/videos/boxgame.mp4'
import ZombieGame from './../assets/videos/ZombiGame1.mp4'
import Spaceout from './../assets/videos/SpaceOut.mp4'
import bg_image from './../assets/BG-image.jpeg'
import HoleSize from './../assets/videos/HoleSize.mp4'
import { Link } from 'react-router-dom'

export const UnityProject = () => {
  return (
    <div>

        <div id='styleandtopic' className='w-full h-96 pt-20 relative'>
            <img className='w-full h-full object-cover' src={bg_image} alt="Background" />
            <div className='absolute inset-0 flex pl-20 items-center'>
                <div className='text-white text-4xl text-center'>
                UNITY PROJECTS 
                </div>
            </div>
        </div>

        <div className='pl-52'>
            <h3 className='text-2xl pl-36'>
            My Work
            </h3> <br />
            <h1 className='text-4xl pl-36 font-bold'>
            Projects
            </h1> <br />
            <p className='text-3xl text-center font-bold'>
                "Bringing worlds to life through code and creativity."
            </p>
        </div>

        <br />

        <div className=' snap-center p-[2rem] pb-10 text-black'>
            <div id="project2" className='flex items-center py-[5rem] justify-center  bg-[#FFDB95]'>
                <p className='w-1/2 items-center text-2xl pr-8'>
                    <h1 className='text-4xl font-bold py-4'>GALACTIC ENCOUNTER </h1>
                    I have developed a 3D game. Players control a spaceship and
                    encounter various enemy spacecraft that attack them. Players can defend themselves
                    by engaging in combat and firing back at the enemy ships, accompanied by immersive
                    sound effects. The game features diverse outer space environments to provide players
                    with unique and engaging experiences.<br/>
                    <p className='font-bold py-2'>[Project Timeline : 5 day]</p>
                    <Link to='https://github.com/DharaneeshAM/Galactic-Encounter' className='text-blue-800' target='_blank'>__Github__Link__</Link>
                </p>
                <video className='w-[40%] h-1/2 ' autoPlay
                    playsInline
                    loop
                    muted
                    alt="Spaceout game"
                    src={Spaceout}
                />
            </div>

            <br />


            <div id="project1" className='flex py-[5rem] justify-center bg-[#FFE660]'>
                <video className='w-[40%] h-1/2 ' autoPlay
                    playsInline
                    loop
                    muted
                    alt="Zombie game"
                    src={ZombieGame}
                />
                <div className='w-1/2 flex items-center text-2xl pl-8'>
                    <p className=''>
                    <h1 className='text-4xl font-bold py-4 uppercase'>ROT RAMPAGE</h1>
                        Developed a 3D Zombie game. Player can now navigate through an
                        immersive world with dynamic features – walk, run, and jump while facing formidable
                        zombie. The arsenal boasts 4 unique guns[AKM, Shot Gun, USI, Pistol] and a limited
                        ammo supply, AKM it have Zoom-In and Zoom-Out option, Enemies pursue with
                        cunning persistence, requiring sharp shooting skills to survive. There's an intense battle
                        dynamic where players shoot enemies.
                        <p className='font-bold pt-2'>[Project Timeline : 18 day]</p>
                    </p>
                </div>
            </div>

            <br />

            <div id="project2" className='flex py-[5rem] justify-center items-center bg-[#FFDB95]'>
                <p className='w-1/2 text-2xl pr-8'>
                    <h1 className='text-4xl font-bold py-4 uppercase'>ONLY FRONT</h1>
                    I have developed a 3D game. In this game, players navigate through
                    multiple levels as a cube moves forward at varying speeds. Along the path, numerous
                    obstacles are placed. If the player touches any of these obstacles or falls off the road,
                    the game will automatically restart.
                    <p className='font-bold py-2'>[Project Timeline : 2 day]</p>
                    <Link to='https://github.com/DharaneeshAM/Only-Front-Game' className='text-blue-800' target='_blank'>__Github__Link__</Link>
                </p>
                <video className='w-[40%] h-1/2 ' autoPlay
                    playsInline
                    loop
                    muted
                    alt="Box game"
                    src={BoxGame}
                />
            </div>

            <br />

            <div id="project1" className='flex py-[5rem] justify-center bg-[#FFE660]'>
                <video className='w-[40%] h-1/2 ' autoPlay
                    playsInline
                    loop
                    muted
                    alt="Hole size game"
                    src={Sequence}
                />
                <div className='w-1/2 flex items-center text-2xl pl-8'>
                    <p className=''>
                    <h1 className='text-4xl font-bold py-4 uppercase'>BOX START END</h1>
                         A I have created a 3D puzzle game. The game consists of multiple
                        levels where players guide a cube from the starting point to the endpoint. Along the
                        way, players encounter various obstacles, including falling objects and rotating
                        obstacles. If the player touches one of these obstacles, the game stops and restarts.
                        The objective is to navigate through these challenges to reach the endpoint successfully
                        <p className='font-bold py-2'>[Project Timeline : 1 day]</p>
                        <Link to='https://github.com/DharaneeshAM/Box_start_end-game' className='text-blue-800' target='_blank'>__Github__Link__</Link>
                    </p>
                </div>
            </div>

            <br />

            <div id="project2" className='flex py-[5rem] justify-center items-center bg-[#FFDB95]'>
                <p className='w-1/2 text-2xl pr-8 flex justify-center'>
                    <div>
                    <h1 className='text-4xl font-bold py-4 uppercase'>DESERT RUNNER</h1>
                    <p className='font-bold text-3xl pt-2'>On Going Project</p>
                    </div>
                </p>
                <video className='w-[40%] h-1/2 ' autoPlay
                    playsInline
                    loop
                    muted
                    alt="Box game"
                    src={HoleSize}
                />
            </div>

        </div>

    </div>
  )
}
