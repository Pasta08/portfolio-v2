import { sizes } from '@/app/utils/icon';
import React from 'react';

interface Props {
  path: string;
  alt?: string;
  size?: SizeProp;
  wrapper?: string;
  fillColor?: string;
  animate?: 'zoom' | 'translate';
}


type SizeProp = keyof typeof sizes;

const Icon: React.FC<Props> = ({
  path,
  alt = '',
  size = 3,
  wrapper = 'inline-block',
  fillColor = '#fff',
  animate,
}) => {
  return (
    <div className={`${wrapper} ${animate === 'zoom' ? 'hover:scale-110 transition-transform duration-300' : ''} ${animate === 'translate' ? 'hover:-translate-y-1 transition-transform duration-300' : ''}`}>
      <img
        src={path}
        alt={alt}
        style={{fill: fillColor}}
        className={`${sizes[size]}`}
      />
    </div>
  );
};

export default Icon;