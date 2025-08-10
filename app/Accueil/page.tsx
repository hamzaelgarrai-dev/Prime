
import APROPOS from "@/components/a_propos";
import ClientReviews from "@/components/client_reviews";
import Hero from "@/components/hero";
import HeroButtomCard from "@/components/hero_buttom-card";
import OurTeam from "@/components/our_team";
import Partenaires from "@/components/partenaires";
import SecteurActivite from "@/components/secteur_activite";
import StatsBanner from "@/components/stats_banner";
export default function Home() {
  return (

    <>

    <Hero></Hero>
    
    <HeroButtomCard></HeroButtomCard>
    <StatsBanner></StatsBanner>
    <SecteurActivite></SecteurActivite>
    <APROPOS></APROPOS>
    <Partenaires></Partenaires>
    <OurTeam></OurTeam>
    <ClientReviews></ClientReviews>
    
    
    </>



    
    
  );
}
