export function Habilities () {
    return (

        <div className={`
        flex flex-row
        w-full justify-evenly
        text-2xl text-black bg-gray-300
        border-black
        `}>

            <div className={`
            w-[50%]
            flex flex-col gap-14
            justify-center`}>

                <div className={`
                text-3xl p-2 mt-10
                border-4 border-black rounded-full
                text-center lg:w-[35%] md:w-[80%]
                `}>
                    <span>Sobre Min</span>
                </div>

                <div className="text-xl ">
                        <span>
                        Olá me chamo João Victor tenho 21 anos e atualmente estou cursando Ciências da Computação no Centro Universitário dos Guararapes (UNIFG) e desde a minha infancia eu sempre gostei de programar animações em aplicativos como o Scratch e ao longo dos anos já vi diversas linguagens de programação como C++, C#, Java e PHP.
                        <br/><br/>
                        Desde 2020 voltei meus estudos para a programação Web, com foco em desenvolvimento Front-End, utilizo linguagens como JavaScript e Delphi com uma maior especialização em FrameWorks como React e Node.
                        </span>
                </div>

            </div>

            <div className={`
            border-4 border-black mt-[5%]
            object-fill`}>
                <img className="object-cover lg:h-96 w-max" src="https://avatars.githubusercontent.com/u/79033128?v=4" alt="Eu"></img>
            </div>

        </div>

    )
}