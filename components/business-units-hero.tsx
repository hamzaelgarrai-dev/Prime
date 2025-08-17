
"use client";
import Image from "next/image"
import CountUp from "react-countup";
import { useRef, useEffect, useState } from "react";

const stats = [
    { number: 420, suffix: "+", label: "Villes du monde entier" },
    { number: 820, suffix: "", label: "Projet contracté" },
    { number: 160, suffix: "+", label: "Projet terminé" },
    { number: 16, suffix: "+", label: "Ingénieurs experts" },
];
export default function BusinessHero(){
     const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return(

        <div className="realtive">

            <section className="w-full h-[610px] overflow-hidden">

            <div className="inset-0 absolute">
                            
               <Image 
               src="/Assets/apropps-hero.png"
               alt="Hero Background"
               width={1200} 
               height={600} 
               quality={100}
               className="w-full h-auto object-contain"
                />
                            
            </div>

        </section>

        <section ref={sectionRef} className="mb-40" >

            <div className=" h-[200px] bg-[#042433] w-[1080px] flex left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-2 absolute   ">

                <div className=" flex md:flex-row flex-col justify-around items-center mx-auto ">

                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[18px] font-semibold">Villes du monde entier</h3>
                        <h2 className="text-5xl font-bold text-white mx-12 pt-6">
                            {startCount ? (
                                <>
                                    <CountUp end={420} duration={2} />+
                                </>
                            ) : (
                                ''
                            )}
                        </h2>

                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#71838C] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[18px] font-semibold">Projet contracté</h3>
                        <h2 className="text-5xl font-bold text-white mx-8 pt-6">
                            {startCount ? <CountUp end={820} duration={2} /> : ''}
                        </h2>

                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#71838C] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[18px] font-semibold">Projet terminé</h3>
                        <h2 className="text-5xl font-bold text-white mx-4 pt-6">
                            {startCount ? (
                                <>
                                    <CountUp end={120} duration={2} />+
                                </>
                            ) : (
                                ''
                            )}
                        </h2>


                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#71838C] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[18px] font-semibold">Ingénieurs experts</h3>
                        <h2 className="text-5xl font-bold text-white mx-14 pt-6">
                            {startCount ? (
                                <>
                                    <CountUp end={16} duration={3} />+
                                </>
                            ) : (
                                ''
                            )}
                        </h2>

                    </div>

                </div>

            </div>

        </section>


        </div>

        

        
    )
}