import { ArrowUpRight } from "lucide-react";
import Image from "next/image"
export default function SecteurHero(){

    return(

        <div>

            <section className="w-full h-[900px] overflow-hidden">
        
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
        
                </section>.

                <div className="bg-[#042433] w-[1080px] h-[325px] mx-auto -mt-120 flex flex-col justify-between items-center md:flex-row relative mb-48"  >
                
                            <div className="text-white ml-8 p-15 pb-34 text-3xl font-bold ">
                                <h1 className="">De l’énergie pour vos projets, quel que soit leur ampleur !</h1>
                            </div>
                            <div className="text-[#CBCBCB] text-[14.5px] mr-8 p-15 max-w-[520px] mb-10">
                                <p>pprime s’engages à fournir des solutions énergétiques adaptées aux besoins spécifiques de ses clients, avec une équipe d'experts prête à relever tous les défis, garantissant ainsi une alimentation énergétique fiable et durable pour vos projets.</p>
                                <div className="pt-7">
                
                                    <a
                         href="https://www.linkedin.com/company/p-prime/posts/?feedView=all"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-[#ffffff] text-[#002639]  text-[14px] px-6 py-3 absolute bottom-15  rounded-full flex items-center gap-1 font-bold transition-all group
                             hover:bg-[#3da5d9] hover:text-white"
                >
                          Découvrez pprimer
                          <div
                            className="bg-[#002639] border border-white w-8 h-8 rounded-2xl ml-2  flex items-center justify-center transition-all
                                       group-hover:bg-[#3da5d9] group-hover:border-white"
                          >
                
                            
                            <ArrowUpRight
                              className="w-4 h-4 text-white transition-transform duration-300 rotate-45
                                         group-hover:rotate-0 group-hover:text-[#ffffff]"
                            />
                          </div>
                        </a>
                
                
                                </div>
                                
                            </div>
                
                        </div>


        </div>
        
    )
}