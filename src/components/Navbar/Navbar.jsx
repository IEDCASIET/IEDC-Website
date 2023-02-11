import React from "react";
import logo from "../../assets/IEDC ASIET Logo.png";

export default function Navbar() {
    return (
        <nav className="p-4 w-full relative top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-40 w-auto" />
                <ul className="flex space-x-20 text-2xl">
                    <li className="text-black relative">
                        <span className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white">About Us</span>
                        <div className="hidden bg-gray-300 absolute top-full left-0 p-2 rounded-lg">
                        </div>
                    </li>
                    <li className="text-black relative">
                        <span className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white">Events</span>
                        <div className="hidden bg-gray-300 absolute top-full left-0 p-2 rounded-lg">
                        </div>
                    </li>
                    <li className="text-black relative">
                        <span className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white">Excom</span>
                        <div className="hidden bg-gray-300 absolute top-full left-0 p-2 rounded-lg">
                        </div>
                    </li>
                    <li className="text-black relative">
                        <span className="hover:bg-gradient-to-r hover:from-pink-500 hover:via-white-500 hover:to-blue-500 px-5 py-3 rounded-full hover:text-white">Contact Us</span>
                        <div className="hidden bg-gray-300 absolute top-full left-0 p-2 rounded-lg">
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
