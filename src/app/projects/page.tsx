import { Spotlight } from "@/components/ui/Spotlight";


export default function ProjectsPage() {
  return (
    
    <div className="relative w-screen h-auto bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="flex items-center flex-col">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" /> 
      <h1 className="font-bold mt-36 mb-10 text-2xl lg:text-5xl text-white ">Projects</h1>
      </div>

      <div className="ml-10 lg:ml-32 mb-20">
        <h2 className="text-white font-bold text-lg lg:text-2xl mb-4">Research</h2>
        <p className="text-white">Reseach Paper: VCVIS</p>
        <p className="text-white">Reseach Paper: Object Detection</p>
        <p className="text-white">Reseach Paper: VCVIS</p>
        <p className="text-white">Reseach Paper: Object Detection</p>
        <p className="text-white">Reseach Paper: VCVIS</p>
        <p className="text-white">Reseach Paper: Object Detection</p>
      </div>

      <div className="ml-10 lg:ml-32 mb-20">
        <h2 className="text-white font-bold text-lg lg:text-2xl mb-4">Software</h2>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
        <p className="text-white">Software: Portforlio</p>
      </div>
    </div>
    

  );
}
