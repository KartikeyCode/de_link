import Navbar from "../components/navbar"
import Card from "../components/card"
export default function Mint(){
    return(
        <div className="min-h-screen bg-black">
            <Navbar/>
            <div className="flex justify-center gap-10">
                <div className=" standard flex flex-col ">
                <Card bgcolour="#000" outlinecolour="#fff" username="WCBongZ"/>
                <button onClick={handleMintNowClick} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                    </div> 
                    <div>
                <Card bgcolour="#000" outlinecolour="#fff" username="WCBongZ"/>
                <button onClick={handleMintNowClick} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                    </div>
                    <div>
                <Card bgcolour="#000" outlinecolour="#fff" username="WCBongZ"/>
                <button onClick={handleMintNowClick} className=" hover:scale-105 transition-all bg-white text-black rounded-3xl w-44 h-10 font-Inter text-base font-semibold"> Mint Now </button>
                    </div>
            </div>
        </div>
    )
}