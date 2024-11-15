import React from 'react';
import TechChip from './TechChip';
import { titleMedium, textSmall } from '../styles/mix';

type RowConfig = {
  technologies: string[];
  animationClass: string;
};

type ScrollingRowProps = {
  technologies: string[];
  animationClass: string;
};

const ScrollingRow: React.FC<ScrollingRowProps> = ({ technologies, animationClass }) => (
  <div className="mt-3 relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <div className="flex gap-3">
      <div className={`flex gap-3 ${animationClass}`}>
        {technologies.map((tech, index) => (
          <TechChip key={`${tech}-${index}`} text={tech} />
        ))}
      </div>
      <div className={`flex gap-3 ${animationClass}`} aria-hidden="true">
        {technologies.map((tech, index) => (
          <TechChip key={`${tech}-duplicate-${index}`} text={tech} />
        ))}
      </div>
    </div>
  </div>
);

const TechSection: React.FC = () => {
  const rowConfigs: RowConfig[] = [
    {
      technologies: ['NextJs', 'Astro', 'Tailwind CSS', 'Astro'],
      animationClass: 'animate-scroll'
    },
    {
      technologies: ['NextJs', 'Astro', 'Tailwind CSS', 'Astro'],
      animationClass: 'animate-scroll-delayed-1'
    },
    {
      technologies: ['NextJs', 'Astro', 'Tailwind CSS', 'Astro'],
      animationClass: 'animate-scroll'
    }
  ];

  return (
    <div className="border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[0.01] backdrop-blur-sm rounded-xl hover:border-opacity-70 transition-all duration-200 ease-in-out p-2 md:p-4">
      <div>
        <div className="flex justify-between">
          <div className="flex">
            icon
            <h2 className={`${titleMedium} mb-2`}>Tech Stack</h2>
          </div>
          <span className={`${textSmall}`}>some technologies I work with</span>
        </div>
        
        {rowConfigs.map((config, index) => (
          <ScrollingRow
            key={`row-${index}`}
            technologies={config.technologies}
            animationClass={config.animationClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TechSection;