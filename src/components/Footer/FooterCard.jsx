import React from 'react'
import fb from "../../assets/fb.png"
import insta from "../../assets/insta.png"
import ld from "../../assets/in.png"
import yt from "../../assets/you.png"

const FooterCard = () => {
  return (
    <div>
        <div className="bg-blue-400 h-28 p-6">
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
    </div>
  )
}

export default FooterCard