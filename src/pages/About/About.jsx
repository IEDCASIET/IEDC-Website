import React from 'react';
import logo from "../../assets/IEDC ASIET Logo.png";
import CompanyCard from '../../components/Company/Company';
import './About.css'

const About = () => {
  return (
    <section id="about-us" className="bg-white-500 text-black h-auto flex flex-col justify-center">
        <div className="about-text text-center mt-40">
            <h1 className="text-7xl font-medium inline">About</h1>&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Us</h1>
        </div>
        <div className='about-2 flex items-center'>
            <img src={logo} alt="Logo" className="logo 2xl:h-120 xl:h-100 lg:h-80 xl:ml-60 lg:ml-40" />
            <div className="description ml-40 mt-122">
            <h2 className='text-black font-semibold text-5xl mt-84'>IEDC ASIET</h2>
            <p className='desc text-black font-medium text-xl xl:text-lg lg:text-base text-justify mt-10 2xl:w-[60rem] xl:w-[40rem] lg:w-[25rem]' style={{fontFamily: 'url("src/assets/Fonts/Ubuntu-Regular.ttf")'}}>ASIET, ideally located in an idyllic ambience, the Institution kindles vibrant memories of the serene presence of Jagadguru Adi Shankara. ASIET runs by Adisankara Trust, under the aegis of Sringeri mutt ,has a legacy of establishing renowned educational institutions for last 50 years.<br></br><br></br>
            Affiliated to APJ Abdul Kalam Technological University, Kerala and approved by AICTE, New Delhi. ASIET is one among the premium institute in the state which offers Nation Board of Accreditation (NBA) programs in CSE, ECE, ME & EEE. ASIET provides opportunities of Innovation, Incubation, and Entrepreneurship for its students and public. ASIET hosted an exciting student venture named as Adi Shankara IEDC Boot Camp in 2015 with the support of Kerala Startup Mission (Technopark TBI). This consist of a facility setup in 15000sqft which includes IEDC, FAB Lab and Business Incubation Centre. In order to enhance the innovative eco system ASIET is right now focusing to setup a social incubation centre in our campus Among the 458 IEDC’s in the state, Kerala Startup Mission has selected Adi Shankara IEDC Bootcamp as the best IEDC in the state for the past 6 years ASIET FABLAB, State of Art laboratory for digital fabrication facility is equipped to create 'almost anything'. This lab is meant for the faculties as well as for the student to create any creative design as projects. This facility is open for all disciplines in technology as well as outside partners with permission.  Evaluating our IEDC performance Kerala State Industrial Development Cooperation have sanctioned Business Incubation Centre at Adishankara. Currently 12 of our alumni startups got incubated in the same. Our IEDC have also received the Entrepreneurship Enabler Award 2018 from KSUM considering the exemplary works done over the past years.</p>
        </div>
        </div>
      {/* <CompanyCard /> */}
    </section>
  );
};

export default About;
