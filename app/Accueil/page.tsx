
import Image from "next/image";
export default function Home() {
  return (

    <main>
      <section>
        <div className=" h-screen w-full">

          <Image 
          src= "/Assets/hero.png" 
          alt="Hero Background"
          layout="fill" 
          objectFit="cover" 
          quality={100}  />

             
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-5xl font-bold mb-4">Your Hero Title</h1>
            <p className="text-xl text-center max-w-2xl">
              A compelling description for your hero section.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
              Call to Action
            </button>
          </div>
          

          

        </div>
      </section>
    </main>
    
  );
}
