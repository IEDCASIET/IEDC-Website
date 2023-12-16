import React from 'react';

const CompanyCard = () => {

  const isLap = window.innerWidth >= 480;

  return (
    
    <div className="bg-blue-400 h-52 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl flex flex-col items-center justify-center mt-20">
      <p className=" text-xl sm:text-2xl lg:text-4xl text-white font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>Companies</p>
      {isLap? (
      <div className="flex overflow-hidden w-full" style={{ '--gap': '0rem', display: 'flex', overflow: 'hidden', userSelect: 'none', gap: 'var(--gap)' }}>
        <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
          <img src='/src/assets/Companies/1.png' className="w-[120px]" />
          <img src='/src/assets/Companies/2.png' className="w-[120px]" />
          <img src='/src/assets/Companies/3.png' className="w-[120px]" />
          <img src='/src/assets/Companies/4.png' className="w-[120px]" />
          <img src='/src/assets/Companies/5.png' className="w-[120px]" />
          <img src='/src/assets/Companies/6.png' className="w-[120px]" />
          <img src='/src/assets/Companies/7.png' className="w-[120px]" />
          <img src='/src/assets/Companies/8.png' className="w-[120px]" />
          <img src='/src/assets/Companies/9.png' className="w-[120px]" />
          <img src='/src/assets/Companies/10.png' className="w-[120px]" />
          <img src='/src/assets/Companies/11.png' className="w-[120px]" />
          <img src='/src/assets/Companies/12.png' className="w-[120px]" />
        </div>
        <div className="flex space-x-10 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
          <img src='/src/assets/Companies/1.png' className="w-[120px]" />
          <img src='/src/assets/Companies/2.png' className="w-[120px]" />
          <img src='/src/assets/Companies/3.png' className="w-[120px]" />
          <img src='/src/assets/Companies/4.png' className="w-[120px]" />
          <img src='/src/assets/Companies/5.png' className="w-[120px]" />
          <img src='/src/assets/Companies/6.png' className="w-[120px]" />
          <img src='/src/assets/Companies/7.png' className="w-[120px]" />
          <img src='/src/assets/Companies/8.png' className="w-[120px]" />
          <img src='/src/assets/Companies/9.png' className="w-[120px]" />
          <img src='/src/assets/Companies/10.png' className="w-[120px]" />
          <img src='/src/assets/Companies/11.png' className="w-[120px]" />
          <img src='/src/assets/Companies/12.png' className="w-[120px]" />
        </div>
      </div>
      )
      : (
        <div className="flex overflow-hidden w-full" style={{ '--gap': '0rem', display: 'flex', overflow: 'hidden', userSelect: 'none', gap: 'var(--gap)' }}>
        <div className="flex space-x-20 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
        <div className="flex flex-wrap justify-center">
          <img src='/src/assets/Companies/1.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/2.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/3.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/4.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/5.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/6.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/7.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/8.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/9.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/10.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/11.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/12.png' className=" h-[60px] w-[60px] mb-4" />
        </div>
        </div>
        <div className="flex space-x-20 animate-scroll" style={{ display: 'flex', justifyContent: 'space-around', minWidth: '100%', gap: 'var(--gap)', animation: 'scroll 20s linear infinite', marginTop: '1.5%', opacity: '100%', listStyleType: 'none', color: 'white' }}>
        <div className="flex flex-wrap justify-center">
          <img src='/src/assets/Companies/1.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/2.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/3.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/4.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/5.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/6.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/7.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/8.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/9.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/10.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/11.png' className=" h-[60px] w-[60px] mb-4" />
          <img src='/src/assets/Companies/12.png' className=" h-[60px] w-[60px] mb-4" />
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
