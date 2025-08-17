import Image from "next/image"
export default function PrimeSolution(){
    return(

        <div className="bg-white w-full h-[950px] mb-20">

            <div className="mx-auto flex flex-col justify-center items-center ">

                <h2 className="font-bold  text-4xl text-[#042433] pb-2.5">Pprime Solutions</h2>
                <p className="font-medium text-[#042433A3] pb-20 text-center">Nos services d'installation électrique couvrent une large gamme <br /> de secteurs d'activité</p>

            </div>

            <div className="max-w-[1080px] grid grid-cols-3 gap-8 mx-auto">

                <div className="bg-[#D8E4E9] h-80 w-88 flex flex-col">
                    <div className="relative h-30">

                      <Image
                        src="/Assets/solution1.png"
                        alt="solution1"
                        fill
                        quality={100}
                        className="object-cover w-full "
                      />

                    </div>
                     
                   <div className="p-8 mt-16 absolute">

                        <div className="bg-[#042433] h-15 w-32 flex items-center justify-center">

                            <Image
                            src= '/Assets/p_energy 1.png'
                            alt="p-energy"
                            width={120}
                            height={120}
                            quality={100}
                            />

                        </div>



                        <h1 className="pt-4 pb-2.5 font-bold">P ENERGY</h1>
                        <p className="max-w-75 font-medium text-xs">P Energy permet le monitorage en temps réel de la consommation énergétique et l'analyse des archives. Son intelligence artificielle prédit les coûts futurs et détecte les anomalies électriques, réduisant ainsi les gaspillages et optimisant l'infrastructure énergétique.</p>

                    </div>
                </div>

                <div className="bg-[#D8E4E9] h-80 w-88 flex flex-col">
                    <div className="relative h-30">

                      <Image
                        src="/Assets/solution2.png"
                        alt="solution1"
                        fill
                        quality={100}
                        className="object-cover w-full "
                      />

                    </div>
                    <div className="p-8 mt-16 absolute">

                        <div className="bg-[#042433] h-15 w-32 flex items-center justify-center">

                            <Image
                            src= '/Assets/p_health 1.png'
                            alt="p-energy"
                            width={120}
                            height={120}
                            quality={100}
                            />

                        </div>



                        <h1 className="pt-4 pb-2.5 font-bold">P HEALTH</h1>
                        <p className="max-w-75 font-medium text-xs">Solution pour le monitoring des paramètres d'un bloc opératoire : écran tactile antimicrobien et contrôle climatique, éclairage et CTA automatisés, musique intégrée, horloge et chronomètres, alarmes pour l'état des équipements techniques.</p>

                    </div>
                </div>
                <div className="bg-[#D8E4E9] h-80 w-88 flex flex-col">
                    <div className="relative h-30">

                      <Image
                        src="/Assets/solution3.png"
                        alt="solution1"
                        fill
                        quality={100}
                        className="object-cover w-full "
                      />

                    </div>
                    <div className="p-8 mt-16 absolute">

                        <div className="bg-[#042433] h-15 w-32 flex items-center justify-center">

                            <Image
                            src= '/Assets/smart_cities 1.png'
                            alt="p-energy"
                            width={120}
                            height={120}
                            quality={100}
                            />

                        </div>



                        <h1 className="pt-4 pb-2.5 font-bold">Smart Cities</h1>
                        <p className="max-w-75 font-medium text-xs">Monitoring des paramètres d'un bloc opératoire : réduisez la consommation énergétique grâce à des appareils connectés et optimisez l'irrigation et la qualité de l'air pour une gestion intelligente et efficace</p>

                    </div>
                    
                </div>

                <div className="bg-[#D8E4E9] h-80 w-130 col-span-1 col-start-1">
                    <div className="bg-[#D8E4E9] h-80 w-130 flex flex-col">
                    <div className="relative h-30">

                      <Image
                        src="/Assets/solution4.png"
                        alt="solution1"
                        fill
                        quality={100}
                        className="object-cover w-full "
                      />

                    </div>
                    <div className="p-8 mt-16 absolute">

                        <div className="bg-[#042433] h-15 w-32 flex items-center justify-center">

                            <Image
                            src= '/Assets/pi_40 1.png'
                            alt="p-energy"
                            width={120}
                            height={120}
                            quality={100}
                            />

                        </div>



                        <h1 className="pt-4 pb-2.5 font-bold">P I 4.0</h1>
                        <p className="max-w-115 font-medium text-xs">Les solutions de PPrime pour l'Industrie 4.0 permettent l'automatisation, la connectivité, la gestion des coûts, le monitoring en temps réel, la flexibilité et l'analyse des données pour le bloc opératoire.</p>

                    </div>
                    
                </div>
                </div>
                <div className="bg-[#D8E4E9] h-80 w-130 ml-48 col-span-1 col-start-2">
                    <div className="bg-[#D8E4E9] h-80 w-130 flex flex-col">
                    <div className="relative h-30">

                      <Image
                        src="/Assets/solution5.png"
                        alt="solution1"
                        fill
                        quality={100}
                        className="object-cover w-full "
                      />

                    </div>
                    <div className="p-8 mt-16 absolute">

                        <div className="bg-[#042433] h-15 w-32 flex items-center justify-center">

                            <Image
                            src= '/Assets/p_dever 1.png'
                            alt="p-energy"
                            width={120}
                            height={120}
                            quality={100}
                            />

                        </div>



                        <h1 className="pt-4 pb-2.5 font-bold">P Dever</h1>
                        <p className="max-w-110 font-medium text-xs">P Dever Solution offre un déverdissage d'agrumes par PPrime, assurant temps réel et fiabilité. Avec une application mobile, elle propose une solution cloud et locale.</p>

                    </div>
                    
                </div>
                </div>

            </div>


        </div>
    )
}