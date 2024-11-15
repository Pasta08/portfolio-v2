'use client'
import React, { useState } from 'react'
import { Experience, experiences } from '../data/data'
import { subTitle, textMedium, textSmall } from '../styles/mix'
const WorkExperience = () => {

  const [selectedWork, setSelectedWork] = useState<number>(0)
  const [selectedWorkData, setSelectedWorkData] = useState<Experience>(experiences[0])

  const handleSelection = (item: Experience, index: number) => {
    setSelectedWork(index)
    setSelectedWorkData(item)
  }


  const renderSelect = () => {
    return experiences.map((item, index) => {
      const isSelected = selectedWork === index
      return (
        <div key={`job n: ${index}`}
          className={`border-[1px] p-2 border-gray-300 ${isSelected ? 'border-opacity-70' : 'border-opacity-30'} rounded-lg cursor-pointer hover:border-opacity-70 transition-all duration-200 ease-in-out`}
          onClick={() => handleSelection(item, index)}>
          <h2 className={`${subTitle} `}>{item.companyName}</h2>
          <span className={`${textSmall} text-gray-300`}>{item.status}</span>
        </div>
      )
    })
  }

  return (
    <div className='flex md:gap-3 px-1 justify-center'>
      <div className='flex-col gap-2 md:gap-3 hidden md:flex md:w-1/3 min-w-[148px]'>
        {renderSelect()}
      </div>
      <div className='border-[1px] px-3 py-2 border-gray-300 border-opacity-70 rounded-lg w-full md:max-h-[300px] md:overflow-y-scroll custom-scrollbar'>
        <h2 className={subTitle}>{selectedWorkData.role}</h2>
        <div className='mt-2'>
          <p className={`${textMedium} text-gray-300`}>{selectedWorkData.roleDescription}</p>
        </div>
        <div className='mt-2'>
          <p className={`${textMedium} text-gray-300`}>{selectedWorkData.roleDescription}</p>
        </div>
        <div className='mt-2'>
          <p className={`${textMedium} text-gray-300`}>{selectedWorkData.roleDescription}</p>
        </div>
        <div className='mt-2'>
          <p className={`${textMedium} text-gray-300`}>{selectedWorkData.roleDescription}</p>
        </div>
        <div className='mt-4 mx-auto bg-gray-300 w-full h-[1px]'>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience