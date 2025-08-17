"use client";
import CountUp from "react-countup";
import { useRef, useEffect, useState } from "react";

const stats = [
    { number: 420, suffix: "+", label: "Villes du monde entier" },
    { number: 820, suffix: "", label: "Projet contracté" },
    { number: 160, suffix: "+", label: "Projet terminé" },
    { number: 16, suffix: "+", label: "Ingénieurs experts" },
];

export default function StatsBanner() {
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


    return (

        <section ref={sectionRef} className="bg-[#F3F7F8] mb-25">

            <div className=" w-full h-[330px] -mt-24">

                <div className="max-w-[1080px] mx-auto flex md:flex-row flex-col justify-around items-start pt-40">

                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[20px] font-semibold">Villes du monde entier</h3>
                        <h2 className="text-5xl font-bold text-[#042433] mx-12 pt-6">
                            {startCount ? (
                                <>
                                    <CountUp end={420} duration={2} />+
                                </>
                            ) : (
                                ''
                            )}
                        </h2>

                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#DFE5E8] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[20px] font-semibold">Projet contracté</h3>
                        <h2 className="text-5xl font-bold text-[#042433] mx-8 pt-6">
                            {startCount ? <CountUp end={820} duration={2} /> : ''}
                        </h2>

                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#DFE5E8] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[20px] font-semibold">Projet terminé</h3>
                        <h2 className="text-5xl font-bold text-[#042433] mx-4 pt-6">
                            {startCount ? (
                                <>
                                    <CountUp end={120} duration={2} />+
                                </>
                            ) : (
                                ''
                            )}
                        </h2>


                    </div>
                    <div className="w-px h-38 -mt-4 bg-[#DFE5E8] mx-2"></div>
                    <div className="mx-5">
                        <h3 className="text-[#71838C] text-[20px] font-semibold">Ingénieurs experts</h3>
                        <h2 className="text-5xl font-bold text-[#042433] mx-14 pt-6">
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

    )
}