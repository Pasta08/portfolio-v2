import React from 'react'

interface Props {
  text: string
  primary?: boolean
}

const Button: React.FC<Props> = ({ text, primary }) => {

  const getBorderColor = () => {

    if(primary) return 'border-success'
    else return 'border-gray-300'

  }

  return (
    <div className={`border-[1px] ${getBorderColor()} border-opacity-30 rounded-xl py-1 px-2 flex justify-center w-full s:w-[90%]`}>
      {text}
    </div>
  )
}

export default Button