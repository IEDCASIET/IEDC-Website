import React from "react";
import logo from "../../assets/IEDC ASIET Logo.png";

export default function Navbar() {
    return (
        <nav className="p-4 w-full sticky top-0 z-10 backdrop-blur">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-20 w-auto" />
                <ul className="flex space-x-20 text-2xl">
                    <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const aboutUsSection = document.getElementById('about-us');
                                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
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
