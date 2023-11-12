import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import './Events.css';
import Data from './Data';

const images = [
  { name: 'Nature 1', url: 'https://live.staticflickr.com/65535/53325148749_b3999fd2b8_b.jpg' },
  { name: 'Nature 2', url: 'https://live.staticflickr.com/65535/53325148749_b3999fd2b8_b.jpg' },
  { name: 'Nature 3', url: 'https://live.staticflickr.com/65535/53325148749_b3999fd2b8_b.jpg' },
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
    <section id="our-events" className="bg-white-500 text-black h-screen flex flex-col justify-center relative">
      <div className="text-center mb-4">
        <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-7xl font-semibold inline">Events</h1>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        speed={800}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onAutoplayStop={handleAutoplayStop}
      >
        {images.map(({ name, url }, index) => (
          <SwiperSlide key={index} className={`swiper ${index === images.length - 1 && showViewMore ? 'blur' : ''}`}>
            <img className="swiper-slide" src={url} alt={name} />
          </SwiperSlide>
        ))}
      </Swiper>
      {showViewMore && (
        <button className="bg-gradient-to-r from-pink-600 to-blue-600 px-16 py-3 rounded-full text-white text-xl p-3 w-35 h-25 mt-4 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={() => console.log('View More')}>
          View More
        </button>
      )}
    </section>
  );
}
