
import CarouselComp from "../Components/CarouselComp";
import { DM_Serif_Display } from 'next/font/google'
import { Parisienne } from "next/font/google";
import { AiFillStar } from "react-icons/ai";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import ReviewCarouselComp from "./ReviewCarouselComp";

const dm = DM_Serif_Display({ weight:['400'], subsets: ['latin'] })
const paris = Parisienne({ weight:['400'], subsets: ['latin'] })
const ReviewsComp = () => {
    const reviews = [
        [
            "Yelp",
            "Nikole T",
            5,
            "Absolutely delicious food! Great service! Great atmosphere. Sat inside with a beautiful water view! I recommend going first thing when they open. It wasn't too crowded despite the lunchtime busyness. A great way to celebrate my birthday early! I WILL BE COMING BACK!"
        ],
        [
            "Yelp",
            "Jane C",
            5,
            "If you're looking for a fine dining with superb customer service... this place is the gem! Been here last night, and everything is absolutely amazing. Our server is the utmost attentive and accommodating waiter I have encountered for the longest time..."
        ],
        [
            "Yelp",
            "Karina K",
            5,
            "Wow this is a restaurant I plan on going to a thousand times over. Located in the beautiful desire shores, this was a fabulous dining experience. The seating was better than I expected, and out of all the restaurants in desert shores, this indoor dining seating gives you the best view of the lake."
        ],
        [
            "Yelp",
            "Karen S",
            5,
            "Went for their Sunday brunch and my party and I could not have been happier . They offer bottomless mimosas , bloody Mary's , and palomas ( tequila and grapefruit juice ) , which was nice because they allowed us to switch drinks up when ordering more  rounds..."
        ],
    ]
    return (
        <div className="py-[28px] md:h-5/6">
            <div className={dm.className}>
                <h1 className="text-center text-4xl md:text-7xl pt-[45px] pb-[10px]">REVIEWS</h1>
            </div>
            <div className="w-screen">
                <ReviewCarouselComp loop>
                    {reviews.map((review,i)=>{
                        return(
                        <div className=" w-screen text-center flex-[0_0_100%]" key={i}>
                            <div className={paris.className}>
                                <h1 className="pt-[20px] pb-[10px] text-xl md:text-3xl text-buttonbgblue">Reviews by - {review[0]}</h1>
                            </div>
                            <div className="flex items-center justify-center pt-[20px] gap-1 text-bgred md:text-lg">
                                <p className="text-black">{review[1]} :</p>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="flex justify-center px-5 md:px-40 xl:px-96">
                                <div className="md:text-5xl text-xs opacity-0 md:opacity-100">
                                    <FaQuoteLeft />
                                </div>
                                <p className="pt-[25px] font-semibold italic text-center md:text-lg xl:px-10">{review[3]}</p>
                                <div className="md:text-5xl text-xs pt-28 opacity-0 md:opacity-100">
                                    <FaQuoteRight />
                                </div>
                            </div>
                        </div>)
                    })}
                </ReviewCarouselComp>
            </div>
        </div>
    );
}
 
export default ReviewsComp;