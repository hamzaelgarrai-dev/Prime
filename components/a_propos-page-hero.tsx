import Image from "next/image"
export default function ABOUTHERO(){

    return(
        
            <section className="relative w-full h-[1010px] overflow-hidden">
                            <div className=" absolute inset-0 -z-10">
                    
                              <Image 
                              src="/Assets/apropps-hero.png"
                              alt="Hero Background"
                              width={1200} 
                              height={600} 
                              quality={100}
                              className="w-full h-auto object-contain"
                               />
                    
                            </div>
                            <div className="bg-[#042433]  w-[1080px] h-[525px] mx-auto  absolute -bottom-40 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-around items-center">

                            <div className=" h-40 w-60 -mt-60">
                                <h2 className="text-white font-semibold text-[28px] leading-snug">Nous sommes étroitement connectés à nos communautés.</h2>
                            </div>
                            <div className="h-110 w-150 flex justify-center items-center mr-10">

                                <div className=" grid grid-cols-2 grid-rows-2 gap-32 gap-y-22 p-18">

                                <div className="w-50 h-38  flex flex-col ">
                                    <Image
                                    src="/Assets/apropos-card1.png"
                                    alt="img1"
                                    width={53}
                                    height={53}
                                    quality={100}
                                    className="pb-2.5 filter brightness-0 invert sepia saturate-0 opacity-60"
                                    
                                    />
                                    <h3 className="text-white font-bold pb-2.5">Équipes Dédiées</h3>
                                    <p className="text-[12.5px] text-[#CBCBCB]">Engagés à aider nos clients à atteindre leurs objectifs, à personnaliser leurs expériences</p>
                                </div>

                                <div className="w-65 h-38  flex flex-col ">
                                    <Image
                                    src="/Assets/apropos-card2.png"
                                    alt="img1"
                                    width={53}
                                    height={53}
                                    quality={100}
                                    className="pb-2.5 filter brightness-0 invert sepia saturate-0 opacity-60"
                                    
                                    />
                                    <h3 className="text-white font-bold pb-2.5">Vrais Partenaires</h3>
                                    <p className="text-[12.5px] text-[#CBCBCB]">Notre fort sentiment d'identification avec les projets des clients signifie que nous nous efforçons constamment</p>
                                </div>
                                <div className="w-58 h-38 flex flex-col ">
                                    <Image
                                    src="/Assets/apropos-card3.png"
                                    alt="img1"
                                    width={53}
                                    height={53}
                                    quality={100}
                                    className="pb-2.5 filter brightness-0 invert sepia saturate-0 opacity-60"
                                    
                                    />
                                    <h3 className="text-white font-bold pb-2.5">Savoir-faire Mondial</h3>
                                    <p className="text-[12.5px] text-[#CBCBCB]">Ils ne sont pas encore au courant. Nous adoptonsةune approche progressive de la technologie et des techniques de marketing</p>
                                </div>

                                <div className="w-70 h-38 flex flex-col ">
                                    
                                    <Image
                                    src="/Assets/apropos-card4.png"
                                    alt="img1"
                                    width={53}
                                    height={53}
                                    quality={100}
                                    className="pb-2.5 filter brightness-0 invert sepia saturate-0 opacity-60"
                                    
                                    />
                                    <h3 className="text-white font-bold pb-2.5">Concentrez-vous sur l'Innovation</h3>
                                    <p className="text-[12.5px] text-[#CBCBCB] max-w-65">Ce sentiment d'identification signifie également que nous valorisons et promouvons une interaction fluide</p>
                                </div>
                            </div>

                            </div>
                            

                            </div>
         </section>
        
    )
}