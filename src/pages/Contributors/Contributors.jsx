import React, { useState, useEffect } from "react";
import EventsNav from "../../components/Navbar/EventsNavbar";
import Footer from "../../components/Footer/Footer";
import './Contributors.css';

const Contributors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const contributors = [
        {
        name: "Aaron P Laju",
        title: "Developer",
        url: ' https://live.staticflickr.com/65535/53401256734_b92eda8697_w.jpg',
        hoverurl: ' https://live.staticflickr.com/65535/53401403165_56b5738ab2_m.jpg'
        },
        {
        name: "Ajin P D",
        title: "Designer",
        url: 'https://live.staticflickr.com/65535/53401119508_4a13ddc412_w.jpg',
        hoverurl: ' https://live.staticflickr.com/65535/53400975141_b7fc6268b7_m.jpg'
        }
    ];

  return (
    <section id='contributors'>
        <EventsNav />
        <div className='flex flex-col items-center justify-center h-auto'>
            <div className="text-contributors text-center mt-0">
                <h1 className="text-7xl font-semibold inline">Contributors</h1>
            </div>
            <div className="contributors-sub-text flex flex-wrap justify-center gap-10 2xl:gap-80 xl:gap-40 p-10 mx-auto mt-10">
                {contributors.map((contributor, index) => (
                <div
                    key={index}
                    className="px-16 py-5 border-gray-300 shadow border-4 rounded-lg"
                >
                    <p className="text-center font-serif font-medium text-4xl mb-5">{contributor.title}</p>
                    <img
                    className="contributors-images rounded-lg overflow-hidden shadow-lg w-84 h-84"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    src={hoveredIndex === index ? contributor.hoverurl : contributor.url}
                    alt={`Contributor ${index + 1}`}
                    style={{ boxShadow: "-5px 5px 20px rgba(255, 64, 129, 0.5), 5px 5px 20px rgba(0, 0, 255, 0.5)" }}
                    />
                    <p className="text-center font-serif font-medium text-3xl mt-4">{contributor.name}</p>
                </div>
                ))}
            </div>
        <Footer />
      </div>
    </section>
  );
}

export default Contributors;
