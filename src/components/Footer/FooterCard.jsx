import React from 'react'
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import ld from "../../assets/in.png"
import yt from "../../assets/you.png"
import './FooterCard.css'

const FooterCard = () => {
  return (
    <div className='mt-10 flex flex-wrap'>
        <div className="footercard-left 2xl:text-4xl xl:text-2xl lg:text-base w-full text-white bg-blue-400 h-28 py-6">
        <h2 className='ml-20' style={{fontFamily: 'url("src/assets/Fonts/Ubuntu-Bold.ttf")', fontWeight: 'bold'}}>
            Ready To Make
        </h2>
        <h2 className='ml-20 inline-block' style={{fontFamily: 'url("src/assets/Fonts/Ubuntu-Bold.ttf")', fontWeight: 'bold'}}>
            IEDC ASIET Support For You?
        </h2>
        <button
            className="bg-white xl:px-8 py-2 px-4 relative rounded-full text-black xl:text-xl text-sm 2xl:ml-60 xl:ml-20 lg:ml-16 2xl:-top-6 xl:-top-4 ml-2"
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
            <img src={fb} alt='fb' className='fb absolute xl:h-16 h-12 right-0 xl:mr-120 mr-96 xl:-mt-20 -mt-12' />
        </a>
        <a href='https://www.instagram.com/asiet_iedc' target="_blank" rel="noreferrer">
            <img src={insta} alt='insta' className='insta absolute xl:h-16 h-12 right-0 xl:mr-[22rem] mr-[18rem] xl:-mt-20 -mt-12' />        
        </a>
        <a href='https://www.youtube.com/@adishankaraiedcbootcampasi7376' target="_blank" rel="noreferrer">
            <img src={yt} alt='yt' className='yt absolute xl:h-16 h-12 right-0 xl:mr-[14rem] xl:-mt-20 mr-[12rem] -mt-12' />
        </a>
        <a href='https://www.linkedin.com/company/iedc-asiet' target="_blank" rel="noreferrer">
            <img src={ld} alt='in' className='ld absolute xl:h-16 h-12 right-0 mr-[6rem] xl:-mt-20 -mt-12' />
        </a>
    {/* </div> */}
    </div>
    </div>
  )
}

export default FooterCard