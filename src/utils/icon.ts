import React from "react";

export const sizes = {
  1: 'w-1 h-1',
  1.5: 'w-1.5 h-1.5',
  2: 'w-2 h-2',
  2.5: 'w-2.5 h-2.5',
  3: 'w-3 h-3',
  3.5: 'w-[28px] h-[28px]',
  4: 'w-4 h-4',
  5: 'w-5 h-5',
  6: 'w-6 h-6',
  7: 'w-7 h-7'
};

export type SizeProp =
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 4
  | 5
  | 6
  | 7

const path = '/icons/'

export enum IconsPath {

  Freelance = path + 'building-solid.svg',
  Location = path + 'map-pin-solid.svg',
  Music = path + 'music-solid.svg',
  UTC = path + 'utc.svg',
  Book = path + 'book-open-solid.svg',
  React = path + 'react-icon.svg',
  Astro = path + 'astro-icon.svg',
  NextJs = path + 'nextjs-icon.svg',
  Javascript = path + 'javascript-icon.svg',
  Tailwind = path + 'tailwind-icon.svg',
  Typescript = path + 'typescript-icon.svg'

}