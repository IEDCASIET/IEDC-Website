import React from 'react';
import c1 from '../../assets/Companies/1.png'
import c2 from '../../assets/Companies/2.png'
import c3 from '../../assets/Companies/3.png'
import c4 from '../../assets/Companies/4.png'
import c5 from '../../assets/Companies/5.png'
import c6 from '../../assets/Companies/6.png'
import c7 from '../../assets/Companies/7.png'
import c8 from '../../assets/Companies/8.png'
import c9 from '../../assets/Companies/9.png'
import c10 from '../../assets/Companies/10.png'
import c11 from '../../assets/Companies/11.png'
import c12 from '../../assets/Companies/12.png'

const CompanyCard = () => {

  const isLap = window.innerWidth >= 480;

  return (
    
    <div className="bg-blue-400 h-52 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl flex flex-col items-center justify-center mt-20">
      <p className=" text-xl sm:text-2xl lg:text-4xl text-white font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>Companies</p>
      {isLap? (
      <div className="flex overflow-hidden w-full" style={{ '--gap': '0rem', display: 'flex', overflow: 'hidden', userSelect: 'none', gap: 'var(--gap)' }}>
        <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
          <img src={c1} className="w-[120px]" />
          <img src={c2} className="w-[120px]" />
          <img src={c3} className="w-[120px]" />
          <img src={c4} className="w-[120px]" />
          <img src={c5} className="w-[120px]" />
          <img src={c6} className="w-[120px]" />
          <img src={c7} className="w-[120px]" />
          <img src={c8} className="w-[120px]" />
          <img src={c9} className="w-[120px]" />
          <img src={c10} className="w-[120px]" />
          <img src={c11} className="w-[120px]" />
          <img src={c12} className="w-[120px]" />
        </div>
        <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
          <img src={c1} className="w-[120px]" />
          <img src={c2} className="w-[120px]" />
          <img src={c3} className="w-[120px]" />
          <img src={c4} className="w-[120px]" />
          <img src={c5} className="w-[120px]" />
          <img src={c6} className="w-[120px]" />
          <img src={c7} className="w-[120px]" />
          <img src={c8} className="w-[120px]" />
          <img src={c9} className="w-[120px]" />
          <img src={c10} className="w-[120px]" />
          <img src={c11} className="w-[120px]" />
          <img src={c12} className="w-[120px]" />
        </div>
      </div>
      )
      : (
        <div className="flex overflow-hidden w-full" style={{ '--gap': '0rem', display: 'flex', overflow: 'hidden', userSelect: 'none', gap: 'var(--gap)' }}>
        <div className="flex space-x-20 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
        <div className="flex flex-wrap justify-center">
          <img src={c1} className=" h-[60px] w-[60px] mb-4" />
          <img src={c2} className=" h-[60px] w-[60px] mb-4" />
          <img src={c3} className=" h-[60px] w-[60px] mb-4" />
          <img src={c4} className=" h-[60px] w-[60px] mb-4" />
          <img src={c5} className=" h-[60px] w-[60px] mb-4" />
          <img src={c6} className=" h-[60px] w-[60px] mb-4" />
          <img src={c7} className=" h-[60px] w-[60px] mb-4" />
          <img src={c8} className=" h-[60px] w-[60px] mb-4" />
          <img src={c9} className=" h-[60px] w-[60px] mb-4" />
          <img src={c10} className=" h-[60px] w-[60px] mb-4" />
          <img src={c11} className=" h-[60px] w-[60px] mb-4" />
          <img src={c12} className=" h-[60px] w-[60px] mb-4" />
        </div>
        </div>
        <div className="flex space-x-20 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
        <div className="flex flex-wrap justify-center">
          <img src={c1} className=" h-[60px] w-[60px] mb-4" />
          <img src={c2} className=" h-[60px] w-[60px] mb-4" />
          <img src={c3} className=" h-[60px] w-[60px] mb-4" />
          <img src={c4} className=" h-[60px] w-[60px] mb-4" />
          <img src={c5} className=" h-[60px] w-[60px] mb-4" />
          <img src={c6} className=" h-[60px] w-[60px] mb-4" />
          <img src={c7} className=" h-[60px] w-[60px] mb-4" />
          <img src={c8} className=" h-[60px] w-[60px] mb-4" />
          <img src={c9} className=" h-[60px] w-[60px] mb-4" />
          <img src={c10} className=" h-[60px] w-[60px] mb-4" />
          <img src={c11} className=" h-[60px] w-[60px] mb-4" />
          <img src={c12} className=" h-[60px] w-[60px] mb-4" />
        </div>
        </div>
      </div>

      ) 
      }

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(calc(-100% - var(--gap)));
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CompanyCard;
