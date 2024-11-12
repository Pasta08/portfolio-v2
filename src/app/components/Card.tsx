import React from 'react'
import Chip from './common/Chip'

interface Props {
  text: string
  chipText: string
}

const Card: React.FC<Props> = ({text, chipText}) => {
  return (
    <div className='border w-full border-gray-300 border-opacity-30 rounded-xl px-2 py-5 flex justify-center items-center flex-col'>
      {text}
      <Chip text={chipText}/>
    </div>
  )
}

export default Card