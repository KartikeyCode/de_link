import Image from "next/image";
import NFC from "@/public/nfc.png";
import pewds from "@/public/pewds.jpg"

export default function Card({ bgcolour, outlinecolour, username}) {
    return (
        <div className="2xl:w-[30rem] xl:w-[20rem] xl:h-[28rem] 2xl:h-[40rem] rounded-2xl flex flex-col items-center" style={{ backgroundColor: bgcolour, border: `5px solid ${outlinecolour}` }}>
            <div className="flex items-center xl:gap-7 2xl:gap-10">
                <div className="flex flex-col pl-5">
                        <h1 className="text-white font-Russo_One xl:text-4xl 2xl:text-6xl"> de_link </h1>
                        <h2 className="text-white font-Russo_One xl:text-3xl 2xl:text-5xl text-right"> de_link </h2>
                        <h3 className="text-white font-Russo_One xl:text-2xl 2xl:text-4xl text-right"> de_link </h3>
                </div>
                <Image style={{  borderColor: `${outlinecolour}` }} className="w-36 h-40  rounded-tr-xl xl:w-32 xl:h-40 2xl:w-48 2xl:h-60 border-4 border-r-0 border-t-0 rounded-b-xl rounded-r-none " src={pewds} alt="design.png" />
            </div>
            <div className="flex 2xl:mt-10 items-center">
                <h2 className="font-Inter 2xl:mt-0 xl:mt-20 font-bold text-2xl text-white">@{username}</h2>
            </div>
            <div className="flex xl:mt-[0.4rem]  2xl:mt-[6rem] items-center self-start  gap-5">
            <Image style={{  borderColor: `${outlinecolour}` }} className=" w-48 rounded-bl-xl 2xl:w-80 xl:w-52 mt-10 border-4 border-l-0 border-b-0 rounded-b-none rounded-r-xl shadow-2xl" src={pewds} alt="NFT" />
            <Image className=" w-20 h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 " src={NFC} /> 
            </div>
        </div>
    );
}
