import React from 'react'
import { label } from '../styles/mix'
import Icon from './common/Icon'
import { IconsPath } from '@/utils/icon'

interface Props {
  text: string
  iconPath?: string
}

const TechChip: React.FC<Props> = ({text, iconPath = ''}) => {
  return (
    <div className={`mx-2 ${label} border-[1px] p-2 border-gray-300 border-opacity-30 bg-primary-200 rounded-xl px-4  flex items-center justify-center gap-2`}><Icon size={5} path={iconPath}/>{text}</div>
  )
}

export default TechChip