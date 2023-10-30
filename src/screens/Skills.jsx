import { useEffect } from "react";
import haneef from "../assets/haneef.png"
import { FadeIn } from "../components/FadeIn";
import styles from  "./Skills.module.css"
import { CssSvg, HtmlSvg, IconBootstrap, IconExpress, IconMongodb, IconMysql, IconNextjs, IconNodeJs, IconReact, IconSass, IconTailwind, JsSvg, TsSvg } from "../components/SvgFiles";
import { Tooltip } from "antd";
export default function Skills() {

  const techStack = [
    {
      id:1,
      name:"Html",
      icon:<HtmlSvg width="6rem" fill="#cccccc" className=" hover:fill-orange-500"   />,
      className:"text-orange-500",
    },
    {
      id:2,
      name:"CSS",
      className:"text-blue-600",
      icon:<CssSvg  width="6.5rem" stroke="#cccccc" className=" hover:stroke-blue-600 hover:drop-shadow-sm-black  "   />
    },
    {
      id:3,
      name:"Tailwind",
      className:"text-sky-400",
      icon:<IconTailwind  width="6.5rem" stroke="#cccccc" className=" hover:stroke-sky-400 hover:drop-shadow-sm-black  "   />
    },
    {
      id:4,
      name:"BootStrap",
      className:"text-purple-400",
      icon:<IconBootstrap  width="6.5rem" stroke="#cccccc" className=" hover:stroke-purple-400 hover:drop-shadow-sm-black  "   />
    },
    {
      id:5,
      name:"Sass",
      className:"text-pink-300",
      icon:<IconSass  width="6.5rem" stroke="#cccccc" className=" hover:fill-pink-300 hover:drop-shadow-sm-black  "   />
    },
    {
      id:6,
      name:"Java Script",
      className:"text-yellow-300",
      icon:<JsSvg  width="5.1em" fill="#cccccc" className=" hover:fill-yellow-300 hover:drop-shadow-sm-black rounded-lg "   />
    },
    {
      id:7,
      name:"Type Script",
      className:"text-blue-500",
      icon:<TsSvg  width="5.1rem" fill="#cccccc" className=" hover:fill-blue-500 hover:drop-shadow-sm-black rounded-lg"   />
    },
    {
      id:8,
      name:"React js",
      className:"text-sky-300",
      icon:<IconReact  width="5.1rem" fill="#cccccc" className=" hover:fill-sky-300 hover:drop-shadow-sm-black rounded-lg"   />
    },
    {
      id:9,
      name:"Next js",
      className:"text-white",
      icon:<IconNextjs  width="5.1rem" fill="#cccccc" className=" hover:fill-white rounded-lg"   />
    },
    {id:10},
    {
      id:11,
      name:"Node js",
      className:"text-green-500",
      icon:<IconNodeJs  width="5.1rem" fill="#cccccc" className=" hover:fill-green-500 rounded-lg"   />
    },
    {
      id:12,
      name:"Express js",
      className:"text-white",
      icon:<IconExpress  width="5.1rem" fill="#cccccc" className="bg-[#ccc] fill-[#212121] p-4 rounded-full hover:bg-[#eee] hover:fill-black"   />
    },
    {
      id:13,
      name:"Mongo Db",
      className:"text-green-800",
      icon:<IconMongodb  width="5.1rem" fill="#cccccc" className="bg-[#ccc] fill-[#212121] p-4 rounded-full hover:fill-green-800"   />
    },
    {
      id:14,
      name:"My SQL",
      className:"text-cyan-800",
      icon:<IconMysql  width="5.1rem" fill="#cccccc" className="bg-[#ccc] stroke-[#212121] p-4 rounded-full hover:bg-cyan-800 hover:stroke-[#ccc]"   />
    },
  ]


  return(
  <div className="sticky w-full min-h-screen  bg-[#262626]  grid items-center justify-center py-6 xl:py-12">
    <div className={`relative p-2 sm:p-4 md:p-6  text-white ${styles.neomorpichBoxOut} grid items-center justify-center rounded-3xl `}  >
    <div className={` min-w-[90vw] md:min-w-[80vw] p-6 text-white ${styles.neomorpichBox} rounded-xl`}  >
    <div className="relative h-full flex flex-col" >
    <div className={`text-center text-3xl md:text-6xl font-bold  ${styles.heading}`} > Skills</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 py-6 items-center place-content-center h-full" >
          {techStack?.map((o,i)=>{
            return (
            <FadeIn key={i} className={`sticky ${o?.id ===10 ? "hidden md:block" : ""}`}>
            <div className={`${styles.stackbox}  text-white grid gap-1 place-content-center text-center` }   >
            <Tooltip placement="top" title={o?.name}  >
            {o?.icon}
            </Tooltip>
            {/* <div className={`${styles?.stackname} ${o?.className}`} >{o?.name}</div> */}
      </div>
            </FadeIn>)
          })}
      </div>

    </div>


      </div>
    </div>
  </div>
  )
}
