'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    'Fight against drug abuse!',
    'Stay healthy, stay drug-free!',
    'Choose life, not drugs!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="grid grid-cols-12 h-[calc(100vh-64px)]">
        <div className="flex flex-col col-span-7 justify-center">
          <div className="flex text-6xl font-bold px-12 py-6 transition-opacity duration-500 ease-in-out">
            {titles[titleIndex]}
          </div>
          <div className="flex text-2xl font-medium px-12 pb-6 animate-fadeIn">
            Drug abuse tears families apart.
          </div>
        </div>
        <div className="flex flex-1 col-span-5 justify-center items-center">
          <div className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src="/saynotodrugs.jpg"
              alt="saynotodrugs"
              width={450}
              height={600}
              className="rounded-lg shadow-lg drop-shadow-xl h-[635px]"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#000000] p-8 mt-8 text-center text-white">
        <h2 className="text-3xl font-semibold mb-4">The Global Impact of Drug Abuse</h2>
        <p className="text-lg">
          Over 35 million people worldwide suffer from drug use disorders.
        </p>
        <ul className="list-disc text-left mt-6 mx-auto w-2/3 space-y-2">
          <li><b>Marijuana:</b> Used by over 192 million people globally, with a significant impact on youth and memory retention.</li>
          <li><b>Cocaine:</b> Affects over 20 million individuals, leading to severe health and legal consequences.</li>
          <li><b>MDMA/Ecstasy:</b> Popular among youth, with severe risks such as dehydration and organ failure.</li>
        </ul>
      </div>

      {/* Drug Cards Section */}
      <div className="flex flex-col h-dvh">
        <div className="flex flex-row px-8 space-x-6 mt-20 h-3/5">
          {['Marijuana', 'Cocaine', 'MDMA/Ecstasy'].map((drug, index) => (
            <div key={drug} className={`animate-slideUp${index + 1}`}>
              <Card className="px-8 border-accent drop-shadow-md transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>
                    {drug}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {drug === 'Marijuana' && "A drug made from the cannabis plant. It's sometimes used for relaxation or to get 'high.'"}
                  {drug === 'Cocaine' && "A powerful stimulant drug that affects the brain by increasing dopamine levels, leading to intense feelings of euphoria, energy, and alertness."}
                  {drug === 'MDMA/Ecstasy' && "A synthetic drug often used in parties and clubs."}
                </CardContent>
                <CardContent>
                  {drug === 'Marijuana' && "Effects: Affects memory, concentration, and motor skills. Can lead to anxiety or paranoia."}
                  {drug === 'Cocaine' && "Effects: Increases heart rate, alertness, and energy but can lead to heart problems, anxiety, and addiction."}
                  {drug === 'MDMA/Ecstasy' && "Effects: Causes feelings of euphoria and closeness but can increase body temperature, leading to serious health risks."}
                </CardContent>
                <CardFooter>
                  <a
                    href={`https://nida.nih.gov/research-topics/${drug.toLowerCase().replace('/', '-')}`}
                    target="_blank"
                    className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <Button>
                      Find out more
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col items-center px-8 mt-10 text-center">
        <h2 className="text-4xl font-bold mb-4">What Can You Do to Help?</h2>
        <p className="text-lg mb-6">
          Join the fight against drug abuse by spreading awareness, helping those in need, and making informed choices. Together, we can create a drug-free future!
        </p>
        <div className="flex space-x-4">
          <Button className="transition-transform duration-300 hover:scale-105">
            <Link href="/get-involved">Get Involved</Link>
          </Button>
          <Button className="transition-transform duration-300 hover:scale-105">
            <Link href="/resources">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-100 py-8 mt-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Stories of Hope</h2>
        <div className="flex flex-row justify-center space-x-6">
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>John's Journey</CardTitle>
            </CardHeader>
            <CardContent>
              "After years of addiction, I found strength through awareness programs and the support of my family. Today, I am drug-free and grateful."
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>Emma's Support</CardTitle>
            </CardHeader>
            <CardContent>
              "Watching my brother struggle was painful, but finding the right resources and being there for him changed everything."
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-10 text-center">
        <p>&copy; 2024 Anti-Drug Awareness. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/about" className="hover:underline">About Us</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
