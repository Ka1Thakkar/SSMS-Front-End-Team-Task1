'use client'
import Image from 'next/image'
import {MdLocationPin} from'react-icons/md'
import About from '@/Components/About'
import Catering from '@/Components/Catering'
import {motion as m} from 'framer-motion'
import MyMap from '@/Components/Map'

import { DM_Serif_Display } from 'next/font/google'
import Parties from '@/Components/Parties'
import Reservation from '@/Components/Reservations'
import ReviewsComp from '@/Components/ReviewsComp'
import Newsletter from '@/Components/Newsletter'
import BootstrapCarousel from '@/Components/BootstrapCarousel'
import ImageGrid from '@/Components/ImageGrid'
import Contact from '@/Components/Contact'
import PoweredBy from '@/Components/PoweredBy'
import Link from 'next/link'

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

export default function Home() {
  return (
    <div className='md:pb-0 pb-10 overflow-x-hidden'>
      <video autoPlay id="coverVideo" loop muted playsInline poster="https://static.spotapps.co/web/americanalasvegas--com/custom/video_poster.jpg" className='w-full h-full'>
        <source src="https://static.spotapps.co/website_videos/Americana_Website_Intro_EditedVideo_01142022_Vimeo720p30.m4v" type="video/mp4" />
      </video>
      <div className='text-white bg-bgred text-xl py-5 md:flex md:justify-center md:items-center lg:py-[30px] gap-2'>
        <m.div
        initial={{opacity:0, y:-50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.2}}
        viewport={{once:true}}
        className='flex justify-center md:text-2xl'>
          <MdLocationPin />
        </m.div>
        <div className='flex justify-center pt-2'>
          <h1 className='text-white text-base md:text-xl'>2620 Regatta Drive, Las Vegas, NV 89128</h1>
        </div>
      </div>
      <About />
      <div className=' lg:py-20 flex flex-col gap-y-5 md:gap-y-20'>
        <Catering />
        <Parties />
      </div>
      <BootstrapCarousel />
      <Reservation />
      <ImageGrid />
      <ReviewsComp />
      <div className='lg:flex'>
        <div className='lg:w-1/2'>
          <Newsletter />
        </div>
        <div className='lg:w-1/2'>
          <MyMap />
        </div>
      </div>
      <Contact />
      <PoweredBy />
      <div className='md:flex bg-bggray text-white gap-2 text-base md:justify-center py-5'>
        <h1 className='text-center'>We strive to make our websites accessible to everybody. 
        <Link href="https://americanalasvegas.com/accessibility-page-01"><div className='underline font-bold'>Learn More.</div></Link></h1>
      </div>
    </div>
  )
}
