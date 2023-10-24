import React from "react";
import haneef from "../assets/haneef.png"
import { FadeIn } from "../components/FadeIn";
import { RootLayout } from "../components/RootLayout";
export default function Landing() {


  return(
    <RootLayout>
  <div className="w-full min-h-screen overflow-auto scrollbar-hide flex flex-col gap-2 justify-center  md:grid md:grid-cols-2 md:items-center md:place-items-center ">
        <FadeIn className="md:absolute md:right-[-15px] md:bottom-0 md:w-[40rem]"
        >
  <img src={haneef} alt="haneef Shaik" 
  // className=" md:absolute md:right-[-15px] md:bottom-0 md:w-[40rem]"
   />
  </FadeIn>
  <FadeIn className="sticky  grid">
  <div className='z-20 text-white text-5xl md:text-6xl font-extrabold grid gap-1 ' >
    <div className="font-bold" >Hii, {"I'm"}</div>
    <div className="" >
  Haneef Shaik 
    </div>
    <div className="text-lg font-mono " > I Design and Develop Web Applications</div>
  <div>
  <span className=" text-2xl md:text-4xl"> <span className="text-gray-5200" >  {"<"}</span><span className="text-blue-500 font-medium">FullStack Developer </span>   <span className="text-gray-200" >{"/>"}</span>  </span>
  </div>
  </div>
  </FadeIn>
  </div>
    </RootLayout>
  )
}
