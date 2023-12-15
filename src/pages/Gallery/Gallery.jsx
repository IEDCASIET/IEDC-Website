import React, { useEffect } from "react";
import EventsNav from "../../components/Navbar/EventsNavbar";
import Footer from "../../components/Footer/Footer";
import gallerydata from "./GalleryData";
import './Gallery.css';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const groupedGalleryData = gallerydata.reduce((acc, item) => {
        if (!acc[item.galleryname]) {
          acc[item.galleryname] = [];
        }
        acc[item.galleryname].push(item);
        return acc;
      }, {});

  return (
    <section id='gallery'>
        <EventsNav />
        <div className="text-center mt-0">
            {/* <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp; */}
            <h1 className="text-gallery text-7xl font-semibold">Gallery</h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center gap-20 p-10 mx-auto">
        {Object.entries(groupedGalleryData).map(([galleryname, events], index) => (
        <div key={index} className="p-5 shadow rounded-lg" style={{boxShadow: "-5px 5px 20px rgba(255, 64, 129, 0.5), 5px 5px 20px rgba(0, 0, 255, 0.5)"}}>
          <p className="text-left font-medium text-3xl mb-5">{galleryname}</p>
          <div className="flex flex-wrap justify-center gap-16">
            {events.map((event, eventIndex) => (
              <div key={eventIndex} className="relative">
                <img
                  className="gallery-images rounded-lg overflow-hidden shadow-lg w-auto h-84"
                  src={event.url}
                  alt={`Event ${eventIndex + 1}`}
                />
              </div>
            ))}
          </div>
          {/* <style jsx>{`
            .gradient-border {
                border: 4px solid transparent;
                background-image: linear-gradient(to right, #ff40ff, #0000ff);
                background-origin: border-box;
                background-clip: content-box, border-box;
                border-radius: 20px;
                }
            `}</style> */}
        </div>
      ))}

    </div>
  
    <Footer />
    </section>
  )
}

export default Gallery