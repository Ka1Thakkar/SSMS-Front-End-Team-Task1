'use client'
// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

const ReviewCarouselComp = ({ children, ...options }: Props) => {
    const length  = React.Children.count(children)
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <section>
        <div className="overflow-hidden pb-5" ref={emblaRef}>
            <div className="flex gap-10">{children}</div>
        </div>
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </section>
  );
};
export default ReviewCarouselComp;