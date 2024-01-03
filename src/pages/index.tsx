'use client'

import { TopBar } from '../components/TopBar'
import { Main } from '@/components/Main'
import { Habilities } from '@/components/Habilities'
import { Contact }  from '@/components/Contacts'
import { Projectimage } from '@/components/Style/ProjectImage'
import UseTema from '@/hooks/UseTema'
import Habilidade from '@/components/Habilitie'

import React from '../../public/react.png'
import Next from '../../public/next.png'
import Github from '../../public/github.png'
import Javascript from '../../public/javascript.png'
import Typescript from '../../public/typescript.png'
import Html5 from '../../public/html5.png'
import Css3 from '../../public/css3.png'
import Tailwind from '../../public/tailwind.png'


export default function Home() {
  const {tema} = UseTema()

  return (
    <main className={`text-black ${tema}`}>
      
      <TopBar/>
        <Main/>
          <Habilities/>
          <Projectimage/>
          <span className='flex p-[2%] text-center justify-center text-white bg-[#525252] font-bold text-4xl'>Tecnologias</span>
          <div className='flex w-full justify-center items-center bg-[#525252] md:p-0  max-sm:py-[10%]'>           
            <div className='w-2/4 grid grid-cols-3 gap-5 z-50'>
              <Habilidade name="ReactJS" image={React} />
              <Habilidade name="NextJS" image={Next} />
              <Habilidade name="TypeScript" image={Typescript} />
              <Habilidade name="JavaScript" image={Javascript} />
              <Habilidade name="TailwindCSS" image={Tailwind} />
              <Habilidade name="HTML5" image={Html5} />
              <Habilidade name="CSS3" image={Css3} />
              <Habilidade name="Git" image={Github} />
            </div>
            <div id="Contatos"></div>
          </div>
      <Contact/>

    </main>
  )
}
