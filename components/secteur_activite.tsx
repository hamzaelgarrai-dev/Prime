import Image from "next/image"
export default function SecteurActivite() {

    return (

        <div className="bg-white w-full h-[950px]">

            <div className="mx-auto flex flex-col justify-center items-center pt-10">

                <h2 className="font-bold  text-4xl text-[#042433] pb-2.5">Secteur d'activite</h2>
                <p className="font-medium text-[#042433A3] pb-20">Ensemble, pour un monde plus lumineux, vert et intelligent.</p>

            </div>

            <div className="flex justify-center items-center ">

                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[570px] w-full  max-w-[1080px]">
                    <div className="flex flex-row items-center justify-around bg-[#DFEAEF17] border border-gray-300 ">
                        
                        <Image
                        src='/Assets/Frame_32.png'
                        alt="frame32"
                        width={280}
                        height={280}
                        quality={100}
                        
                        />

                        <div className="flex flex-col pl-8">

                            <h1 className="font-bold tex-[24px] pb-28 text-[#042433]">Infrastructures & Industrie</h1>

                            <p className="text-[#787F82] pr-4 max-w-[380px] text-xs font-medium ">Services d'installation, de distribution, d'éclairage, d'automatisation, de sécurité électrique, de maintenance et d'efficacité énergétique pour soutenir le bon fonctionnement et la durabilité des sites industriels et des infrastructures critiques</p>


                        </div>


                        
                    </div>
                    <div className="flex flex-row items-center justify-between  bg-[#DFEAEF17] border border-gray-300">

                        <Image
                        src='/Assets/Frame_33.png'
                        alt="frame33"
                        width={280}
                        height={280}
                        quality={100}
                        />

                        <div className="flex flex-col pl-8">

                            <h1 className="font-bold tex-[24px] pb-20 text-[#042433]">Agriculture & Agroalimentaire</h1>

                            <p className="text-[#787F82] pr-4  max-w-[380px] text-xs font-medium ">Services d'installation, d'éclairage et d'automatisation adaptés aux besoins agricoles. Nous assurons également la sécurité électrique, fournissons des solutions d'alimentation pour les équipements et intègrons les énergies renouvelables, contribuant ainsi à l'efficacité et à la durabilité des exploitations.</p>


                        </div>
                        
                    </div>
                    <div className="flex flex-row items-center justify-between  bg-[#DFEAEF17] border border-gray-300">

                        <Image
                        src='/Assets/Frame_34.png'
                        alt="frame34"
                        width={280}
                        height={280}
                        quality={100}
                        
                        />

                        <div className="flex flex-col pl-8">

                            <h1 className="font-bold tex-[24px] pb-28 text-[#042433]">Green Tech</h1>

                            <p className="text-[#787F82] pr-4 max-w-[380px] text-xs font-medium ">Des services axés sur les énergies renouvelables, l'efficacité énergétique et les technologies intelligentes pour promouvoir la durabilité et la transition vers un avenir énergétique propre.</p>


                        </div>
                        
                    </div>
                    <div className="flex flex-row items-center justify-between  bg-[#DFEAEF17] border border-gray-300">

                        <Image
                        src='/Assets/Frame_35.png'
                        alt="frame35"
                        width={280}
                        height={280}
                        quality={100}
                        
                        />

                        <div className="flex flex-col pl-8">

                            <h1 className="font-bold tex-[24px] pb-28 text-[#042433]">Tertiaire</h1>

                            <p className="text-[#787F82] pr-4 max-w-[380px] text-xs font-medium ">Des services spécialisés pour garantir la sécurité, la fiabilité, l'efficacité énergétique et la continuité des opérations dans les établissements touristiques, les hôpitaux, les cliniques et autres installations de santé.</p>


                        </div>
                        
                    </div>

                </div>

            </div>





        </div>
    )

}