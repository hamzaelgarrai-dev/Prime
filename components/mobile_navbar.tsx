"use client";
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react";


export default function Mobile_Navbar (){

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname =usePathname()
   const handleLinkClick = () => {
    setIsMenuOpen(false) 
  }

  const headerHeight = "480px"

    return(

        <>

        {/* Bouton menu mobile */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        {/* Menu mobile */}
        {isMenuOpen && ( 
          <div
            className={`md:hidden fixed right-0 w-full  bg-white shadow-md transform transition-transform duration-2000 ease-in-out z-[999]`}
            style={{ top: 80, height: `calc(100vh - ${headerHeight})` }} // Dynamic height and top
          >
            {/* Contenu du menu mobile */}
            <div className="flex flex-col gap-4 px-4 py-4">
              <Link
                href="/"
                onClick={handleLinkClick}
                className={`transition-colors text-sm font-bold ${pathname === "/" ? "text-[#3da5d9]" : "text-[#002639] hover:text-[#3da5d9]"}`}
              >
                Accueil
              </Link>
              <Link
                href="/a-propos"
                onClick={handleLinkClick}
                className={`transition-colors text-sm font-bold ${pathname === "/a-propos" ? "text-[#3da5d9]" : "text-[#002639] hover:text-[#3da5d9]"}`}
              >
                à propos
              </Link>
              <Link
                href="/businessUnits"
                onClick={handleLinkClick}
                className={`transition-colors text-sm font-bold ${pathname === "/businessUnits" ? "text-[#3da5d9]" : "text-[#002639] hover:text-[#3da5d9]"}`}
              >
                business Units
              </Link>
              <Link
                href="/secteurs-activite"
                onClick={handleLinkClick}
                className={`transition-colors text-sm font-bold ${pathname === "/secteurs-activite" ? "text-[#3da5d9]" : "text-[#002639] hover:text-[#3da5d9]"}`}
              >
                Secteurs d&apos;activité
              </Link>
              <Link
                href="/nous-rejoindre"
                onClick={handleLinkClick}
                className={`transition-colors text-sm font-bold ${pathname === "/nous-rejoindre" ? "text-[#3da5d9]" : "text-[#002639] hover:text-[#3da5d9]"}`}
              >
                Nous rejoindre
              </Link>
              <a
                href="https://www.linkedin.com/company/p-prime/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="bg-[#ffffff] text-[#002639] text-xs px-3 py-1.5 rounded-full flex items-center w-fit gap-1 font-bold transition-all group hover:bg-[#3da5d9] hover:text-white"
              >
                Découvrez pprimer
                <div className="bg-[#002639] border border-white w-6 h-6 rounded-2xl ml-2 flex items-center justify-center transition-all group-hover:bg-[#ffffff] group-hover:border-none">
                  <ArrowUpRight className="w-3 h-3 text-white transition-transform duration-300 rotate-45 group-hover:rotate-0 group-hover:text-[#3da5d9]" />
                </div>
              </a>
            </div>
          </div>
        )}
        
        
        </>

        



    )

    



}

