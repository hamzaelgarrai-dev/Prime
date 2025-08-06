import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
export default function APROPOS(){
    return(
        
            <section className="relative w-full h-[720px]">
                

                    <Image 
                      src="/Assets/image 20.png"
                      alt="Background"
                      width={1200} // set desired width
                      height={600} // set desired height
                      quality={100}
                      className="w-full h-auto object-contain"
                       />


                <div className="absolute bg-[#042433] w-[580px] h-[325px] bottom-65 left-1/2 transform -translate-x-1/2  flex flex-col justify-between items-center">

                    <h2 className="text-white font-bold text-[27px] pt-16 ">À PROPOS DE NOUS</h2>
                    <div className="text-[#CBCBCB] pb-36  max-w-[390px] text-[14px] font-medium">

                        <p>PPrime oeuvre dans le domaine des installations  </p>
                        <p className="pl-4">électriques destinées aux secteurs agricole,</p>
                        <p className="pl-8">agroalimentaire, tertiaire et industriel.</p>

                    </div>
                    
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

            </section>
        
    )
}