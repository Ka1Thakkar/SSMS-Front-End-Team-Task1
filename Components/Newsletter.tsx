import { DM_Serif_Display } from 'next/font/google'
import { Parisienne } from 'next/font/google'

const paris = Parisienne({subsets: ['latin'], weight:['400']})

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const Newsletter = () => {
    return (
        <section className=' bg-bgcolorblue pb-[10px] pt-[45px] md:px-40'>
            <div className={dm.className}>
                <h1 className='text-center text-4xl pb-[10px] lg:text-7xl'>NEWSLETTER</h1>
            </div>
            <div className={paris.className}>
                <p className='text-xl md:text-3xl text-buttonbgblue text-center pb-[40px]'>Stay tuned for updates</p>
            </div>
            <p className='text-black text-center md:text-xl px-[25px]'>Sign up for our newsletter & get exclusive offers and invites!</p>
            <div className='flex justify-center w-full px-[25px] pt-[35px] text-black'>
                <input placeholder='Your Email...' className='w-full bg-bgcolorblue text-black border-b-2 border-b-black py-2'/>
            </div>
            <div className='pt-7 pb-5 flex justify-center'>
                <div className={dm.className}>
                    <button className=' bg-bgred text-white py-2 px-7'>SUBMIT</button>
                </div>
            </div>
        </section>
    );
}
 
export default Newsletter;