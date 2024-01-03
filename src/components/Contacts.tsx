import { IconEmail, IconMap, IconPhone } from "./icons/icons";


export function Contact () { 
    return(
    <div className=" bg-gray-900 flex flex-col items-center justify-center gap-6 text-white ">

        <span className="font-bold text-5xl max-sm:my-[7.5%] md:my-16">CONTATOS</span>

        <div className={`flex flex-col justify-between items-baseline gap-10 mb-[8%] fill-white`}>

            <div className="flex">
                {IconPhone}
                <span className="max-sm:text-xl md:text-3xl">(81) 9 8971-1139</span>
            </div>

            <div className="flex">
                {IconEmail}
                <span className="md:text-3xl max-sm:text-xl">vitorlemos703@gmail.com</span>
            </div>

            <div className="flex">
                {IconMap}
                <span className="md:text-3xl max-sm:text-xl">Jaboatão dos Guararapes - PE</span>
            </div>

        </div>
    </div>
    )
}