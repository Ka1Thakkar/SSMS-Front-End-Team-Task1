import Image from "next/image";
import {motion as m} from 'framer-motion'
import image from "../public/Assets/full.jpg"
import image1 from "../public/Assets/about_us_right.jpg"
import image2 from "../public/Assets/about_us_left_1.jpg"
import image3 from "../public/Assets/about_us_left_2.jpg"
import image4 from "../public/Assets/_original.webp"
import image5 from "../public/Assets/full (1).jpg"
import image6 from "../public/Assets/medium.jpg"
import image7 from "../public/Assets/medium (1).jpg"
import image8 from "../public/Assets/medium (2).jpg"
import image9 from "../public/Assets/medium (3).jpg"
import image10 from "../public/Assets/full (2).jpg"

const ImageGrid = () => {
    return (
        <section className="bg-black">
        <div className="grid md:grid-flow-col md:grid-cols-5 md:grid-rows-1 grid-rows-5 grid-flow-row">
            <div className=" row-span-2 md:row-span-1 md:col-span-2 col-span-1 overflow-hidden">
                <Image src={image} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
            </div>
            <div className=" grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-flow-row md:grid-rows-2">
                <div className="overflow-hidden">
                    <Image src={image1} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image2} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
            <div className=" grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-flow-row md:grid-rows-2">
                <div className="overflow-hidden">
                    <Image src={image3} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image4} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
            <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-rows-2 md:grid-flow-row">
                <div className="overflow-hidden">
                    <Image src={image5} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image6} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
        </div>
        <div className="grid md:grid-flow-col md:grid-cols-5 md:grid-rows-1 grid-rows-5 grid-flow-row">
            <div className=" row-span-2 md:row-span-1 md:col-span-2 col-span-1 overflow-hidden">
                <Image src={image10} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
            </div>
            <div className=" grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-flow-row md:grid-rows-2">
                <div className="overflow-hidden">
                    <Image src={image7} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image8} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
            <div className=" grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-flow-row md:grid-rows-2">
                <div className="overflow-hidden">
                    <Image src={image9} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image2} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
            <div className="grid grid-flow-col grid-cols-2 md:grid-cols-1 md:grid-rows-2 md:grid-flow-row">
                <div className="overflow-hidden">
                    <Image src={image5} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
                <div className="overflow-hidden">
                    <Image src={image3} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default ImageGrid;




{/* <div className=" aspect-square overflow-hidden lg:w-1/2">
                <Image src={image} quality={100} alt='Image 1' style={{height : "100%", width : "100%", objectFit:"cover"}} className=" opacity-75 md:hover:opacity-100 transition-all md:hover:scale-110 duration-500" />
            </div>
            <div className="w-max">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="aspect-square overflow-hidden">
                        <Image src={image1} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                    <div className=" aspect-square overflow-hidden">
                        <Image src={image2} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                    <div className=" aspect-square overflow-hidden">
                        <Image src={image3} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                    <div className=" aspect-square overflow-hidden">
                        <Image src={image4} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                    <div className="aspect-square overflow-hidden">
                        <Image src={image5} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                    <div className=" aspect-square overflow-hidden">
                        <Image src={image6} style={{height:"100%", width:"100%", objectFit:"cover"}} quality={100} alt='Image 1' className=" opacity-75 md:hover:opacity-100 transition-all ease-in-out md:hover:scale-110 duration-500" />
                    </div>
                </div>
            </div> */}