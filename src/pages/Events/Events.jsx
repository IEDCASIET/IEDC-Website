import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar/Navbar";
import EventsNav from "../../components/Navbar/EventsNavbar";
import Footer from "../../components/Footer/Footer";
import images from "./Data";
import './Events.css';

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="data">
      {/* <Navbar /> */}
      <EventsNav />
      <div className="events-page-text text-center mt-0">
            <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Events</h1>
        </div>
      <div className="flex flex-wrap justify-center gap-20 p-10 mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              className="events-images rounded-lg overflow-hidden shadow-lg w-84 h-84"
              src={image.url}
              alt={`Event ${index + 1}`}
            />

          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default EventsPage;

{/* <div
        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
    </div> */}

    // <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3">
    //     <span className="font-bold">{image.date}</span>
    //     <small>{image.month}</small>
    // </div>