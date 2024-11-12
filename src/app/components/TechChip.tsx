import React from 'react'
import { label } from '../styles/mix'

interface Props {
  text: string
  iconPath?: string
}

const TechChip: React.FC<Props> = ({text, iconPath}) => {
  return (
    <div className={`${label} min-w-40 border-[1px] p-2 border-gray-300 border-opacity-30 bg-primary-200 rounded-xl px-4`}>{text}</div>
  )
}

export default TechChip