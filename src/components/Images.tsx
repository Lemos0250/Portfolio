import Image from "next/image"

import React from '../../public/react.png'
import Next from '../../public/next.png'
import Github from '../../public/github.png'
import Javascript from '../../public/javascript.png'
import Typescript from '../../public/typescript.png'
import Html5 from '../../public/html5.png'
import Css3 from '../../public/css3.png'
import Tailwind from '../../public/tailwind.png'

export function Images () {

    return (

    <div className="flex flex-col gap-4 text-2xl font-bold mt-[2%]">

        <span className="text-center text-5xl">Habilidades</span>

        <div className="mt-[3%] flex flex-rol items-center justify-center gap-8">
            
            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={React} alt="React" width={160} height={60}/>
                <span>React Js</span>
            </div>
            
            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Next} alt="JavaScript" width={140} height={60}/>    
                <span>Next Js</span>           
            </div>
            
            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Github} alt="GitHub" width={140} height={60}/>
                <span>Git Hub</span> 
            </div>

        </div>

        <div className="flex items-center justify-center gap-8">

            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Javascript} alt="JavaScript" width={140} height={60}/>
                <span>Java Script</span> 
            </div>

            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Typescript} alt="TypeScript" width={141} height={60}/>
                <span>Type Script</span> 
            </div>

        </div>

        <div className="flex items-center justify-center gap-8">

            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Html5} alt="HTML5" width={140} height={60}/>
                <span>HTML 5</span>
            </div>

            <div className="gap-3 flex flex-col  border-2 border-black p-4 items-center">
                <Image src={Css3} alt="CSS3" width={115} height={60}/>
                <span>Css 3</span> 
            </div>

            <div className="gap-3 flex flex-col  border-2 border-black p-2 items-center">
                <Image src={Tailwind} alt="Tailwind Css" width={160} height={60}/>
                <span>Tailwind Css</span> 
            </div>
        </div>
    </div>
    )
    
}