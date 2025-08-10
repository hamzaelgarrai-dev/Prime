import Image from "next/image"
import { MoveRight , MoveLeft } from "lucide-react"
export default function ClientReviews(){

    return(
        <div className="w-full h-140 bg-white mb-20">

            <div className="max-w-[1080px] mx-auto h-[325px]  flex flex-row justify-center items-center  ">

                <div className="w-115  h-full relative ">

                    <div className="flex flex-col pr-7  ">

                        <h2 className="font-bold text-4xl max-w-[420px] pb-6 text-[#042433]">Que Disent Nos Clients Précieux</h2>

                        <p className="max-w-[410px] font-medium text-[15px] pb-6 text-[#042433A3]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <div className="flex flex-row gap-4 absolute bottom-0 ">

                            <div className="h-10 w-17 rounded-3xl border-2 border-[#042433] flex items-center justify-center cursor-pointer hover:bg-[#042433] hover:text-white ">
                                <MoveLeft className="" />
                            </div>
                            <div className="h-10 w-17 rounded-3xl border-2 border-[#042433] bg-[#042433] flex items-center justify-center cursor-pointer ">
                                <MoveRight className="text-white" />
                            </div>

                        </div>
                        
                        

                    </div>


                </div>




                
                <div className="w-155  h-full bg-[#B0C6CE] flex flex-row items-center justify-between">

                    <Image
                          src='/Assets/Clients/client1.jpg'
                          alt="frame33"
                          width={260}
                          height={10}
                          quality={100}
                          className="h-full object-cover"
                          />
                    <div className="flex flex-col pr-7 text-white">

                        <p className="max-w-[300px] font-medium text-[16.5px] pb-6">Avoir de l'énergie solaire nous a rendus plus autonomes. Avec le système de batterie, nous ne nous inquiétons jamais des coupures de courant, et nos factures d'énergie n'ont jamais été aussi basses. C'est un énorme soulagement, surtout pendant la saison des tempêtes.</p>
                        <h2 className="font-medium text-[18px]">Jane Cooper</h2>
                        <p className="font-medium text-xs">Homeowner</p>

                    </div>
                    
                </div>

            </div>

           

        </div>
    )
}