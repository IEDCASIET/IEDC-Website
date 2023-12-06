import React from "react";
import logo from "../../assets/IEDC ASIET Logo.png";
// import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // const navigate = useNavigate();
    // const baseUrl = window.location.pathname === '/events' ? '/' : '/events';

    //const handleClick = () => {
    //     const aboutUsSection = document.getElementById('about-us');
    
    //     // Your callback function if needed
    //     // fncallback();
    
    //     if (baseUrl === '/') {
    //       // Navigate to / and scroll to the "about-us" section smoothly
    //       navigate('/', { state: { scrollIntoView: 'about-us' } });
    //     } else {
    //       // Scroll to the "about-us" section smoothly
    //       aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <nav className="p-4 flex sticky top-0 z-10 backdrop-blur">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/">
                    <img src={logo} alt="Logo" className="h-20 w-auto" />
                </a>
                <ul className="flex space-x-16 text-2xl">
                    <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const eventsSection = document.getElementById('about-us');
                                eventsSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            About Us
                        </span>
                    </li>
                    <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const eventsSection = document.getElementById('our-events');
                                eventsSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Events
                        </span>
                    </li>
                    <li className="text-black relative">
                        <a href="/gallery">
                            <span
                                className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                                style={{ cursor: 'pointer' }}
                            >
                                Gallery
                            </span>
                        </a>
                    </li>
                    <li className="text-black relative top-0">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const execomSection = document.getElementById('our-execom');
                                execomSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Execom
                        </span>
                    </li>
                    <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const contactSection = document.getElementById('contact-us');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Contact Us
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
