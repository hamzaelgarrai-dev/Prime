import Image from "next/image";

export default function Hero(){

    return(

        <section className="relative w-full h-[880px] overflow-hidden">
                <div className=" absolute inset-0 -z-10">
        
                  <Image 
                  src="/Assets/hero.png"
                  alt="Hero Background"
                  width={1200} // set desired width
                  height={600} // set desired height
                  quality={100}
                  className="w-full h-auto object-contain"
                   />
        
                </div>
              </section>
    )
}