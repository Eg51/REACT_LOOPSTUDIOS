import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 border-b">
      <button
        onClick={toggleMenu}
        className="text-2xl"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </nav>
  );
}


