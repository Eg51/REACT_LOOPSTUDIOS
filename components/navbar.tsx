import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sm:hidden flex items-center pl-15 pr-5 justify-center">
      <button
        onClick={toggleMenu}
        className="text-4xl text-white z-1000 w-[30px] pt-7 ml-20 pr-0"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute mt-100 p-100 ml-50
          bg-black flex t-0 text-white 
           flex-col ml-[-110%] h-full gap-5
            ">
              <a href="/">ABOUT</a>
              <a href="/">CAREERS</a>
              <a href="/">EVENTS</a>
              <a href="/">PRODUCTS</a>
              <a href="/c">SUPPORT</a>                   
           
            
            <div  className=" absolute flex p-50  ">
            </div>
        </div>
        
      )}
    </nav>
  );
}


