import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './Events.css';
import Data from './Data';

const images = [
  { url: 'https://live.staticflickr.com/65535/53341447953_a6ebda77b4_k.jpg' },
  { url: 'https://live.staticflickr.com/65535/53341554749_a5be940d8f_k.jpg' },
  { url: 'https://live.staticflickr.com/65535/53341554784_aaf6b35f30_k.jpg' },
];

export default function Events() {
  const [showViewMore, setShowViewMore] = useState(false);

  const handleSlideChange = (swiper) => {
    const isLastSlide = swiper.isEnd;
    setShowViewMore(isLastSlide);
  };

  const handleAutoplayStop = () => {
    setShowViewMore(true);
  };

  return (
    <section id="our-events" className="bg-white-500 text-black h-auto flex flex-col justify-center relative">
      <div className="text-center mt-40">
        <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-7xl font-semibold inline">Events</h1>
      </div>
      <Swiper
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={0}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map(({url }, index) => (
          <SwiperSlide key={index} className="swiper">
            <div className='p-8'>
      <img className="swiper-slide object-cover w-full h-full" src={url} />
      </div>
    </SwiperSlide>
        ))}
      </Swiper> 
      {/* {showViewMore && ( */}
      <div className='relative ml-[11rem]'>
      <button
        className="bg-gradient-to-r from-pink-600 to-blue-600 px-10 py-3 rounded-full text-white text-xl relative transform -translate-x-1/2 -translate-y-1/2 block mx-auto mt-8"
        onClick={() => console.log('View More')}
      >
        View More
      </button>
        </div>
      {/* )} */}
    </section>
  );
}