export function Habilities () {
    return (

        <div className={`
        flex 
        lg:flex-row     max-[1020px]:flex-col   
        w-full justify-evenly
        text-2xl
        bg-[#DCDCDC] border-b-4 border-black 
        items-center

        `}>

            <div className={`
            flex flex-col
            md:w-[50%]      max-sm:w-screen
            md:space-x-0    max-sm:space-x-[5%]
            md:gap-14       max-sm:gap-6
            justify-center
            my-[6%]
            `}>

                <div className={`
                text-start text-4xl font-bold

                border-black 
                
                lg:w-[80%] md:w-[80%] max-sm:w-[60%]
                `}>
                    <span>Sobre Mim</span>
                </div>

                <div className="
                md:text-2xl     max-sm:text-xl 
                font-thin ">
                        <span>
                        Olá me chamo João Victor tenho 21 anos e atualmente estou cursando Ciências da Computação no Centro Universitário dos Guararapes (UNIFG) e desde a minha infancia eu sempre gostei de programar animações em aplicativos como o Scratch e ao longo dos anos já vi diversas linguagens de programação como C++, C#, Java e PHP.
                        <br/><br/>
                        Desde 2020 voltei meus estudos para a programação Web, com foco em desenvolvimento Front-End, utilizo linguagens como JavaScript e Delphi com uma maior especialização em FrameWorks como React e Node.
                        </span>
                </div>

            </div>

            <div className={`
            border-4 border-black 
            rounded-full overflow-hidden
            max-[1020px]:mb-[5%]`}>
                <img className="object-cover lg:h-96 w-max" src="https://avatars.githubusercontent.com/u/79033128?v=4" alt="Eu"></img>
                <div id="Projetos" ></div>            
            </div>
            
        </div>

    )
}