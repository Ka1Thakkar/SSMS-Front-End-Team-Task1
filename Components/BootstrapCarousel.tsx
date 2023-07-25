import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import image1 from '../public/Assets/about_us_left_1.jpg'
import image2 from '../public/Assets/about_us_right.jpg'
import image3 from '../public/Assets/about_us_left_2.jpg'
import image4 from '../public/Assets/_original.webp'

const contentStyle: React.CSSProperties = {
  height: '650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const BootstrapCarousel: React.FC = () => (
  <Carousel autoplay className='bg-black'>
    <div className=' opacity-60'>
      <div className='relative'>
        <h1 className='text-white'></h1>
      </div>
      <Image src={image1} style={{width: "100%", height:'650px'}} layout='cover' quality={100} alt='Image 1' className='relative' />
    </div>
    <div className=' opacity-60'>
      <Image src={image2} style={{width: "100%", height:'650px'}} layout='cover' quality={100} alt='Image 1' />
    </div>
    <div className=' opacity-60'>
      <Image src={image3} style={{width: "100%", height:'650px'}} layout='cover' quality={100} alt='Image 1' />
    </div>
    <div className=' opacity-60'>
      <Image src={image4} style={{width: "100%", height:'650px'}} layout='cover' quality={100} alt='Image 1' />
    </div>
  </Carousel>
);

export default BootstrapCarousel;