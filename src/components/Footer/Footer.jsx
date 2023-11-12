import React from 'react';
import logo1 from "../../assets/IEDC ASIET Logo.png";
import locImg from "../../assets/location.png";
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import ld from "../../assets/in.png"
import yt from "../../assets/you.png"


const Footer = () => {
  return (
    <section className="bg-white-500 text-black h-auto flex flex-col justify-center mt-10">
    <div className="bg-blue-400 w-auto h-28 p-6">
        <h2 className='text-4xl text-white ml-20' style={{fontFamily: 'url("src/assets/Fonts/Ubuntu-Bold.ttf")', fontWeight: 'bold'}}>
            Ready To Make
        </h2>
        <h2 className='text-4xl text-white ml-20 inline-block' style={{fontFamily: 'url("src/assets/Fonts/Ubuntu-Bold.ttf")', fontWeight: 'bold'}}>
            IEDC ASIET Support For You?
        </h2>
        <button
            className="bg-white absolute px-8 py-2 rounded-full text-black text-xl ml-60 -mt-6"
            onClick={() => {
                const aboutUsSection = document.getElementById('contact-us');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            Get Started
        </button>
        {/* <div className=" ml-4"> */}
        <a href='https://www.facebook.com/asietbootcamp' target="_blank" rel="noreferrer">
            <img src={fb} alt='fb' className=' absolute h-16 right-0 mr-120 -mt-20' />
        </a>
        <a href='https://www.instagram.com/asiet_iedc' target="_blank" rel="noreferrer">
            <img src={insta} alt='insta' className=' absolute h-16 right-0 mr-[22rem] -mt-20' />        
        </a>
        <a href='https://www.youtube.com/@adishankaraiedcbootcampasi7376' target="_blank" rel="noreferrer">
            <img src={yt} alt='yt' className=' absolute h-16 right-0 mr-[14rem] -mt-20' />
        </a>
        <a href='https://www.linkedin.com/company/iedc-asiet' target="_blank" rel="noreferrer">
            <img src={ld} alt='in' className=' absolute h-16 right-0 mr-[6rem] -mt-20' />
        </a>
    {/* </div> */}
    </div>
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
    <div className=''></div>
    <div className="ml-97 mb-0">
        <h2 className='text-3xl text-black font-semibold mb-4' style={{ fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")' }}>
            Quick Links
        </h2>
        <ul className="list-disc pl-4 text-gray-700 text-lg">
            <li className='mb-2' 
                onClick={() => {
                const aboutUsSection = document.getElementById('about-us');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
            >
                About Us
            </li>
            <li className='mb-2'
                onClick={() => {
                const aboutUsSection = document.getElementById('our-events');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
            >
                Events
            </li>
            <li className='mb-2'
            onClick={() => {
                const aboutUsSection = document.getElementById('our-execom');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
            >
                Execom
            </li>
            <li className='mb-2'
            onClick={() => {
                const aboutUsSection = document.getElementById('contact-us');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
            >
                Contact Us
            </li>
        </ul>
    </div>
    <div className="map-container ml-80 mt-10">
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
