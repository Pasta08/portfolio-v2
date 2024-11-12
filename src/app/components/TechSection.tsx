import React from 'react';
import TechChip from './TechChip';
import { titleMedium, textSmall } from '../styles/mix';


const TechSection = () => {
  const technologies = ['NextJs', 'Astro', 'Tailwind CSS', 'TypeScript', 'Astro', 'Tailwind CSS', 'TypeScript', 'Astro', 'Tailwind CSS', 'TypeScript', 'Astro', 'Tailwind CSS', 'TypeScript'];

  return (
    <div className="border border-gray-300 border-opacity-30 rounded-xl p-2 md:p-4">
      <div>
        <div className='flex justify-between'>
          <div className='flex'>
            icon
            <h2 className={`${titleMedium} mb-2`}>Tech Stack</h2>
          </div>
          <span className={`${textSmall}`}>some technologies I work with</span>
        </div>

        <div className="relative mt-4 overflow-hidden  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {/* Wrapper for the scrolling content */}
          <div className="flex animate-scroll hover:animate-scroll-paused ">
            {/* First set of items */}
            <div className="flex gap-4 shrink-0">
              {technologies.map((tech, index) => (
                <TechChip key={`tech-1-${index}`} text={tech} />
              ))}
            </div>
          </div>
          <div className="flex animate-scroll hover:animate-scroll-paused mt-2">
            {/* First set of items */}
            <div className="flex gap-2 shrink-0">
              {technologies.map((tech, index) => (
                <TechChip key={`tech-1-${index}`} text={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;