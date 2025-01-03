import React from 'react'
import Icon from './Icon'
import { label } from '@/app/styles/mix'

interface Props {

  iconPath?: string
  text: string
}

const Chip: React.FC<Props> = ({iconPath, text}) => {
  return (
    <div className='px-4 py-1 bg-primary-100 w-fit grid content-center rounded-xl cursor-pointer'>
      <div className={`inline-flex ${label} items-center gap-2`}>
      {iconPath && <Icon path={iconPath} size={2.5} fillColor='white'/>}
      {text}
      </div>
    </div>
  )
}

export default Chip