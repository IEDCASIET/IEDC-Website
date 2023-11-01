import React from 'react';
import logo from "../../assets/IEDC ASIET Logo.png";

const About = () => {
  return (
    <section className="bg-white-500 text-black h-screen flex flex-col justify-center mt-121">
        <div className="text-center mb-4">
            <h1 className="text-7xl font-medium inline">About</h1>&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Us</h1>
        </div>
        <div className='relative flex items-center'>
            <img src={logo} alt="Logo" className="h-121 w-auto ml-20 mt=122" />
             <h2 className='text-black font-semibold text-5xl ml-0 mt-122'>IEDC ASIET</h2>
        </div>
    </section>
  );
};

export default About;
