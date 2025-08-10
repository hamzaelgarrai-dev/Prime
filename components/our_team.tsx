import Image from "next/image"
export default function OurTeam(){

    return(
        <div className="bg-white w-full h-[700px] mb-40">

            <div className="max-w-[1080px] mx-auto flex flex-col justify-center items-center text-center pt-32">
                <h2 className="font-bold text-4xl text-[#042433] mb-4">Our teams</h2>
                <p className="text-[#042433A3] max-w-[460px] font-medium text-[15px]">Ensemble, pour un monde plus lumineux, vert et intelligent.</p>
                <div className="flex flex-wrap justify-center  gap-9 pt-14 ">

                    <div className="w-84 h-103 relative ">
                        <Image 
                        src={"/Assets/team1.png"}
                        alt="team-member"
                        width={200}
                        height={200}
                        quality={100}
                        className="w-84 h-103 object-fill"
                        />
                        <div className="w-84 h-20 bg-[#042433] absolute bottom-0 text-white p-4 ">
                            <h2 className="font-semibold text-sm text-start">Mohammed ElHabib Abaakil</h2>
                            <p className="text-start font-medium text-xs">CEO</p>
                        </div>
                    </div>
                    
                    <div className="w-84 h-103 relative">
                        <Image 
                        src={"/Assets/team2.jpg"}
                        alt="team-member"
                        width={200}
                        height={200}
                        quality={100}
                        className="w-84 h-103 object-fill"
                        />
                        <div className="w-84 h-20 bg-[#042433] absolute bottom-0 text-white p-4 ">
                            <h2 className="font-semibold text-sm text-start">Mohammed ElHabib Abaakil</h2>
                            <p className="text-start font-medium text-xs">CEO</p>
                        </div>
                    </div>

                    <div className="w-84 h-103 relative">
                        <Image 
                        src={"/Assets/team3.jpg"}
                        alt="team-member"
                        width={200}
                        height={200}
                        quality={100}
                        className="w-84 h-103 object-fill"
                        />

                        <div className="w-84 h-20 bg-[#042433] absolute bottom-0 text-white p-4 ">
                            <h2 className="font-semibold text-sm text-start">Mohammed ElHabib Abaakil</h2>
                            <p className="text-start font-medium text-xs">CEO</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}