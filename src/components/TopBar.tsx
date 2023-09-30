import Link from 'next/link';
import { useEffect, useState } from 'react';

export function TopBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    <div className={`
      flex flex-row w-full h-20 border-b-4 border-black 
      bg-[#ffffff] items-center text-black
      lg:text-2xl justify-between
      fixed
    `}>
      <div className="flex gap-5 ml-[15%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
          
        </svg>
        <span>João Victor</span>
      </div>

      <nav className={`
          lg:flex hidden gap-6 mr-[5%]
          cursor-pointer items-center
          text-xl 
      `}>
        
        <Link href="#Home">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Projetos">Portifolio</Link>
        <span>Tecnologies</span>
        <span>Summary</span>
        <span>Contact</span>

        <div 
        onClick={toggleDarkMode} 
        className="flex rounded-xl justify-center items-center border-4 bg-white p-1">
          
        </div>
      </nav>
    </div>
  );
}