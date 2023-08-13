'use client'
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import image1 from '../public/Assets/about_us_left_1.jpg'
import image2 from '../public/Assets/about_us_right.jpg'
import image3 from '../public/Assets/about_us_left_2.jpg'
import image4 from '../public/Assets/_original.webp'

import { DM_Serif_Display } from 'next/font/google';
import Link from 'next/link';

const dm = DM_Serif_Display({weight:['400'], subsets:['latin']})

const contentStyle: React.CSSProperties = {
  height: '650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const food = [
  {
    image : image1,
    text : "AMERICANA'S AUTHENTIC DISHES",
    buttontext : "OUR MENU",
    link: "https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu"
  },
  {
    image : image2,
    text : "SERVED TO PERFECTION",
    buttontext : "CATERING",
    link: "https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F"
  },
  {
    image : image3,
    text : "AUTHENTIC TASTE IN EVERY DISH",
    buttontext : "OUR MENU",
    link: "https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu"
  },
  {
    image : image4,
    text : "HOST YOUR NEXT PARTY WITH US",
    buttontext : "PARTIES",
    link: "https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F"
  },
]

const BootstrapCarousel: React.FC = () => (
  <Carousel autoplay infinite className='bg-black'>
    {food.map((images, key) => (
      <div className={ dm.className + ' h-[72.5vh] w-[600px] relative overflow-hidden'}>
        <div className='bg-black h-full w-full absolute bg-opacity-40 z-10'></div>
        <Image src={images.image} alt='' style={{width:"100vw",height:'100vh', objectPosition: '50% 50%', objectFit: 'cover'}} quality={100} className='absolute' />
        <div className="absolute bottom-1/3 px-4 py-3 w-full flex flex-col justify-start items-center z-20">
          <h1 className="text-white text-3xl px-10 sm:px-28 md:px-0 md:text-6xl pb-10 text-center">{images.text}</h1>
          <Link href={images.link} target='_blank'>
            <button className='text-white bg-bgred py-2 px-7 text-base md:text-xl'>
              {images.buttontext}
            </button>
          </Link>
        </div>
      </div>
    ))}
  </Carousel>
);

export default BootstrapCarousel;