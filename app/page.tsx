import { Fullscreen } from "@boxicons/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-ccenter justify-center pb-18">
      <div className="flex flex-col">
        <img src="/images/mobile/image-hero.jpg" className="bg-auto pb-18"/>
        <img src="/images/mobile/image-interactive.jpg" alt="interactive_image"
        className="flex pt-5 pl-6 pr-6 pb-"/>
        <h1 className="flex text-center justify-center
          text-[Black] pt-11 pl-6 pr-6 pb- text-[30px]
          leading-9">
          THE LEADER IN INTERACTIVE VR
        </h1>
        <p className="flex text-center justify-center text-[grey]
          text-200 pt-4 pl-11 pr-11 pb-10">
          Founded in 2011, Loopstudios has been producing
          world-class virtual reality projects for some of 
          the globe. Our award-winning creations have 
          transformed businesses through digital experiences 
          that bind to their brand.
        </p>
        <p className="flex text-center justify-center text-[black]
          text-[30px] pt-4 pl-11 pr-11 pb-10">
          OUR CREATIONS
        </p>
      </div>
    </div>
  );
}
