'use client'
import React, { useState } from 'react'
import { Experience, experiences } from '../data/data'
import { subTitle, textMedium, textSmall } from '../styles/mix'
import Chip from './common/Chip'


const highlightedWords = ["Next.js", "TypeScript", "React", "Spring Boot", "Sass", "Node.js", "REST", "efficient", "specific designs", "client requirements"] as const;

const highlightText = (text: string, wordsToHighlight: readonly string[]) => {
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi"); // Matches any word in the list (case-insensitive)
  const parts = text.split(regex); // Split the text by the highlighted words

  return parts.map((part, index) =>
    wordsToHighlight.includes(part) ? (
      <span key={index} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const WorkExperience = () => {
  const [selectedWork, setSelectedWork] = useState<number>(0);
  const [selectedWorkData, setSelectedWorkData] = useState<Experience>(experiences[0]);

  const handleSelection = (item: Experience, index: number) => {
    setSelectedWork(index);
    setSelectedWorkData(item);
  };

  const renderSelect = () => {
    return experiences.map((item, index) => {
      const isSelected = selectedWork === index;
      return (
        <div
          key={`job n: ${index}`}
          className={`flex-shrink-0 border-[1px] p-2 border-gray-300 ${isSelected ? "border-opacity-80" : "border-opacity-30"
            } rounded-lg cursor-pointer hover:border-opacity-70 transition-all duration-200 ease-in-out`}
          onClick={() => handleSelection(item, index)}
        >
          <h2 className={`${subTitle} `}>{item.companyName}</h2>
          <span className={`${textSmall} text-gray-300`}>{item.status}</span>
        </div>
      );
    });
  };
  const renderSelectMobile = () => {
    return experiences.map((item, index) => {

      return (
        <div key={`job n: ${index}`}>

        </div>
      )
    })
  }

  return (
    <div className="md:flex md:gap-3 px-1 justify-center">
      <div className="flex overflow-y-scroll md:overflow-auto md:flex-col gap-2 md:gap-3 md:w-1/3 min-w-[148px]">
        {renderSelect()}
      </div>
      <div className="px-2 md:px-4 py-2 border-none md:border-solid md:border-[1px] md:border-gray-300 md:border-opacity-70 rounded-lg w-full md:max-h-[300px] md:overflow-y-scroll custom-scrollbar">
        <h2 className={subTitle}>{selectedWorkData.role}</h2>
        <div className="mt-2">
          <p className={`${textSmall} text-gray-300`}>
            {highlightText(selectedWorkData.roleDescription, highlightedWords)}
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-4" />
        <h2 className={`${subTitle} mt-3`}>Most used technologies:</h2>
        <div className="flex flex-wrap gap-2 mt-3 md:mt-3">
          {selectedWorkData.mostUsedTechnologies.map((item, index) => {
            return <Chip key={index} text={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
