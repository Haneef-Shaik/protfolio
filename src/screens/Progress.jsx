'use client'

import Lottie from "react-lottie-player"
import loadingAnimation from "../assets/sittingWithLap.json"
import { FadeIn } from '../components/Fade'

export default function Progress() {

  return (
    <div className="w-full min-h-screen grid items-center ">
        <FadeIn className="sticky  grid place-items-center ">
          <div className="text-[5vw] text-center text-white font-bold">
            {" "}
            Something Great in Progress ...
          </div>
          <Lottie
                      loop
                      animationData={loadingAnimation}
                      play
                      style={{ width: "400px" }}
                    />
        </FadeIn>
      </div>
  );
}
