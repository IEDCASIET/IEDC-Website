import React from 'react'
import logo from "../../assets/IEDC ASIET Logo.png";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section id='404' className='flex flex-col items-center justify-center h-screen'>
      <a href="/">
         <img src={logo} alt="Logo" className="h-60 mb-10 " />
    </a>
      <div className='flex flex-col text-black text-center'>
        <h2 className='text-7xl mb-5'>404</h2>
        <h2 className='text-5xl'>Page Not Found</h2>
      </div>
      <div className='mt-10'>
        <h2 className='text-2xl sm:ml-0 ml-5 sm:mr-0 mr-5'>Dear Entrepreneur You Are In The Wrong Page</h2>
      </div>
      <button className='mt-10'>
      <Link to ="/">
        <span
            className="bg-gradient-to-r from-pink-600 to-blue-600 text-white px-5 py-3 rounded-full text-xl"
            style={{ cursor: 'pointer' }}
        >
            Back To Home
        </span>
      </Link>
      </button>
    </section>
  )
}

export default NotFound;