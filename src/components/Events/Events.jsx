import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Events.css';
import { Link } from 'react-router-dom';
import './Events.css';


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
      <div className="events-text text-center mt-32">
        <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <h1 className="text-7xl font-semibold inline">Events</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-20 p-10 mx-auto">
        {images.map(({url }, index) => (
          <div key={index} className="relative">
            <img
              className="home-events-image rounded-lg overflow-hidden shadow-lg w-[500px] h-[500px]"
              src={url}
              alt={`Event ${index + 1}`}
            />

          </div>
        ))}
      </div>
      <div className='relative xl:ml-[11rem]'>
      <Link to="/events" smooth>
      <button
        className="eventsbutton bg-gradient-to-r from-pink-600 to-blue-600 px-10 py-3 rounded-full text-white text-xl relative transform -translate-x-1/2 -translate-y-1/2 block mx-auto mt-8 sm:left-20 md:left-20 lg:left-20 xl:left-0"
      >
        View More
      </button>
    </Link>
        </div>
      {/* )} */}
    </section>
  );
}