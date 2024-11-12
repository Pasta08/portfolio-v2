import React from 'react'
import Chip from './common/Chip'
import Image from 'next/image'
import Button from './common/Button'
import { titleLarge } from '../styles/mix'
import { IconsPath } from '../utils/icon'

const Intro = () => {
  return (
    <div className='border-[1px] p-2 border-gray-300 border-opacity-30 rounded-xl md:p-4 bg-gray-400 bg-opacity-[0.01] backdrop-blur-sm'>
      <div className='flex gap-2 items-center md:gap-4'>
        <div className=''>
          <Image src={'/images/profile-pic.png'} alt='profile' width={75} height={75} />
        </div>
        <div className='h-fit'>
          <h1 className={`${titleLarge}`}>Ethan Bone Ortega</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 mt-4 md:mt-8'>
        <Chip text='Freelancer' iconPath={IconsPath.Freelance} />
        <Chip text='Italy' />
        <Chip text='Music Addict' />
        <Chip text='UTC+2' />
        <Chip text='Italian & English' />
        <Chip text='Reader' />
      </div>
      <div className='flex flex-col items-center justify-center mt-8 gap-3'>
        <Button text='Get in touch' primary/>
        <Button text='About me'/>
      </div>
    </div>
  )

}

export default Intro