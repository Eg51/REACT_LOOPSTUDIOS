"use client";
import { Fullscreen } from "@boxicons/react";
import Image from "next/image";
import Link from 'next/link'
import { ShoppingBag, User, Heart, ClipboardList, MessageCircle, Settings, ChevronRight, } from "lucide-react"; // injected code  import start/stop
import Navbar from '@/components/navbar'
import Loopstudios from '@/components/loopstudios'
import Footerr from '@/components/footerr'


export default function Home() {  // injected code start
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" flex items-cnter justify-center
        flex-col h-auto w-full">
          <img src="/images/mobile/image-hero.jpg"
            className="bg-auto object-cover w-full h-1/5 pb-25" />
          <div className="absolute pt-[6.5%] w-full flex object-cover 
          items-center jutify-center md:hidden z-10 top-0"
          >
            <Navbar />
            {/* <Image
            src="/images/icon-hamburger.svg"
            alt="logo"
            width={30}
            height={60}
            className="cursor-pointer sm:hidden"
            /> */}
          </div>
          <img src="/images/mobile/image-interactive.jpg" alt="interactive_image"
            className="flex pt-5 pl-6 pr-6 pb-" />
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
          text-[30px] pt-4 pl-11 pr-11 pb-5">
            OUR CREATIONS
          </p>
          <img src='/images/mobile/image-deep-earth.jpg'
            alt='images/mobile/image-deep-earth'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-21 text-white
            w-34 text-1x2 tracking-[4px]">
            DEEP EARTH</p>

          <img src='/images/mobile/image-night-arcade.jpg'
            alt='image-night-arcade'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-20 text-white
            w-34 text-1x2 tracking-[4px]">
            NIGHT ARCADE</p>

          <img src='/images/mobile/image-soccer-team.jpg'
            alt='image-soccer-team'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-20 text-white
            w-34 text-1x2 tracking-[4px]">
            SOCCER TEAM VR</p>

          <img src='/images/mobile/image-grid.jpg'
            alt='image-grid'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-22 text-white
            w-14 text-1x2 m-0 tracking-[4px]">
            THE GRID</p>

          <img src='/images/mobile/image-from-above.jpg'
            alt='image-from-above'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-21 text-white
            w-34 text-1x2 m-0 tracking-[4px]">
            FROM UP ABOVE VR</p>

          <img src='/images/mobile/image-pocket-borealis.jpg'
            alt='image-pocket-borealis'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-24 text-white
            w-34 text-1x2 m-0 tracking-[4px]">
            POCKET BORELIS</p>

          <img src='/images/mobile/image-curiosity.jpg'
            alt='image-curiousity'
            className='bg-auto pb-1 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-22 text-white
            w-34 text-1x2 tracking-[4px]">
            THE CURIOUSITY</p>

          <img src='/images/mobile/image-fisheye.jpg'
            alt='image-fisheye'
            className='bg-auto pb-9 pl-5 p-5 h-50 w-full' />
          <p className="relative ml-[13%] -top-29 text-white
            w-34 text-1x2 tracking-[4px]">
            MAKE IT FISHEYE</p>

          <div className="flex items-center justify-center">
            <Link href={'https://www.google.com/search'}>
              <button className="flex items-center justify-center
              bg-white text-center border-2 border-gray-900
              cursor-pointer p-2 w-47">
                SEE ALL
              </button>
            </Link>
          </div>
          <Footerr />
        </div>
      </div>

      <div className="p-4 hidden">
        <Link
          href="/"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            {/* <Home size={18} /> */}
            <span className="font-medium">Home</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/shop"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <ShoppingBag size={22} />
            <span className="font-medium">Shop</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/collections"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <Heart size={22} />
            <span className="font-medium">Collections</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/account"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <User size={22} />
            <span className="font-medium">Account</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/orders"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <ClipboardList size={22} />
            <span className="font-medium">Orders</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/support"
          className="mb-2 flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <MessageCircle size={22} />
            <span className="font-medium">Support</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>

        <Link
          href="/settings"
          className="flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-gray-50"
        >
          <div className="flex items-center gap-4">
            <Settings size={22} />
            <span className="font-medium">Settings</span>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </Link>
      </div>
    </>
  );
}
