
import Image from "next/image";
export default function Home() {
  return (

    <main>
      <section className="relative w-full h-[1207px] overflow-hidden">
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
    </main>
    
  );
}
