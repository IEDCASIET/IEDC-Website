import React from "react";
import logo from "../../assets/IEDC ASIET Logo.png";
import { useNavigate } from "react-router-dom";

export default function EventsNav() {

    const navigate = useNavigate();
    const baseUrl = window.location.pathname === '/events' ? '/' : '/events';

    // const handleClick = () => {

    //     if (baseUrl === '/') {
    //               navigate('/');
    //             }
    //         };

    return (
        <nav className="p-4 flex sticky top-0 z-10 backdrop-blur">
            <div className="container mx-auto flex justify-between items-center">
            <a href="/">
                <img src={logo} alt="Logo" className="h-20 w-auto" />
            </a>
                <ul className="flex space-x-20 text-2xl">
                    <li className="text-black relative">
                        <a href="/">
                            <span
                                className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white"
                                // onClick={() => {handleClick()}}
                                style={{ cursor: 'pointer' }}
                            >
                                Back
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
