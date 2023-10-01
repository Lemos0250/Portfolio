import Image from "next/image"

import react from '@/img/react.png'
import next from '@/img/Next.png'
import ts from '@/img/typescript.png'
import twcss from '@/img/tailwind.png'
import html from '@/img/html5.png'
import css from '@/img/css3.png'
import js from '@/img/javascript.png'
import git from '@/img/github.png'


export function Images () {

    return (

    <div className="flex flex-col gap-4 text-2xl font-bold mt-[2%]">

        <span className="text-center text-5xl">Habilidades</span>

        <div className="mt-[3%] flex flex-rol items-center justify-center gap-8">
            
            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={react} alt="React" width={160} height={60}/>
                <span>React Js</span>
            </div>
            
            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={next} alt="JavaScript" width={140} height={60}/>    
                <span>Next Js</span>           
            </div>
            
            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={git} alt="GitHub" width={140} height={60}/>
                <span>Git Hub</span> 
            </div>

        </div>

        <div className="flex items-center justify-center gap-8">

            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={js} alt="JavaScript" width={140} height={60}/>
                <span>Java Script</span> 
            </div>

            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={ts} alt="TypeScript" width={141} height={60}/>
                <span>Type Script</span> 
            </div>

        </div>

        <div className="flex items-center justify-center gap-8">

            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={html} alt="HTML5" width={140} height={60}/>
                <span>HTML 5</span> 
            </div>

            <div className="gap-3 flex flex-col border border-2 border-black p-4 items-center">
                <Image src={css} alt="CSS3" width={115} height={60}/>
                <span>Css 3</span> 
            </div>

            <div className="gap-3 flex flex-col border border-2 border-black p-2 items-center">
                <Image src={twcss} alt="Tailwind Css" width={160} height={60}/>
                <span>Tailwind Css</span> 
            </div>
        </div>
    </div>
    )
    
}