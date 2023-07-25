import { DM_Serif_Display } from 'next/font/google'

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })

const Reservation = () => {
    return (
        <div className=" bg-buttonbgblue text-white text-center pb-[28px] pt-[42px] px-[28px]">
            <div className={dm.className}>
                <h1 className='text-4xl pt-[45px]'>RESERVATIONS</h1>
            </div>
            <p className='text-[15.4px] py-[15px]'>Call us at <span className='text-[16px]'>(702)-331-5565</span> or book a table through Open Table reservations:</p>
            <div id="ot-widget-container9" data-r3uid="607pIvAlq"><iframe src="https://www.opentable.com/widget/reservation/canvas?rid=269260&amp;type=standard&amp;theme=standard&amp;overlay=false&amp;domain=com&amp;lang=en&amp;r3uid=607pIvAlq&amp;newtab=false&amp;disablega=false&amp;color=1" width="224" height="301" scrolling="no" name="opentable-make-reservation-widget" title="Online Reservations | OpenTable, Americana Las Vegas" id="iFrameResizer1"className=' overflow-hidden mx-auto'></iframe></div>
        </div>
    );
}
 
export default Reservation;