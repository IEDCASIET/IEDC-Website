import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";

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
        <section>
            <Navbar/>
            <div className='text-left text-4xl black font-semibold bg-cover bg-no-repeat h-screen absolute inset-0' style={{backgroundImage: `url('src/assets/bgimage.png')`, filter: 'saturate(1)'}}>
                <div className="text-left text-6xl black font-semibold relative mt-80 ml-40" ref={el}>
                    <span></span>
                </div>
                <div className="text-left text-6xl black font-semibold relative mt-6 ml-84" ref={el2}>
                    <span></span>
                </div>
                <div className="text-left text-6xl black font-semibold relative mt-6 ml-72" ref={el3}>
                    <span></span>
                </div>
            </div>
            {/* <About/> */}
        </section>
    );
}
