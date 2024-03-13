"use client"
import * as React from 'react'
import Navbar from "../components/navbar"
import {useAccount} from 'wagmi'
import { useWriteContract } from 'wagmi' 
import Card from "../components/card"
import abi from "@/app/contracts/abi.js"
export default function Mint(){
    const {address,isConnected} = useAccount();

    const {writeContract} = useWriteContract();
    const standarduri = "https://violet-youthful-kingfisher-561.mypinata.cloud/ipfs/QmPphEVjqkncqf9as1qscGTrNyGgtMyVRPC93D7bxVeyAj";
    const golduri = "https://violet-youthful-kingfisher-561.mypinata.cloud/ipfs/QmdmHe5XMmFwbTmodoQd8qK7MiMGrjw7rvvV89thJ4ZCTz";
    const platuri = "https://violet-youthful-kingfisher-561.mypinata.cloud/ipfs/QmTTZFtm4vsSdZnBuqNve6286U1LHHbRqNYzcJU8ubtoRn";
    const handleStandardMint = () => {
        isConnected? 
        
        writeContract({ 
            abi,
            address: '0x74De3F1a404E14D8B5013da5f937bf4DC2F4a626',
            functionName: 'safeMint',
            args: [
                address,
                standarduri,
            ],
        })
        :
        alert("please connect to wallet first")
    };
    const handleGoldMint = () => {
        isConnected? 
        writeContract({ 
            abi,
            address: '0x74De3F1a404E14D8B5013da5f937bf4DC2F4a626',
            functionName: 'safeMint',
            args: [
                address,
                golduri,
            ],
        })
        :
        alert("please connect to wallet first")
    };
    const handlePlatMint = () => {
        isConnected? 
        writeContract({ 
            abi,
            address: '0x74De3F1a404E14D8B5013da5f937bf4DC2F4a626',
            functionName: 'safeMint',
            args: [
              address,
              standarduri,
            ],
         })
         :
        alert("please connect to wallet first")
      };
    return(
        <div className="min-h-screen bg-black">
            <Navbar/>
            <div className="flex justify-center gap-10">
                <div className=" standard flex flex-col items-center gap-10">
                <Card bgcolour="#000" outlinecolour="#90EE90" username="WCBongZ"/>
                <button onClick={handleStandardMint} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                <h1 className='text-white font-Inter text-2xl'> $10 </h1>
                    </div> 
                    <div className=" gold flex flex-col items-center gap-10">
                <Card bgcolour="#000" outlinecolour="#FFD700" username="WCBongZ"/>
                <button onClick={handleGoldMint} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                <h1 className='text-white font-Inter text-2xl'> $30 </h1>
                    </div>
                    <div className=" plat flex flex-col items-center gap-10">
                <Card bgcolour="#000" outlinecolour="#E5E4E2" username="WCBongZ"/>
                <button onClick={handlePlatMint} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                <h1 className='text-white font-Inter text-2xl'> $40 </h1>
                    </div>
            </div> 
        </div>
    )
}