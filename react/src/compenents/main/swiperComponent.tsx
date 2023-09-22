import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { item } from "../public/item";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

interface Props {
  title: string;
}

const SwiperComponent = (props: Props) => {
  const { title } = props;
  return (
    <div className="bg-white mt-2 flex items-center px-[1rem] pb-2 pt-2 gap-1">
      <div className="flex-grow w-[21rem]">{title}</div>
      <Swiper
        className="flex-grow"
        slidesPerView={1}
        speed={800}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {item.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex gap-2">
              <div className="font-bold">{item.createDate}</div>
              <div className="font-bold">{item.content}</div>
              <div className="font-bold">{item.creator}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
