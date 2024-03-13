"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Card from "./components/card";
import Navbar from "./components/navbar";
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
                    <h1 className=" xl:w-[40rem] 2xl:w-[60rem] text-white font-Inter font-semibold text-4xl xl:text-6xl "> Mint de_link NFTs, attain your NFC-enabled card, effortlessly share your social presence. </h1>
                    <h2 className="text-[#9D9A9A] font-Inter font-semibold text-lg xl:w-[30rem] 2xl:w-[60rem]"> Experience the fusion of digital art and tangible connection: mint your NFTs and design your NFC-enabled physical card. Customize it to reflect your personality while effortlessly sharing your social links with a simple tap. </h2>
                    <button onClick={handleMintNowClick} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                </div>
                <div className="">
                <Card bgcolour="#000" outlinecolour="#fff" username="WCBongZ"/>
                </div>
            </div>
        </div>
    </div>
  );
}
