import React from 'react'
import profile from './../assets/Dharaneesh.jpeg'
import ZombieGame from './../assets/videos/ZombiGame1.mp4'
import Spaceout from './../assets/videos/SpaceOut.mp4'
import HomeBlender1 from './../assets/HomeBlender1.png'
import HomeBlender2 from './../assets/HomeBlender2.png'
import { Link } from 'react-router-dom'
export const Home = () => {
    const page = "home"
  return (
    <div>

       <div id="HelloContent" className='flex justify-center py-20'>
        <div className='w-1/3 px-20 '>
            <p className='text-[26px]'>Hello , It’s me</p>
            <p className='text-[38px]'>DHARANEESH A.M</p>
            <p className='pt-20 text-[24px]'>I blend entertainment and education in game design using C#, Unity 
                Engine, and Blender, with expertise in 3D modeling, animation, and more.</p>
        </div>
        <div>
            <img className='rounded-full' src={profile} width={330}/>
        </div>
       </div>

       <hr />

       <div id="AboutmeContent" className='flex justify-between p-16 gap-6'>
            <div id='photo' className='w-1/3 justify-end flex h-1/2 pt-20'>
                <img src={profile} className='' width={300} height={50}/>
            </div>
            <div className='w-2/3 px-20'>
                <h1 className='text-[40px] font-bold'>About Me</h1> <br />
                <h2 className='text-[36px]'>Game Developer , 3D Designer  </h2> <br />
                <p className='text-[24px]'>As a Game Developer with individual 2 years of experience. With a huge skills in 
                    Deliver high-Quality games that entertain and educate players. My professional 
                    skills such as C#, 3D, 2D, 3D designer with a passion for transforming imagination 
                    into digital reality. Proficient in Blender encompass various aspects of 3D Animation, 
                    modeling, rigging, including Environment Design(Unity).Currently. I'm working Under Unity 
                    Engine and Blunder Graphics Software.</p> <br />
                <h2 className='text-[36px] font-bold'>My Skills </h2> <br />
                <div className='grid grid-cols-5 w-[60%]'>
                    <p><img width={80} src='https://academyclass.com/wp-content/uploads/2021/10/ACCL-Unity-3D.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png'/></p>
                    <p><img width={80} src='https://sonda-autodeskvad.com/assets/images/badges/autodesk-maya-product-icon.svg'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/100px-The_C_Programming_Language_logo.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png'/></p>
                    <p><img width={80} src='https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png'/></p>
                    <p><img width={60} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png'/></p>
                    <p><img width={80} src='https://lh3.googleusercontent.com/proxy/iCxQl0VGpDRfFrLRo8QPK1-GvcTwfLKLg6RLhlPVxCPqguYnxi_QeP2JBsOQ6p2Jm7xkXTLQJK09NcpLul8gHrbHoH-9B7zsILuUFe3ulJ8'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1200px-Adobe_Premiere_Pro_CC_icon.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png'/></p>
                    <p><img width={80} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1200px-Adobe_After_Effects_CC_icon.svg.png'/></p>
                </div>
            </div>
        </div>

        <hr />

        <div id="unity">
        <div>
        <div
        className='h-[660px] w-full bg-no-repeat bg-cover bg-fit bg-fit bg-left bg-fixed pt-10'
        style={{ backgroundImage: 'url(src/assets/UnityBack.jpg)'}}
      >
      </div>
      <div className=''>
        <div id="title" className='py-10 bg-'>
          <h1 className='text-6xl font-bold text-center text-'>UNITY</h1>
        </div>
        <div id="BlenderContent" className=" p-10 gap-16 px-20">
                <div className='flex justify-center gap-20'>
                <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Zombie game"
            src={ZombieGame}
          />
                    <div className='w-1/3 '>
                        <h1 className='text-5xl'>Zombie Dark Night</h1> <br />
                        <p className='text-[28px]'>Its the survival game with Embarking on an environment design for zombie. 
                            Player has the different gun's stuff. The environment have late of 
                            zombies they will attack the player. Player can shoot the zombies.</p>
                        <div className='flex py-6 justify-center'>
                            <div className='text-[28px]'>
                                <p>{">> "}c#</p>
                                <p>{">> "}Environment design</p>
                                <p>{">> "}Level design</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br /> <br /> <br />
                <div className='flex justify-center gap-20'>
                    <div className='w-1/3 '>
                        <h1 className='text-5xl'>Space Out</h1> <br />
                        <p className='text-[28px]'>Its the outer open space game. The player spaceship will attack by 
                        the different verity spaceship. player can attack the enemy ship.</p>
                        <div className='flex py-6 justify-center'>
                            <div className='text-[28px]'>
                                <p>{">> "}c#</p>
                                <p>{">> "}Environment design</p>
                                <p>{">> "}Spaceship design </p>
                                <p>{">> "}Level design</p>
                            </div>
                        </div>
                    </div>
                    <video className='w-[40%] h-1/2 ' autoPlay
            playsInline
            loop
            muted
            alt="Zombie game"
            src={Spaceout}
          />
                </div>
            </div>
            <div className='justify-center flex pb-10'>
            <Link className='bg-[#09E2FF] p-1' to='/unity'><button className='px-10 py-3 bg-black text-white text-2xl rounded-full'>Visit Here</button></Link>
          </div>
      </div>
    </div>
        </div>


        <div>
      <div
        className='w-full h-[660px] bg-no-repeat bg-cover bg-left bg-fixed py-10'
        style={{ backgroundImage: 'url(src/assets/BlenderBack.jpg)' }}
      >
      </div>
      <div className=''>
        <div id="title" className='py-10 bg-'>
          <h1 className='text-6xl font-bold text-center text-'>BLENDER</h1>
        </div>
        <div id="BlenderContent" className="justify-center p-10 gap-16 px-20 text-4xl">
                <div className='flex justify-center items-center gap-20'>
                    <img
                        src={HomeBlender1} 
                        alt="Image 1"
                        className='md:w-[40%]'
                    /> 
                    <div>
                        <h1></h1>HOSTEL ROOM 3D MODEL
                    </div>
                </div>
                <br />
                <div className='flex justify-center items-center  gap-56'>
                    <div>
                        <h1 className='uppercase'>CAR 2 Helicopter model</h1>
                    </div>
                    <img
                    src={HomeBlender2} 
                    alt="Image 2"
                    className='md:w-[40%]'
                />
                </div>
            </div>
          <div className='justify-center flex pb-10'>
            <Link className='bg-[#09E2FF] p-1' to='/blender'><button className='px-10 py-3 bg-black text-white text-2xl rounded-full'>Visit Here</button></Link>
          </div>
      </div>
    </div>



    </div>
  )
}
