'use client'
import Image from 'next/image'
import image from '../public/Assets/about_us_right.jpg'
import decoration from '../public/Assets/title_decoration.png'
import { DM_Serif_Display } from 'next/font/google'
import { Parisienne } from 'next/font/google'
import Link from 'next/link'
import {motion as m} from 'framer-motion'

const paris = Parisienne({subsets: ['latin'], weight:['400']})

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const Catering = () => {
    return (
        <div className='md:flex md:flex-row-reverse md:items-center md:h-[471px] overflow-hidden'>
        <m.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
        viewport={{once:true}}
        className='md:w-1/2 md:px-10 lg:px-20'>
          <Image src={image} style={{width: "100%", height:'100%', objectFit: "cover"}} quality={100} alt='Image 1'/>
        </m.div>
        <div className=' bg-white py-7 md:w-1/2'>
          <div className={dm.className}>
            <m.div
            initial={{opacity:0}}
            whileInView={{opacity:10}}
            transition={{duration:1, delay:0.5}}
            viewport={{once:true}}
            className='flex justify-center'>
              <h1 className='text-4xl md:text-5xl'>CATERING</h1>
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
          <m.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1, delay:0.5}}
          viewport={{once:true}}
          className={paris.className}>
            <h1
            className='text-center py-2 text-xl md:text-2xl text-buttonbgblue'>Let us cater your next event</h1>
          </m.div>
          <m.p
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1, delay:0.75}}
          viewport={{once:true}}
          className=' text-center px-10 md:text-lg md:px-20'>
          We Cater your Needs. Elegant style of catering for your style and budget. Any kind of event from weddings to birthdays.
          </m.p>
          <m.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:1, delay:1}}
          viewport={{once:true}}
          className={dm.className}>
            <div className='flex justify-center py-[35px]'>
              <Link href="https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F&source=footer"><button className='w-[138.28px] h-[38px] text-[14px] text-white bg-bgred '>CATERING</button></Link>
            </div>
          </m.div>
        </div>
    </div>
    );
}
 
export default Catering;