import Link from "next/link"
import NextImage from "next/image"
import { Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../lib/constant";


export default function Footer() {

    return (

        <footer>

            <div className="w-full h-[505px] bg-[#B0C6CE] text-[#425E6B] flex flex-col justify-between">




                <div className=" max-w-[1080px] mx-auto flex md:flex-row flex-col justify-around items-start pt-42  ">



                    <div className=" mr-30">

                        <ul>



                            <div className=" min-w-[200px] w-full md:w-auto ">
                                <Link href="/" className="flex items-center pb-6  ">
                                    <NextImage
                                        src="/Assets/logo_pprime 1.png"
                                        alt="Pprime Logo"
                                        width={40}
                                        height={32}
                                        className="object-contain"
                                    />
                                </Link>

                                <p className="max-w-[750px]">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, libero laborum!
                                </p>


                            </div>



                        </ul>

                    </div>

                    <div className=" min-w-[200px] w-full md:w-auto mx-5">

                        <ul>
                            <p className="text-white font-medium text-2xl pb-4 ">Navigation</p>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Accueil</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Histoire Et Vision</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• business Units</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Secteurs d'activité</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Nous rejoindre</li>
                        </ul>

                    </div>

                    <div className=" min-w-[280px] w-full md:w-auto mx-5">

                        <ul>
                            <p className="text-white font-medium text-2xl pb-4 ">Secteurs D'activité</p>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Agriculture & Agroalimentaire</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Infrastructures & Industrie</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Tourisme & Santé</li>
                            <li className="text-md pb-2  hover:text-[#41A9D8] cursor-pointer">• Green Tech</li>
                        </ul>

                    </div>

                    <div className=" min-w-[220px] w-full md:w-auto ">

                        <ul>
                            <p className="text-white font-medium text-2xl pb-4 ">Contactez-nous</p>
                            <li>
                                <div className="flex items-center gap-3  pb-2">
                                    <Phone className="w-3.5 h-3.5" />
                                    <span className="text-md">{CONTACT_INFO.phone}</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3  pb-2">
                                    <Mail className="w-3.5 h-3.5" />
                                    <span className="text-md">{CONTACT_INFO.email}</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3  pb-2">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span className="text-md">{CONTACT_INFO.address}</span>
                                </div>
                            </li>
                        </ul>

                    </div>











                </div>

                <div className="w-full">
                    <div className="h-[1px] w-full bg-[#425E6B] my-4" />
                    <div className=" max-w-[1080px] mx-auto  flex md:flex-row flex-col justify-between items-start text-center pb-4 ">
                        <p className="text-xs">Copyright Pprime 2025. All rights reserved</p>
                        <div className="flex items-center space-x-3 ">
                            <Link href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="hover:opacity-80 transition-opacity ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#425E6B">
                                    <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                                </svg>
                            </Link>
                            <Link href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#425E6B">
                                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.59-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
                                </svg>
                            </Link>
                            <Link href={SOCIAL_LINKS.twitter} aria-label="Twitter" className="hover:opacity-80 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#425E6B">
                                    <path d="M14.2,10.7L22.6,1h-2.1l-7.3,8.4L7.5,1H1l8.4,12.7L1,23h2.1l7.6-8.7l6.1,8.7h6.5L14.2,10.7z M11.1,12.9l-0.9-1.2 L3.3,2.5h2.6l5.6,7.4l0.9,1.2l7.2,9.5h-2.6L11.1,12.9z" />
                                </svg>
                            </Link>
                            <Link href={SOCIAL_LINKS.facebook} aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#425E6B">
                                    <path d="M24,12.07C24,5.41,18.63,0,12,0S0,5.4,0,12.07C0,18.1,4.39,23.09,10.13,24v-8.44H7.08V12.07h3.04V9.41c0-3.01,1.8-4.67,4.54-4.67c1.31,0,2.68.23,2.68.23v2.95H15.83c-1.49,0-1.95.92-1.95,1.87v2.29h3.33l-.53,3.49H13.88V24C19.61,23.09,24,18.1,24,12.07" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
















        </footer>


    )
}