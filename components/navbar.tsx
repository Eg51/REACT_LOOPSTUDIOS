import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <button
        onClick={toggleMenu}
        className="text-4xl text-white"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="mt-4 absolute t-0 l-20 w-full bg-black text-white p-4">
            
            <div  className="mr-400 bg-amber-400 flex flex-col ">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>       
            </div>  
        </div>
      )}
    </nav>
  );
}


