import React from 'react'
import { SizeProp, sizes } from '@/app/utils/icon'

interface Props {
  path: string
  alt?: string
  size?: SizeProp
  wrapper?: string
  fillColor?: string
  animate?: 'zoom' | 'translate'
}


const Icon: React.FC<Props> = ({
  path,
  alt,
  size = 3,
  wrapper,
  fillColor = '#ffff',
  animate = ''
}) => {
  return (
    <div className={wrapper}>
      <svg className={`icon ${animate} ${sizes[size] || size}`}>
        <use
          href={`${path}`}
          style={{ '--fill': fillColor } as React.CSSProperties}
        />
      </svg>
    </div >
  )
}

export default Icon