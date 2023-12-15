import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import image from './HomeData'

export default function Home() {
    const el = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Welcome To Official"], 
            startDelay: 200,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: false,
            showCursor: false,
            onComplete: () => {
                const typed2 = new Typed(el2.current, {
                    strings: ["Page Of"],
                    startDelay: 200,
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 100,
                    loop: false,
                    showCursor: false,
                    onComplete: () => {
                        const typed3 = new Typed(el3.current, {
                            strings: ["IEDC ASIET"],
                            startDelay: 200,
                            typeSpeed: 100,
                            backSpeed: 100,
                            backDelay: 100,
                            loop: false,
                            showCursor: false,
                        });
                        return () => {
                            typed3.destroy();
                        };
                    },
                });
                return () => {
                    typed2.destroy();
                };
            },
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className=" h-[90vh] home">
            {/* <Navbar/> */}
            <div className='homebg text-left text-4xl black font-semibold bg-contain bg-no-repeat absolute inset-0' style={{backgroundImage: `url('src/assets/homebgimage.png')`, filter: 'saturate(1)', width:'auto'}}>
            <div className="hometextdisplay">
                <div className="hometextdisplay-1 text-left text-6xl black font-semibold relative mt-80 ml-40" ref={el}>
                    <span></span>
                </div>
                <div className="hometextdisplay-2 text-left text-6xl black font-semibold relative mt-6 ml-84" ref={el2}>
                    <span></span>
                </div>
                <div className="hometextdisplay-3 text-left text-6xl black font-semibold relative mt-6 ml-72" ref={el3}>
                    <span></span>
                </div>
            </div>
            </div>
            <div>
                    {/* <img src={icon} alt="icon" className="z-0 h-123 w-auto mr-40 mt-20"></img> */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        effect={'fade'}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                          }}
                        pagination={{
                        clickable: false,
                        renderBullet: function () {
                            return " ";
                            },
                        }}
                        navigation={false}
                        modules={[Pagination, EffectFade, Autoplay]}
                        // className="mySwiper"
                    >
                     {image.map((im, index) => (
                        <SwiperSlide>
                            <div
                                style={{
                                width: '800px',
                                height: '550px',
                                marginLeft: '58rem',
                                marginTop: '8rem',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                aspectRatio:10,
                                }}
                                className="homeslider"
                            >
                                <img
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'auto',
                                }}
                                src={im.url}
                                alt={`Event ${index + 1}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
        </section>
    );
}
