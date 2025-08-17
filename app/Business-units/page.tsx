import ABOUTHERO from "@/components/a_propos-page-hero";
import BusinessHero from "@/components/business-units-hero";
import PrimeSolution from "@/components/prime-solution";
import SecteurActivite from "@/components/secteur_activite";
import StatsBanner from "@/components/stats_banner";

export default function BUSINESSUNITS(){
    return(
        <>

        <BusinessHero></BusinessHero>
        
        <SecteurActivite></SecteurActivite>
        <PrimeSolution></PrimeSolution>
        
        </>
    )
}