import React, { useEffect } from "react";
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
      <EventsNav />
      <div className="events-page-text text-center mt-0">
            <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Events</h1>
        </div>
      <div className="flex flex-wrap justify-center gap-20 p-10 mx-8 rounded-xl mt-10" style={{ boxShadow: "-5px 5px 20px rgba(255, 64, 129, 0.5), 5px 5px 20px rgba(0, 0, 255, 0.5)" }}>
        {images.map((image, index) => (
          <div key={index} className="relative" >
            <img
              className="events-images rounded-lg overflow-hidden shadow-lg w-84 h-84"
              src={image.url}
              alt={`Event ${index + 1}`}
            />

          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default EventsPage;