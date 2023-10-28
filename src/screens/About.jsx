import { useEffect } from "react";
import haneef from "../assets/haneef.png"
import { FadeIn } from "../components/FadeIn";
import styles from  "./About.module.css"
export default function About() {

  return(
  <div className="w-full min-h-screen bg-[#262626] grid md:grid-cols-2 ">
    <div className="grid items-center p-4 " >

      <div className="min-h-[500px] h-[80%] relative overflow-hidden rounded-xl" >
        <div className={`${styles.card_rotator} `} ></div>
      <div className={`${styles.neomorpichBox} absolute h-[99%] w-[99%] p-4 rounded-xl flex flex-col gap-6`} >
      <div className="text-center md:text-4xl font-bold text-[#cccccc]" >About Me</div>
      <div className="flex flex-col gap-4 text-justify p-4 md:p-6 2xl:p-8 md:text-md 2xl:text-lg text-[#bbbbbb] " >
      <div style={{textIndent:"10%"}} >
      I'm a dedicated MERN stack developer proficient in MongoDB, Express.js, React, and Node.js. My skill set also extends to HTML, CSS, JavaScript, as well as frontend libraries like Tailwind and Bootstrap. Additionally, I have hands-on experience with jQuery for enhanced interactivity. In database management, I work seamlessly with MySQL to optimize data storage and retrieval.
</div>
<div style={{textIndent:"10%"}} >

With expertise spanning the development stack, from backend to user interfaces, I thrive in collaborative environments. My passion lies in tackling complex challenges and delivering high-quality software. Staying up-to-date with web development trends, I'm eager to take on innovative projects that leave a lasting impact.
      </div>
      </div>
      </div>
      </div>

    </div>
  </div>
  )
}
