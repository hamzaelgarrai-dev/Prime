import Image from "next/image"
export default function LEARDERSHIP(){
    return(

        <div className="w-full h-145 bg-[#042433] -bottom-2 relative mt-8 flex flex-row justify-items-center justify-between">

            <div className="">
                       <Image 
                        src={"/Assets/apropos-team.png"}
                        alt="team-member"
                        width={400}
                        height={400}
                        quality={100}
                        className=" w-[540px] h-145 "
                        />
            </div>
            <div className=" w-115  mr-40 mt-20 flex flex-col ">
                <h2 className="text-2xl font-semibold text-white max-w-90 mb-7">Nous avons un impact positif à travers le Maroc et au-delà.</h2>
                <h5 className="font-semibold text-white text-[13px] mb-2.5">Stratégie et gouvernance</h5>
                <p className="text-[12.5px] text-[#CBCBCB]">Depuis plus de 20 ans, PPrime s’est imposée comme un acteur clé dans le domaine des installations électriques et des technologies vertes. Notre stratégie repose sur l’innovation, la qualité de service et l’accompagnement durable de nos clients. Elle soutient les projets les plus exigeants, valorise l’efficacité énergétique et favorise des </p>
                <div className="w-115 h-px mt-2.5 mb-2.5 bg-[#CBCBCB] mx-2"></div>
                <h5 className="font-semibold text-white text-[13px] mb-2.5">Leadership</h5>
                <div className="w-115 h-px mt-2.5 mb-2.5 bg-[#CBCBCB] mx-2"></div>
                <h5 className="font-semibold text-white text-[13px] mb-2.5">Priorités et partenariats</h5>
                <div className="w-115 h-px mt-2.5 mb-2.5 bg-[#CBCBCB] mx-2"></div>
                <h5 className="font-semibold text-white text-[13px] mb-2.5">Priorités et partenariats</h5>
                <div className="w-115 h-px mt-2.5 bg-[#CBCBCB] mx-2"></div>
                
                
            </div>

        </div>


    )
}