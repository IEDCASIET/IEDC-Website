import React from 'react';

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
            className="bg-white absolute px-8 py-2 rounded-full text-black text-xl ml-40 -mt-5"
            onClick={() => {
                const aboutUsSection = document.getElementById('contact-us');
                aboutUsSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            Get Started
        </button>
    </div>
</section>
  );
};

export default Footer;
