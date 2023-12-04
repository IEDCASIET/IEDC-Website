import React from 'react';
import logo1 from "../../assets/IEDC ASIET Logo.png";
import locImg from "../../assets/location.png";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <section className="bg-white-500 text-black h-auto flex flex-col justify-center mt-10">
    <FooterCard />

<div className='relative flex items-center'>
<img src={logo1} alt="Logo" className="h-40 w-auto ml-60 mb-10" />
    <div className='absolute mt-60 ml-40'>
        <img src={locImg} alt="loc" className='h-20 inline' />
        {/* <div className="inline"> */}
        <p className='text-black font-medium text-lg ml-24 -mt-20' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")'}}>
            Vidya Bharathi Nagar,
        </p>
        <p className='text-black font-medium text-lg ml-24' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")'}}>
            Mattoor Kalady, Ernakulam, Kerala <br />
            Pin: 683574
        </p>
        {/* </div> */}
    </div>
    {/* <div className=''></div> */}
    <div className=" ml-97 mb-0">
        <h2 className='text-3xl text-black font-semibold mb-4' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")' }}>
            External Links
        </h2>
        <ul className="list-disc pl-4 text-gray-700 text-lg">
            <li className='mb-2'>
                <a href="https://startupmission.kerala.gov.in/">Kerala Startup Mission</a>
            </li>
            <li className='mb-2'>
                <a href="https://industry.kerala.gov.in/">Directorate of Industries and Commerce, Kerala</a>
            </li>
            <li className='mb-2'>
                <a href="https://iedc.startupmission.in/">Innovation and Entrepreneurship Development Centre</a>
            </li>
            <li className='mb-2'>
                <a href="https://www.startupindia.gov.in/">Startup India - Government Of India</a>
            </li>
            {/* <li className='mb-2'
            onClick={() => {
                const contactSection = document.getElementById('contact-us');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
            >
                Contact Us
            </li> */}
        </ul>
    </div>
    <div className="map-container ml-20 xl:ml-40 lg:ml-20 mt-10">
        <iframe
            width="350"
            height="250"
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.42886996269227%2C10.176958606916049%2C76.43241047859193%2C10.179400606018891&amp;layer=mapnik"
            style={{ border: '1px solid black' }}
        ></iframe>
    </div>
    <div className="absolute mt-97 ml-20 text-left">
        <p className="text-base text-gray-500">Made By: Aaron P Laju</p>
    </div>
    <div className="absolute mt-97 text-center w-full">
        <p className="text-base text-gray-500">Copyright &copy; 2023 IEDC ASIET</p>
    </div>
    <div className="absolute mt-97 right-0 mr-20 text-right">
        <p className="text-base text-gray-500">Designed By: Ajin P D</p>
    </div>
</div>

</section>
  );
};

export default Footer;
