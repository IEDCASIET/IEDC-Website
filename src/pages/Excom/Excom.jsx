import React from 'react';
import Lijo from '../../assets/Excom/Lijo.png'


const Excom = () => {
  return (
    <section className="bg-white-500 text-black h-screen flex flex-col justify-center mt-0">
        <div className="text-center mb-4">
            <h1 className="text-7xl font-medium inline">Our</h1>&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="text-7xl font-semibold inline">Excom</h1>     
        </div>
        <div className='container mt-20'>
            <div className="mx-auto w-5/6 self-center md:mx-24">
                <img src={Lijo} alt="Lijo" className="h-80 mx-auto"/>
            </div>
            <div className="bg-white rounded-lg shadow w-1/2 mx-auto py-3 md:flex md:px-4 lg:w-1/3 xl:w-1/4">
                <div className="mt-3 mx-auto w-3/4 self-center">
                    <p className="text-xl text-gray-800 tracking-wide leading-5 md:leading-6">Nowar Lal</p>
                    <p className="text-lg text-purple-500 tracking-wide leading-5 md:leading-6">CEO IEDC ASIET</p>
                    <p className="text-sm text-gray-500 leading-5 md:leading-6">janedoe@example.com</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Excom;

<div className='container mt-20 flex justify-center items-center'>
    <div className="mx-auto">
        <img src={Lijo} alt="Lijo" className="h-120 mx-auto"/>
    </div>
    <div className="bg-white rounded-lg shadow w-1/2 mx-auto py-3 md:flex md:px-4 lg:w-1/3 xl:w-1/4">
        <div className="mt-3 mx-auto w-3/4 self-center">
            <p className="text-xl text-gray-800 tracking-wide leading-5 md:leading-6">Nowar Lal</p>
            <p className="text-lg text-purple-500 tracking-wide leading-5 md:leading-6">CEO IEDC ASIET</p>
            <p className="text-sm text-gray-500 leading-5 md:leading-6">janedoe@example.com</p>
        </div>
    </div>
</div>
