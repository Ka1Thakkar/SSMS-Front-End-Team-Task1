import Image from "next/image";
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
        <div className="md:flex">
            <Image src={image} layout='cover' quality={100} alt='Image 1' className="md:w-1/2 opacity-75 hover:opacity-100 transition-all ease-in-out" />
            <div>
                <div className="flex">
                    <Image src={image1} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image2} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image3} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                </div>
                <div className="flex">
                    <Image src={image4} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image5} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image6} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                </div>
                <div className="flex">
                    <Image src={image7} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image8} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                    <Image src={image9} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                </div>
            </div>
        </div>
        <div className="md:flex md:flex-row-reverse">
        <Image src={image10} layout='cover' quality={100} alt='Image 1' className="md:w-1/2 opacity-75 hover:opacity-100 transition-all ease-in-out" />
        <div>
            <div className="flex">
                <Image src={image5} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image3} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image7} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
            </div>
            <div className="flex">
                <Image src={image4} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image1} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
            </div>
            <div className="flex">
                <Image src={image2} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image6} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
                <Image src={image5} layout='cover' quality={100} alt='Image 1' className="w-1/3 opacity-75 hover:opacity-100 transition-all ease-in-out" />
            </div>
        </div>
    </div>
    </section>
    );
}
 
export default ImageGrid;