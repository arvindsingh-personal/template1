import { Divider } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';
import CarouselRatio from './Slider';
import Feed from './Feed';

export default function instagram() {
  return (
    <>
    <Navbar/>
    <CarouselRatio />
    <Divider />
    <Feed />
    </>
  )
}
