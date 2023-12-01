import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Events.css';
import { Link } from 'react-router-dom';


const images = [
  { 
    url: 'https://live.staticflickr.com/65535/53378812500_73f149d4ab_z.jpg' 
  },
  { 
    url: 'https://live.staticflickr.com/65535/53341447953_a6ebda77b4_k.jpg',
  },
  { 
    url: 'https://live.staticflickr.com/65535/53341554749_a5be940d8f_k.jpg' 
  },
];

export default function Events() {

  return (
    <section id="our-events" className="bg-white-500 text-black h-auto flex flex-col justify-center relative">
      <div className="text-center mt-32">
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
      <img className="swiper-slide object-cover rounded-xl w-full h-full" src={url} />
      </div>
    </SwiperSlide>
        ))}
      </Swiper> 
      {/* {showViewMore && ( */}
      <div className='relative xl:ml-[11rem]'>
      <Link to="/events" smooth>
      <button
        className="bg-gradient-to-r from-pink-600 to-blue-600 px-10 py-3 rounded-full text-white text-xl relative transform -translate-x-1/2 -translate-y-1/2 block mx-auto mt-8"
      >
        View More
      </button>
    </Link>
        </div>
      {/* )} */}
    </section>
  );
}