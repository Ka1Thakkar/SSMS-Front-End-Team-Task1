'use client'
import Image from 'next/image';
import image1 from '../public/Assets/about_us_left_1.jpg'
import decoration from '../public/Assets/title_decoration.png'
import { DM_Serif_Display } from 'next/font/google'
import Link from 'next/link';
import {motion as m, useAnimation} from "framer-motion"
import { useInView } from 'framer-motion';

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const About = () => {
    return (
        <div className='md:grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 bg-bgcolorblue overflow-hidden gap-y-10'>
        <m.div
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.5, delay:0.5}}
        viewport={{once:true}}
        className=' bg-bgcolorblue'>
          <Image src={image1} style={{width: "100%", height:'100%', objectFit: "cover"}} quality={100} alt='Image 1'/>
        </m.div>
        <div className=' bg-bgcolorblue py-2 flex flex-col items-center justify-center'>
          <div className={dm.className}>
            <m.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1, delay:0.5}}
            viewport={{once:true}}
            className='flex justify-center'>
              <h1 className='text-4xl md:text-5xl'>ABOUT US</h1>
            </m.div>
          </div>
          <m.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1, delay:0.5}}
          viewport={{once:true}}
          className='flex justify-center py-3'>
            <Image src={decoration} height={75} width={150} quality={100} alt='title decoration' />
          </m.div>
          <m.p
          initial={{opacity:0, x:-150}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.5}}
          viewport={{once:true}}
          className=' text-center px-5 md:text-lg md:px-16'>
          Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.
          </m.p>
          <m.div
          initial={{opacity:0, x:-150}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:1, delay:0.5}}
          viewport={{once:true}}
          className={dm.className}>
            <div className='flex justify-center py-[35px]'>
              <Link href="https://americanalasvegas.com/las-vegas-americana-restaurant-about"><button className='w-[138.28px] h-[38px] text-[14px] text-white bg-buttonbgblue '>READ MORE</button></Link>
            </div>
          </m.div>
        </div>
    </div>
    );
}
 
export default About;