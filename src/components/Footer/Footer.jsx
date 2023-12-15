import React from 'react';
import logo1 from "../../assets/IEDC ASIET Logo.png";
import locImg from "../../assets/location.png";
import FooterCard from "./FooterCard";
import './Footer.css';

const Footer = () => {
  return (
    <section className="bg-white-500 text-black h-auto flex flex-col justify-center mt-10">
    {/* <FooterCard /> */}

<div className='footer-left relative flex items-center lg:ml-20'>
<img src={logo1} alt="Logo" className="footer-logo h-32 xl:h-40 w-auto 2xl:ml-60 2xl:mb-10 xl:ml-40 xl:mb-24 lg:ml-20 lg:mb-20 ml-40 mb-20 " />
    <div className='footer-left-subcontent absolute 2xl:mt-60 2xl:ml-40 xl:mt-40 xl:ml-20 lg:mt-40 lg:ml-0 ml-20 mt-40'>
        <img src={locImg} alt="loc" className='xl:h-20 h-16 inline' />
        {/* <div className="inline"> */}
        <p className='text-black font-medium lg:text-lg text-base xl:ml-24 ml-20 -mt-20' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")'}}>
            Vidya Bharathi Nagar,
        </p>
        <p className='text-black font-medium lg:text-lg text-base xl:ml-24 ml-20' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")'}}>
            Mattoor Kalady, Ernakulam, Kerala <br />
            Pin: 683574
        </p>
        {/* </div> */}
    </div>
    {/* <div className=''></div> */}
    <div className="footer-mid-contents 2xl:ml-97 2xl:mb-0 xl:ml-60 lg:mt-4 lg:ml-60 ml-60 mt-4">
        <h2 className='xl:text-3xl text-2xl text-black font-semibold mb-4' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")' }}>
            External Links
        </h2>
        <ul className="list-disc pl-4 text-gray-700 xl:text-lg text-base">
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
    <div className="2xl:ml-40 sm:mt-10 xl:ml-32 lg:24 mt-8">
        <iframe
            width="350"
            height="250"
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.42886996269227%2C10.176958606916049%2C76.43241047859193%2C10.179400606018891&amp;layer=mapnik"
            style={{ border: '1px solid black' }}
            className='map-container'
        ></iframe>
    </div>
    <div className="footer-right-subcontent-left absolute lg:mt-97 mt-120 ml-20 text-left">
        <p className="text-base text-gray-500">Made By: Aaron P Laju</p>
    </div>
    <div className="footer-right-subcontent-mid absolute lg:mt-97 mt-120 text-center w-full">
        <p className="text-base text-gray-500">Copyright &copy; 2023 IEDC ASIET</p>
    </div>
    <div className="footer-right-subcontent-right absolute lg:mt-97 mt-120 sm:right-0 sm:mr-20 sm:text-right text-left">
        <p className="text-base text-gray-500">Designed By: Ajin P D</p>
    </div>
</div>

</section>
  );
};

export default Footer;
