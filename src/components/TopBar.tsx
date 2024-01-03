'use client'

import useAppData from '@/hooks/UseTema';
import BotaoAlternarTema from '@/components/Style/ButtonMode';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export function TopBar() {
  
  const {tema, alternarTema} = useAppData()

  console.log(tema)
  
  return (
    <div className={`
      flex flex-row w-full h-20
      bg-[#333333] items-center
      bg-opacity-40
      text-white
      backdrop-blur-md
      shadow-md
      lg:text-2xl justify-between
      fixed
    `}>
      <div className="flex gap-5 md:ml-[15%]">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
          
        </svg>
        <span className='font-semibold text-xl'>João Victor</span>
      </div>

      <div className='flex lg:hidden max-sm:pr-[5%] items-center gap-3'>
        <MobileMenu />
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </div>

      <nav className={`
          lg:flex hidden gap-6 mr-[5%]
          cursor-pointer items-center
          text-xl 
      `}>
        
        <Link href="#Home">Home</Link>
        <Link href="#About">Sobre</Link>
        <Link href="#Projetos">Projetos</Link>
        <Link href="#Tecnologias">Tecnologias</Link>
        <Link href="#Contatos">Contatos</Link>
          
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      
      </nav>

    </div>
  );
}