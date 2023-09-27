import { useState } from "react";
import { TopBarOpen } from "./TopBarOpen";

export function TopBar () {

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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path></svg>
            <span>João Victor</span>
        </div>

        <div className={`
            lg:flex hidden gap-6 mr-[5%]
            cursor-pointer items-center
            text-xl 
        `}>
              <span>Home</span>
              <span>About</span>
              <span>Portifolio</span>
              <span>Tecnologies</span>
              <span>Summary</span>
              <span>Contact</span>

            <div 
            onClick={toggleDarkMode}
            className="flex rounded-xl justify-center items-center border-4 bg-white p-1">
            </div>

            
        </div>
            
    </div>
    )
}