import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYelp } from "react-icons/bs";

const dm = DM_Serif_Display({subsets:["latin"], weight:["400"]})

const Contact = () => {
    return (
        <section className={dm.className}>
            <div className="md:flex gap-x-20 lg:gap-x-40 bg-bgred md:justify-center md:text-left text-center text-white pt-[60px] pb-[40px]">
                <div>
                    <h1 className="lg:text-3xl text-xl">LOCATION</h1>
                    <p className="font-sans text-lg md:text-base lg:text-lg pt-5">
                        2620 Regatta Drive<br />
                        Las Vegas, NV<br />
                        89128
                    </p>
                </div>
                <div className="pt-10 md:pt-0">
                    <h1 className="lg:text-3xl text-xl">HOURS</h1>
                    <p className="font-sans text-lg md:text-base lg:text-lg pt-5">
                    Lunch 11:30AM-3:00PM Tuesday-Saturday<br/>
                    Brunch 11:00 AM- 3:00PM Sunday<br/>
                    Dinner Tuesday, Wednesday, Thursday,<br/> Sunday, 3:00PM-9:00PM<br/>
                    Dinner Friday & Saturday 3:00PM -9:30PM
                    </p>
                </div>
                <div className="pt-10 md:pt-0">
                    <h1 className="lg:text-3xl text-xl">FIND US ON</h1>
                    <div className=" flex text-2xl pt-5 gap-5 justify-center md:justify-start">
                        <Link href="https://www.instagram.com/americanalv/"><AiOutlineInstagram /></Link>
                        <Link href="https://www.yelp.com/biz/americana-las-vegas-2"><BsYelp /></Link>
                    </div>
                    <h1 className="lg:text-3xl text-xl pt-10">CONTACT US</h1>
                    <p className="font-sans text-lg md:text-base lg:text-lg pt-5">(702)-331-5565</p>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;