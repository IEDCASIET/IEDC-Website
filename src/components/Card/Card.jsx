import React from 'react';
import man from '../../assets/man.png'
import hand from '../../assets/hand.png'
import bulb from '../../assets/bulb.png'
import cup from '../../assets/cup.png'


const Card = () => {
  return (
    <div className="bg-blue-400 2xl:h-40 xl:h-32 lg:h-28 sm:h-50 h-42 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl flex flex-wrap items-center">
    <div className=' flex'>
        <img src={cup} alt='cup' className='2xl:h-24 xl:h-20 h-16 sm:ml-20 xl:ml-32 2xl:ml-[12.5rem] ml-5' />
        <div className="ml-2">
            <p className=' text-3xl xl:text-5xl 2xl:text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>10+</p>
            <p className='text-xl 2xl:text-3xl xl:text-2xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Years</p>
        </div>
    </div>
    <div className=' flex 2xl:ml-0 xl:ml-4'>
        <img src={man} alt='man' className='2xl:h-24 xl:h-20 h-16 sm:ml-20 xl:ml-32 2xl:ml-[12.5rem] ml-5' />
        <div className="ml-2">
            <p className=' text-3xl xl:text-5xl 2xl:text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>2000+</p>
            <p className='text-xl 2xl:text-3xl xl:text-2xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Members</p>
        </div>
    </div>
    <div className=' flex 2xl:ml-0 xl:ml-4 sm:mt-0 mt-2'>
        <img src={bulb} alt='bulb' className='2xl:h-24 xl:h-20 h-16 sm:ml-20 xl:ml-32 2xl:ml-[12.5rem] ml-5' />
        <div className="ml-2">
            <p className='te text-3xl xl:text-5xl 2xl:text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>30+</p>
            <p className='text-xl 2xl:text-3xl xl:text-2xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Projects</p>
        </div>
    </div>
    <div className=' flex 2xl:ml-0 xl:ml-4 sm:mt-0 mt-2'>
        <img src={hand} alt='hand' className='2xl:h-24 xl:h-20 h-16 sm:ml-20 2xl:ml-[12.5rem] ml-2' />
        <div className="ml-2">
            <p className='te text-3xl xl:text-5xl 2xl:text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>15+</p>
            <p className='text-xl 2xl:text-3xl xl:text-2xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Start-Ups</p>
        </div>
    </div>
</div>


  );
}

export default Card;