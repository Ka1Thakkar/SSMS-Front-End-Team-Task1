import { DM_Serif_Display } from 'next/font/google'
import { Parisienne } from 'next/font/google'

const paris = Parisienne({subsets: ['latin'], weight:['400']})

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const Newsletter = () => {
    return (
        <section className=' bg-bgcolorblue flex flex-col pt-[45px] pb-[45px] justify-center h-full md:px-20 xl:px-40 2xl:px-52 px-10'>
            <div className={dm.className}>
                <h1 className='text-center lg:text-left text-4xl pb-[10px] lg:text-6xl'>NEWSLETTER</h1>
            </div>
            <div className={paris.className}>
                <p className='text-xl lg:text-left md:text-3xl text-buttonbgblue text-center pb-[40px]'>Stay tuned for updates</p>
            </div>
            <p className='text-black md:text-left md:px-0 text-center md:text-lg px-[25px]'>Sign up for our newsletter & get exclusive offers and invites!</p>
            <div className='md:flex justify-center items-center gap-5'>
                <div className='flex justify-center w-full md:px-0 text-black'>
                    <input placeholder='Your Email...' className='w-full bg-bgcolorblue text-black border-b-2 border-b-black py-2'/>
                </div>
                <div className='pt-7 pb-5 flex justify-center'>
                    <div className={dm.className}>
                        <button className=' bg-bgred text-white py-2 px-7'>SUBMIT</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Newsletter;