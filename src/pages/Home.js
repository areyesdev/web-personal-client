import React from 'react';
import MainBanner from '../components/web/MainBanner';
import HomeCourses from '../components/web/HomeCourses';
import HomeMyCoursesWork from '../components/web/HomeMyCoursesWork';
import ReviewsCourses from '../components/web/ReviewsCourses';

export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeCourses />
      <HomeMyCoursesWork />
      <ReviewsCourses />
    </>
  )
}