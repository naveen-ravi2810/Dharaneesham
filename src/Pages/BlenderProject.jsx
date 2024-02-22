import React from 'react';
import bg_image from './../assets/BG-image.jpeg';
import soldiergirl from './../assets/Blender/SoldierGirl.png';
import soldierboy from './../assets/Blender/SoldierBoy.png';
import dinosour from './../assets/Blender/Dinosur.png';
import GRIMACE from './../assets/Blender/Octopus.png';
import Monkey from './../assets/Blender/Monkey.png';
import Environment from './../assets/Blender/Environment.png';

export const BlenderProject = () => {
  return (
    <div className=''>

        <div id='styleandtopic' className='w-full h-96 pt-20 relative'>
          <img className='w-full h-full object-cover' src={bg_image} alt="Background" />
          <div className='absolute inset-0 flex pl-20 items-center'>
            <div className='text-white text-4xl text-center uppercase'>
              Blender Projects
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

        <div id='soldiergirl' className='pt-52 flex relative justify-center pr-20'>
          <div className='bg-[#FFE660] rounded-3xl h-96 w-1/2 text-3xl text-black text-right pt-[150px] pr-48 font-bold'>
            <p>IRON GIRL </p>
            <p>3D MODEL</p>
          </div>
          <img className='absolute bottom-0 left-96' src={soldiergirl} alt="Soldier Girl" />
        </div>

        <div id='soldierboy' className='relative flex pt-72 justify-center pr-20'>
          <img className='absolute bottom-0 right-[500px]' src={soldierboy} alt="Soldier Boy" />
          <div className='bg-[#FFDB95] rounded-3xl h-96 w-1/2 text-3xl text-black text-left pt-[150px] pl-48 font-bold'>
            <p>IRON BOY </p>
            <p>3D MODEL</p>
          </div>
        </div>


        <div id='dinosour' className='pt-52 flex relative justify-center pr-20'>
          <div className='bg-[#FFE660] rounded-3xl h-96 w-1/2 text-3xl text-black text-right pt-[150px] pr-48 font-bold'>
            <p>DINOSAUR </p>
            <p>3D MODEL</p>
          </div>
          <img width={1500} height={700} className='absolute bottom-0 pr-52 h-[600px]' src={dinosour} alt="dinosour" />
        </div>


        <div id='GRIMACE' className='relative flex pt-72 justify-center'>
          <img width={1500} className='absolute bottom-0 right-20 pl-96 ' src={GRIMACE} alt="GRIMACE" />
          <div className='bg-[#FFDB95] rounded-3xl h-96 w-1/2 text-3xl text-black text-left pt-[150px] pl-20 font-bold'>
            <p>GRIMACE </p>
            <p>3D MODEL</p>
          </div>
        </div>


        <div id='Monkey' className='pt-52 flex relative justify-center pr-20'>
          <div className='bg-[#FFE660] rounded-3xl h-96 w-1/2 text-3xl text-black text-right pt-[150px] pr-48 font-bold'>
            <p>MONKEY </p>
            <p>3D MODEL</p>
          </div>
          <img className='absolute bottom-0 pr-52 h-[600px]' src={Monkey} alt="Monkey" />
        </div>


        <div className='py-52 flex relative justify-center pr-20 '>
          <div className='bg-[#FFE660] w-1/2 pt-10 px-10 rounded-3xl'>
            <img src={Environment} alt='Environment' className=''/>
            <div className='text-center text-black text-3xl py-5 font-bold'>
              <p>ENVIRONMENT</p>
              <p>MODEL</p>
            </div>
          </div>
        </div>


    </div>
  )
}
