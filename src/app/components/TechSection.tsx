import React from 'react';
import TechChip from './TechChip';
import { IconsPath } from '@/utils/icon';
import * as motion from "motion/react-client"



const TechSection: React.FC = () => {
  const topRow = [{ text: 'NextJS', icon: IconsPath.NextJs }, { text: 'React', icon: IconsPath.React }, { text: 'Astro', icon: IconsPath.Astro }]
  const midRow = [{ text: 'Javascript', icon: IconsPath.NextJs },]

  return (
    <div className="border border-gray-300 border-opacity-30 bg-gray-300 bg-opacity-[0.01] backdrop-blur-sm rounded-xl hover:border-opacity-70 transition-all duration-200 ease-in-out p-2 md:p-4 overflow-hidden ">
      <div className='[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
        <div className='flex'>
          <motion.div className='flex flex-shrink-0' initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} >
            {topRow.map((item, index) => {
              console.log(item.icon)
              return (
                <TechChip text={item.text} iconPath={item.icon} key={index} />
              )
            })}
          </motion.div>
          <motion.div className='flex flex-shrink-0' initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} >
            {topRow.map((item, index) => {
              return (
                <TechChip text={item.text} iconPath={item.icon} key={index} />
              )
            })}
          </motion.div>
        </div>
        <div className='flex'>
          <motion.div className='flex flex-shrink-0' initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} >
            {midRow.map((item, index) => {
              console.log(item.icon)
              return (
                <TechChip text={item.text} iconPath={item.icon} key={index} />
              )
            })}
          </motion.div>
          <motion.div className='flex flex-shrink-0' initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} >
            {midRow.map((item, index) => {
              console.log(item.icon)
              return (
                <TechChip text={item.text} iconPath={item.icon} key={index} />
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;