import ABOUTHERO from "@/components/a_propos-page-hero";
import ClientReviews from "@/components/client_reviews";
import LEARDERSHIP from "@/components/leadership";
import Partenaires from "@/components/partenaires";
import StatsBanner from "@/components/stats_banner";

export default function APROPOSPage(){
    return(

        <>
        <ABOUTHERO></ABOUTHERO>
        <Partenaires></Partenaires>
        <LEARDERSHIP></LEARDERSHIP>
        <StatsBanner></StatsBanner>
        <ClientReviews></ClientReviews>
        </>
    )
}
