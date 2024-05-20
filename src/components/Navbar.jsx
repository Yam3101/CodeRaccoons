import { useState } from 'react';
import "./components.css";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false); 
  const handleClick = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <header className="bg-slate-900 text-white">
      <nav className="flex justify-between p-6">
        <img src="" alt="logoCR" />
        <ul className="flex gap-4" id="nav-elements-cont">
          <li className="nav-element hover:text-blue-400 cursor-pointer">INICIO</li>
          <li className="nav-element hover:text-blue-400 cursor-pointer">LEARN CODE</li>
          <li className="nav-element hover:text-blue-400 cursor-pointer">ABOUT US</li>
        </ul>
        <button className='hidden' id="nav-button" onClick={handleClick}>
          <img width={30} src="/navButton.svg" alt="" />
        </button>
      </nav>
      <div id="hidden-elements" style={{ display: isVisible ? 'flex' : 'none' }}>
        <ul className="grid gap-4">
          <li className="nav-element cursor-pointer p-4 hover:text-blue-400">INICIO</li>
          <li className="nav-element cursor-pointer p-4 hover:text-blue-400">LEARN CODE</li>
          <li className="nav-element cursor-pointer p-4 hover:text-blue-400">ABOUT US</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
