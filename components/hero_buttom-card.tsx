import { ArrowUpRight } from "lucide-react";
export default function HeroButtomCard() {

    return (

        <div className="bg-[#042433] w-[1080px] h-[325px] mx-auto -mt-58 flex flex-col justify-between items-center md:flex-row relative"  >

            <div className="text-white ml-8 p-15 text-3xl font-bold max-w-[520px]">
                <h1>Experts en installations électriques, nous proposons
                    nos services dans une variété
                    de domaines
                </h1>
            </div>
            <div className="text-[#CBCBCB] mr-8 p-15 max-w-[520px] mb-10">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
    )


}