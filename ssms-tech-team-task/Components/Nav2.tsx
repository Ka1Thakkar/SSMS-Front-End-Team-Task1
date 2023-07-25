import { DM_Serif_Display } from 'next/font/google'
import Link from 'next/link';

const montserrat = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const Nav2 = () => {
    return (
        <div className={montserrat.className}>
        <div className="fixed bottom-0 left-0 z-50 w-full h-12 bg-white">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium items-center">
                <Link href="https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=f14ad166-eef5-4429-a767-52c24734e15d"><button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <span className="text-md text-black font-medium hover:text-bgred">Reserve</span>
                </button></Link>
                <Link href="https://tmt.spotapps.co/job-listings?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <span className="text-md text-black font-medium hover:text-bgred">Jobs</span>
                </button></Link>
                <Link href="https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <span className="text-md text-black font-medium hover:text-bgred">Parties</span>
                </button></Link>
                <Link href="https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"><button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                    <span className="text-sm text-black font-medium hover:text-bgred">Catering</span>
                </button></Link>
            </div>
        </div>
        </div>
    );
}
 
export default Nav2;