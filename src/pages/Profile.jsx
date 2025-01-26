import React from 'react'
import {Facebook,Twitter,Github,Instagram  } from 'lucide-react';
import racoon from '../assets/image.png'

const Profile = () => {
  return (
    <>
    <div className='flex flex-col place-items-center h-screen bg-gradient-to-br from-blue-950  via-purple-950 to-red-950 font-white '>
    <div className=' h-4/5 w-96 flex flex-col mt-14 border-1 border-transparent place-items-center p-1 rounded-2xl hover:border-purple-700 transition duration-300 bg-black/40 backdrop-blur-md shadow-xl
'>  
      <div >
        <img className='w-48 h-48 mt-5 rounded-full bg-white transition-transform 
        duration-300 ease-in-out hover:scale-110' src={racoon} alt="/"/>
      </div>
      {/*icons for social media */}
          <div className='flex flex-row text-white gap-6 mt-2 py-4'>
          <span className='p-3 hover:bg-black hover:rounded-full transition-transform duration-300 ease-in-out hover:scale-105' ><Facebook /></span>
          <span className='p-3 hover:bg-black hover:rounded-full transition-transform duration-300 ease-in-out hover:scale-105'><Twitter /></span>
          <span className='p-3 hover:bg-black hover:rounded-full transition-transform duration-300 ease-in-out hover:scale-105'><Github /></span>
          <span className='p-3 hover:bg-black hover:rounded-full transition-transform duration-300 ease-in-out hover:scale-105'><Instagram /></span>
          </div>
        {/*description */}
        <div>
        <p className='text-white p-3 m-3'> This is a racoon's profile 
          there is nothing much else about it, 
          thats all it is and always will be</p>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Profile