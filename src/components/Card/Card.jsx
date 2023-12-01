import React from 'react';
import man from '../../assets/man.png'
import hand from '../../assets/hand.png'
import bulb from '../../assets/bulb.png'
import cup from '../../assets/cup.png'


const Card = () => {
  return (
    <div className="bg-blue-400 h-40 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xl flex items-center">
    <img src={cup} alt='cup' className='h-24 ml-[12.5rem]' />
    <div className="ml-2">
        <p className='text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>10+</p>
        <p className='text-3xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Years</p>
    </div>
    <img src={man} alt='man' className='h-24 ml-[12.5rem]' />
    <div className="ml-2">
        <p className='text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>2000+</p>
        <p className='text-3xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Members</p>
    </div>
    <img src={bulb} alt='bulb' className='h-24 ml-[12.5rem]' />
    <div className="ml-4">
        <p className='text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>30+</p>
        <p className='text-3xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Projects</p>
    </div>
    <img src={hand} alt='hand' className='h-24 ml-[12.5rem]' />
    <div className="ml-2">
        <p className='text-6xl text-white mb-2' style={{ fontFamily: 'Arial, sans-serif' }}>15+</p>
        <p className='text-3xl text-white ml-1 font-semibold' style={{ fontFamily: 'Arial, sans-serif' }}>Start-Ups</p>
    </div>
</div>


  );
}

export default Card;