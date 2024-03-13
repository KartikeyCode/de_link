"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import graphic from "@/public/graphics.png"
import Card from "@/app/components/card";
import Navbar from "@/app/components/navbar";
import { redirect } from "next/dist/server/api-utils";
export default function Home() {
  const router = useRouter();
  const handleMintNowClick = () => {
    router.push('/mint');
  };
  return (
    <div className="flex flex-col bg-black min-h-screen ">
        <Navbar/>
        <div className="flex flex-col ">
            <div className="flex flex-col md:flex-row gap-16 px-10 xl:py-20 xl:px-28 2xl:py-24 2xl:px-48">
              
                <div className="flex flex-col gap-5">
                    <h1 className=" xl:w-[40rem] 2xl:w-[60rem] text-white font-Inter font-semibold text-2xl xl:text-4xl "> de_link is your gateway to connect different.
We offer users the option to mint their own NFT exactly how they would want it with the added bonus of having it in a physical NFC attached card or sticker format.
The NFT acts as their social representative in public settings. 
Be it meetings, cohorts or hackathons, de_link allows you to express yourself and connect with other users seamlessly, creating an ecosystem of shared social net worth.</h1>
                    
                <Image src={graphic} alt="diagram" className="w-[25rem]" />
                </div>
                <div className="">
                <Card bgcolour="#000" outlinecolour="#FFD700" username="Stimpy"/>
                </div>
            </div>
        </div>
    </div>
  );
}
