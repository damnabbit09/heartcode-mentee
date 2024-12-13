import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-12 h-[calc(100vh-64px)]">
        <div className="flex flex-col col-span-7 justify-center">
          <div className="flex text-6xl font-bold px-12 py-6">Fight against drug abuse!</div>
          <div className="flex text-2xl font-medium px-12 pb-6">Here is some information on the bad effects of drugs</div>
          <div></div>
        </div>
        <div className="flex flex-1 col-span-5 justify-center items-center">
          <Image 
            src="/saynotodrugs.jpg" 
            alt="saynotodrugs" 
            width={450} 
            height={600} 
            className="rounded-lg shadow-lg h-[635px]" 
            objectPosition="center"
            objectFit="contain"/>
        </div>
      </div>
      <div className="flex flex-col h-dvh mt-16">
        <p className="py-4 px-12 text-xl font-semibold mt-20">Marijuana can affect your memory, concentration and lead to anxiety and paranoia!</p>
        <p className="py-4 px-12 text-xl font-semibold">Cocaine increases heart rate and can cause heart problems that may result in death!</p>
        <p className="py-4 px-12 text-xl font-semibold">Esctasy can increase body temperature and lead to serious health risks!</p>
      </div>
    </div>
  );
}

