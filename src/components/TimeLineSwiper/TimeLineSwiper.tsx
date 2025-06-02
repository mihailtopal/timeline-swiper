import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper/types";
import React, { useEffect, useRef, useState } from "react";
import { TimelineEvent } from "../../mock/timelineData";
import styles from "./styles.module.scss";
import { Navigation } from "swiper/modules";
import SlideNextButton from "../Buttons/SlideNextButton";
import SlidePrevButton from "../Buttons/SlidePrevButton";

export default function TimelineSwiper({ data }: { data: TimelineEvent[] }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
      setIsBeginning(true);
      setIsEnd(false);
    }

    if (!containerRef.current) return;
    // Перезапуск animation
    containerRef.current.classList.add(styles.replay);
    void containerRef.current.offsetHeight; // trigger reflow
    containerRef.current.classList.remove(styles.replay);
  }, [data]);

  return (
    <div ref={containerRef} className={styles.swiper__container}>
      <nav className={styles.buttons__container}>
        <SlidePrevButton onClick={goPrev} disabled={isBeginning} />
        <SlideNextButton onClick={goNext} disabled={isEnd} />
      </nav>
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          handleSlideChange();
        }}
        onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={80}
        grabCursor={true}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <article>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
              <p className={styles.description}>{item.description}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
