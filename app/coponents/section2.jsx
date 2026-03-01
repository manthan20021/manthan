import { Bold, CircleDot, Dot, FileUser, Flag, Github, Globe, Linkedin, Mail, MapPin, MessageCircle, Phone, Plus, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import TechStackCard from './demo'

const Section2 = () => {

  const message = encodeURIComponent(
    "Hi Manthan, I’d love to work with you."
  );

  return (
    <div className='h-full  sm:w-115.75 w-full sm:mb-0 mb-3  flex flex-col items-center justify-between'>

      {/* numbers */}
      <div className='  w-full h-[112px] mb-3 sm:mb-0 flex items-center justify-between '>

        <div className=' relative mr-3 sm:mr-0 py-1.5 overflow-hidden w-[146.33] h-full bg-[#101010] border border-[#141414] rounded-lg flex flex-col items-center justify-around '>
          <div className="absolute  left-0 top-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#101010] via-[#101010]/50  to-transparent z-0 pointer-events-none">
          </div>
          <h1 className='sm:text-5xl text-2xl font-semibold text-gray-200 w-full flex items-center justify-center'>
            <span>02</span><Plus color="#773dff" />
          </h1>
          <button className='py-[2px] z-10 px-4  bg-[#141414] border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '>
            <Flag color="#773dff" />
            <span className=' text-white ml-1' >projects</span>
          </button>
        </div>

        <div className=' relative mr-3 sm:mr-0 py-1.5 overflow-hidden w-[146.33] h-full bg-[#101010] border border-[#141414] rounded-lg flex flex-col items-center justify-around '>
          <div className="absolute  left-0 top-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#101010] via-[#101010]/50  to-transparent z-0 pointer-events-none">
          </div>
          <h1 className='sm:text-5xl text-2xl font-semibold text-gray-200 w-full flex items-center justify-center'>
            <span>02</span><Plus color="#773dff" />
          </h1>
          <button className='py-[2px] z-10 px-4 text-sm bg-[#141414] border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '>
            <Globe color="#773dff" />
            <span className=' text-white ml-1 ' >Happy Clients</span>
          </button>
        </div>

        <div className=' relative  py-1.5 overflow-hidden w-[146.33] h-full bg-[#101010] border border-[#141414] rounded-lg flex flex-col items-center justify-around '>
          <div className="absolute  left-0 top-0 bottom-0 w-full h-20 bg-gradient-to-t from-[#101010] via-[#101010]/50  to-transparent z-0 pointer-events-none">
          </div>
          <h1 className='sm:text-5xl text-2xl font-semibold text-gray-200 w-full flex items-center justify-center'>
            <span>02</span><Plus color="#773dff" />
          </h1>
          <button className='py-[2px] z-10 px-4 text-sm bg-[#141414] border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '>
            <Star color="#773dff" />
            <span className=' text-white ml-1 ' >Year Expertise</span>
          </button>
        </div>
      </div>

      {/* hero section */}
      <div className='bg-[#101010]  border border-[#141414] w-full sm:h-[345px] h-auto sm:rounded-lg rounded-t-lg flex flex-col items-center justify-between py-7'>

        <div className='sm:w-[423px] sm:h-[101px] w-full h-full  flex items-center justify-between'>
          <Image
            src="/my2.png"
            alt='profil img'
            width={101}
            height={101}
            className=' sm:h-[101px] sm:w-[101px] h-16 w-16 rounded-lg bg-purple-500 sm:mr-0 mr-3 sm:ml-0 ml-3'
          />

          <div className='h-full w-[307px]  text-white'>
            <div className='h-9 w-full flex items-center justify-between '>
              <button className='w-[136px] h-9 px-2 text-sm bg-[#141414] border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '><span className='h-3 w-3 rounded-full bg-green-500' /> <span>Available To Work</span></button>
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Manthan R. Harale</h1>
              <p className='font-thin text-md text-purple-500 '>Full-Stack Developer</p>
            </div>
          </div>

        </div>


        {/* athor ditals */}
        <div className='sm:w-[423px] w-full rounded-md text-white p-3 h-[94px] border-[#1F1F1F] flex flex-wrap'>

          <button className=' h-9 px-2 mr-2 mb-2 border border-[#1f1f1f] bg-[#101010] rounded-md font-thin flex items-center justify-between  '>
            <MapPin color="#773dff" />
            <span className='text-sm'>Akola  Maharashtra</span>
          </button>

          <button className=' h-9 px-2  bg-[#101010] border border-[#1f1f1f] rounded-md font-thin  flex items-center justify-between  '>
            <Mail color="#773dff" />
            <span className='text-sm'>manthanharalecode@gmail.com</span>
          </button>

          <button className=' h-9 px-2 mr-2 bg-[#101010] border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '>
            <Phone color="#773dff" />
            <span className='text-sm'>9284899998</span>
          </button>

          <a href="https://github.com/manthan20021">
            <button className=' h-9 px-2  bg-[#101010] cursor-pointer border border-[#1f1f1f] rounded-md font-thin flex items-center justify-between  '>
              <Github color="#773dff" />
              <span className='text-sm'>GitHub</span>
            </button>
          </a>

        </div>


        {/* CAT Button */}
        <div className='sm:w-[423px] w-full px-2 mt-12 sm:mt-0  h-[50px] text-white flex items-center justify-between'>

          <a
            href={`https://wa.me/9284899998?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" 
              bg-[#1F1F1F] w-[200px]  h-full sm:mr-0 mr-1 rounded-md 
            "
          >
            <button className='bg-[#1F1F1F] w-[200px] cursor-pointer  h-full sm:mr-0 mr-1 rounded-md flex items-center justify-center'>
              <MessageCircle color="#773dff" />
              <span className='ml-2'>WhatsApp Me</span>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/manthan-harale-04a469276/"
            className=" 
              bg-[#1F1F1F] w-[200px]  h-full sm:mr-0 mr-1 rounded-md 
            "
          >
            <button className='bg-[#1F1F1F] cursor-pointer sm:w-[200px] h-[50px] px-2 rounded-md flex items-center justify-center'>
              <Linkedin color="#773dff" />
              <span className='ml-2'>Connect</span>
            </button>
          </a>
        </div>
      </div>

      <div className='bg-[#101010] overflow-hidden w-full h-[243px] sm:rounded-lg rounded-b-lg'>

        <TechStackCard />

      </div>
    </div>
  )
}

export default Section2
