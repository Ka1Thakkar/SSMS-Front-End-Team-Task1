import Image from "next/image";
import logo from "../public/Assets/spothopper-logo-new.png"
import Link from "next/link";

const PoweredBy = () => {
    return (
        <div className=" bg-buttonbgblue py-[30px] px-5">
            <div className="flex justify-center gap-2 items-center">
                <h1 className="text-white text-xl">Powered by:</h1>
                <Image src={logo} alt="..." height={175} width={175} />
            </div>
            <Link href="https://www.spothopperapp.com/contact-us?contact_reason=demo"><h1 className="text-white text-sm md:text-base text-center pt-5 underline">Website design, Social Media marketing and Email marketing provided by SpotHopper.</h1></Link>
        </div>
    );
}
 
export default PoweredBy;