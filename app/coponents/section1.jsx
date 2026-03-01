import { SheetSide } from '@/components/AboutBtn'
import ForbesCard from '@/components/Offers'
import { Download, FileUser, FolderKanban } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div className='h-full w-86 flex flex-col items-center justify-between '>

      {/* works */} 
      <div className='bg-[#101010] overflow-hidden mb-3 sm:mb-0 relative border border-[#141414] w-full h-57.75 rounded-lg'>

        <div className="absolute  left-0 top-0 bottom-0 w-full  bg-gradient-to-t from-[#101010] via-[#101010]/30  to-transparent z-10 pointer-events-none"></div>
        {/* heding section */}
        <div className='w-full flex flex-col items-center justify-center pt-3 '>
          <h1 className='w-full h-auto flex items-center justify-center'>
            <FolderKanban color="#773dff" />
            <span className='font-thin ml-1 text-sm text-gray-400'>projects</span>
              </h1>
              <h2 className='text-xl text-white'>
                Works Gallery
              </h2>
        </div>

        {/* project img section */}
        <div className='w-full h-20 top-8 relative'>
          
          <div className='w-full h-0.75 px-2 mt-8 flex items-center justify-between '>
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/project2.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={120}
          height={90}
          alt='project img'
          src="/project.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/project3.png"
          className='bg-gray-800 rounded-lg'
          />
        </div>
        <Link href="/Projects">
        <button className='h-10 cursor-pointer w-50 z-10 rounded-md bg-[#773dff] text-white absolute top-10  left-17.5 '>View Works</button>
        </Link>
        </div>
        

      </div>
      
      {/* about */}
      <div className=' relative bg-[#101010] border mb-3 sm:mb-0 border-[#141414] w-full h-57.75 rounded-lg flex flex-col items-center justify-center '>

        <div className="absolute  left-0 top-0 bottom-0 w-full  bg-gradient-to-t from-[#101010] via-[#101010]/30  to-transparent z-10 pointer-events-none"></div>
        
         {/* heding section */}
        <div className=' relative w-full flex flex-col items-center justify-center mt-3 mb-3'>
          
          <h1 className='w-full h-auto flex items-center justify-center'>
            <FolderKanban color="#773dff" />
            <span className='font-thin ml-1 text-sm text-gray-400'>About</span>
              </h1>
              <h2 className='text-xl text-white'>
                Biography
              </h2>
        </div>

          <div className='w-full h-20.75 px-2 mt-8 flex items-center justify-between '>
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/2.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={120}
          height={90}
          alt='project img'
          src="/3.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/2.png"
          className='bg-gray-800 rounded-lg'
          />
        </div>
    
          <SheetSide/>
        
      </div>

      {/* resume section */}
       <div className='bg-[#101010] overflow-hidden mb-3 sm:mb-0 relative border border-[#141414] w-full h-57.75 rounded-lg'>

        <div className="absolute  left-0 top-0 bottom-0 w-full  bg-gradient-to-t from-[#101010] via-[#101010]/30  to-transparent z-10 pointer-events-none"></div>
        {/* heding section */}
        <div className='w-full flex flex-col items-center justify-center mt-2'>
          <h1 className='w-full h-auto flex items-center justify-center'>
            <FileUser color="#773dff" />
            <span className='font-thin ml-1 text-sm text-gray-400'>Resume</span>
              </h1>
              <h2 className='text-xl text-white'>
               My Resume
              </h2>
        </div>

        {/* resume img section */}
        <div className='w-full h-20 relative top-4.5'>
          
          <div className='w-full h-20.75 px-2 mt-8 flex items-center justify-between '>
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/resume1.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={120}
          height={90}
          alt='project img'
          src="/resume2.png"
          className='bg-gray-800 rounded-lg'
          />
          <Image
          width={90}
          height={70}
          alt='project img'
          src="/resume3.png"
          className='bg-gray-800 rounded-lg'
          />
        </div>

        <a href="https://docs.google.com/document/d/1aObb2AhOEqwt7rFXbx1zu6yhaJU1xImEQaqRcmnR_OE/edit?usp=sharing">
        <button className='h-10 w-50 z-10 rounded-md bg-[#773dff] text-white absolute top-15 left-17.5 flex items-center justify-center '>
          <Download/> <span className='ml-1'>Resume</span>
          </button>
          </a>
        </div>
        </div>
      
      
    </div>
  )
}

export default Section1
