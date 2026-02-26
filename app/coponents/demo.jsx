"use client"
import { Cpu } from 'lucide-react';
import React from 'react';

export default function TechStackCard() {
  const techStackRow1 = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' }
  ];

  const techStackRow2 = [
    { name: 'Git/GitHub', icon: '🐙' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'TypeScript', icon: '📘' }
  ];

  // Duplicate the arrays for seamless infinite scroll
  const duplicatedRow1 = [...techStackRow1, ...techStackRow1, ...techStackRow1];
  const duplicatedRow2 = [...techStackRow2, ...techStackRow2, ...techStackRow2];

  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="relative h-full overflow-hidden   w-full max-w-4xl">
        {/* Card with transparent background and box shadow */}
        <div
          className="relative  h-full pt-2.5 "
        >
          <div className="absolute  left-0 top-0 bottom-0 w-30 bg-gradient-to-r from-[#101010] via-[#101010]/30 to-transparent z-10 pointer-events-none"></div>

          <div className="absolute right-0 top-0 bottom-0 w-30 bg-gradient-to-l from-[#101010] via-[#101010]/30 to-transparent z-10 pointer-events-none"></div>
          {/* Title */}
          <h2 className="text-xl text-white text-center mb-8 mt-2 flex items-center justify-center">
            <Cpu color="#773dff" /> <span className='ml-1'>Tech Stack</span>
          </h2>

          {/* First Row - Scrolling Left to Right */}
          <div className="relative overflow-hidden mb-6">


            {/* Animated Tech Stack Row 1 */}
            <div className="flex gap-4 animate-scroll-right">
              {duplicatedRow1.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex bg-[#151515] shadow-xl shadow-black  items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 group"

                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Right to Left */}
          <div className="relative overflow-hidden">


            {/* Animated Tech Stack Row 2 */}
            <div className="flex gap-4 animate-scroll-left">
              {duplicatedRow2.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-[#151515] shadow-xl shadow-black flex items-center gap-2 px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 group"

                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-white text-sm font-medium whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }

        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}