import Image from 'next/image';
import React from 'react';
import CourseChoices from './partials/CourseChoices';
import LabelAndFind from './partials/LabelAndFind';

function HomeView() {
  return (
    <div className='w-10/12'>
      <div className='flex flex-row gap-10'>
        <LabelAndFind />
        <Image src="/competition.png" width={350} alt="Competitions" height={300} />
      </div>
      <CourseChoices />
    </div>
  );
}

export default HomeView;