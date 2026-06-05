"use client";
import { useState } from "react";
import Loopstudios from '@/components/loopstudios'
import Link from 'next/link'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white whitespace-nowrap
        w-full object-cover pb-[100%] flex 
        justify-between items-center p-4
       ">
      <Loopstudios/>
        <button
          onClick={toggleMenu}
          className="text-4xl z-10 pr-4"
          aria-label="Toggle menu"
        > 
        ☰
        </button>

      {isOpen && (
      <div className=" w-full h-auto object-cover
        pt-50 flex flex-col gap-10 absolute top-0
        right-0 bg-black items center  pb-[100%] justify-center">
        <a className="flex pl-7" href="/">ABOUT</a>
        <a className="flex pl-7" href="/">CAREERS</a>
        <a className="flex pl-7" href="/">EVENTS</a>
        <a className="flex pl-7" href="/">PRODUCTS</a>
        <a className="flex pl-7" href="/c">SUPPORT</a> 
      </div>
      )}
    </nav>
  );
}










// EXPERIMENTAL CODES





// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="sm:hidden flex items-center pl-15 pr-5 justify-center">
//       <button
//         onClick={toggleMenu}
//         className="text-4xl text-white z-1000 w-[30px] pt-7 pr-[400px]"
//         aria-label="Toggle menu"
//       >
//         ☰
//       </button>

//       {isOpen && (
//         <div className="absolute mt-100 p-10 
//           bg-black flex t-0 text-white left-[ -150%] w-full
//            flex-col ml-[-110%] h-svh gap-5
//             ">
//               <a href="/">ABOUT</a>
//               <a href="/">CAREERS</a>
//               <a href="/">EVENTS</a>
//               <a href="/">PRODUCTS</a>
//               <a href="/c">SUPPORT</a>                   
           
            
//             <div  className=" absolute flex p-50  ">
//             </div>
//         </div>
        
//       )}
//     </nav>
//   );
// }


