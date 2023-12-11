import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/IEDC ASIET Logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
                <nav className="p-4 flex fixed w-full top-0 z-10 backdrop-blur">
                <div className="container flex xl:ml-40 lg:ml-20 justify-between items-center">
                    <a href="/">
                    <img src={logo} alt="Logo" className="h-20 " />
                    </a>
                    <div className="lg:hidden">
                    <button
                        className="text-black focus:outline-none"
                        onClick={handleMobileMenuToggle}
                    >
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    </div>
                    <ul
                    className={`lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-2xl transition-all duration-300 ease-in-out ${
                        mobileMenuOpen ? "flex" : "hidden"
                    }`}
                    >
                    <li className="text-black relative">
                        <span
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                        onClick={() => {
                            const eventsSection = document.getElementById('about-us');
                            eventsSection.scrollIntoView({ behavior: 'smooth' });
                            setMobileMenuOpen(false); 
                        }}
                        style={{ cursor: 'pointer' }}
                        >
                        About Us
                        </span>
                    </li>
                    {/* <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const eventsSection = document.getElementById('our-events');
                                eventsSection.scrollIntoView({ behavior: 'smooth' });
                                setMobileMenuOpen(false); 
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
                    </li> */}
                    <li className="text-black relative top-0">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const execomSection = document.getElementById('our-execom');
                                execomSection.scrollIntoView({ behavior: 'smooth' });
                                setMobileMenuOpen(false); 
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Execom
                        </span>
                    </li>
                    {/* <li className="text-black relative">
                        <span
                            className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                            onClick={() => {
                                const contactSection = document.getElementById('contact-us');
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                setMobileMenuOpen(false); 
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            Contact Us
                        </span>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
}
