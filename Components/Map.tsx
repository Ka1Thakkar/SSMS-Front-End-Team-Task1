'use client'


import { useState } from 'react'
import Image from 'next/image'
import image from '../public/Assets/americana-las-vegas-map.jpg'

const Map = () => {
    return (
        <Image src={image} style={{height:'418px',objectFit:'cover'}} alt='...' quality={100} className=' w-full'/>
    )
}

export default Map;