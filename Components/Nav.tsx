import Image from "next/image";
import Logo from "../public/Assets/Logo.png"
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsYelp} from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import { DM_Serif_Display } from "next/font/google";
import Link from "next/link";

const dm = DM_Serif_Display({subsets:['latin'], weight:['400']})

const Nav = () => {
    return (
        <div className={dm.className}>
        <div className="fixed top-0 left-0 z-50 w-full bg-white">
            <div className=" bg-white text-navbartext h-[71px] md:h-[96px] sticky lg:px-[80px] md:py-[10px]">
            <div className="flex justify-between items-center p-[10px]">
                <div className="my-auto">
                    <Image src={Logo} height={130} width={130} alt="Restaurant logo" quality={100} />
                </div>
                <div className="flex pt-2 text-3xl md:gap-5 items-center">
                    <div className="md:flex hidden md:visible gap-3 lg:gap-5 text-base items-center">
                        <Link href="https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu"><h1 className="hover:text-bgred transition-all ease-in-out">MENU</h1></Link>
                        <Link href="https://americanalasvegas.com/las-vegas-americana-restaurant-drink-menu"><h1 className="hover:text-bgred transition-all ease-in-out">DRINKS</h1></Link>
                        <Link href="https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><h1 className="hover:text-bgred transition-all ease-in-out">CATERING</h1></Link>
                        <Link href="https://americanalasvegas.com/las-vegas-americana-restaurant-events"><h1 className="hover:text-bgred transition-all ease-in-out">EVENTS</h1></Link>
                        <Link href="https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><h1 className="hover:text-bgred transition-all ease-in-out">PARTIES</h1></Link>
                        <Link href="https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=f14ad166-eef5-4429-a767-52c24734e15d"><h1 className="hover:text-bgred transition-all ease-in-out">RESERVE</h1></Link>
                        <Link href="https://tmt.spotapps.co/job-listings?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><h1 className="hover:text-bgred transition-all ease-in-out">JOBS</h1></Link>
                        <h1 className=" text-bgred text-2xl font-bold">|</h1>
                    </div>
                    <div className="text-lg my-auto hover:bg-bgred hover:text-white p-1 transition-colors ease-in-out">
                        <Link href="https://www.instagram.com/americanalv/"><AiOutlineInstagram /></Link>
                    </div>
                    <div className="text-lg my-auto hover:bg-bgred hover:text-white p-1 transition-colors ease-in-out">
                        <Link href="https://www.yelp.com/biz/americana-las-vegas-2"><BsYelp /></Link>
                    </div>
                    <div className="md:hidden">
                        <RxHamburgerMenu />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
 
export default Nav;