import React from 'react'
import Chip from './common/Chip'
import { IconsPath } from '@/utils/icon'

interface Props {
  text: string
  chipText: string
}

const Card: React.FC<Props> = ({text, chipText}) => {
  return (
    <div className='text-white border w-full border-gray-300 border-opacity-30 rounded-xl hover:border-opacity-70 transition-all duration-200 ease-in-out px-2 py-5 flex justify-center items-center flex-col'>
      {text}
      <Chip text={chipText}/>
    </div>
  )
}

export default Card