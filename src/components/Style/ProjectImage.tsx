import Image from 'next/image';
import Link from 'next/link';

export function Projectimage () {
    
    return (
        <div className={`
        flex flex-col  
        md:space-x-10  
        bg-white            dark:bg-gray-900
        text-black          dark:text-white
        `}>

            <span className={`
            flex
            text-4xl font-bold
            text-center  justify-center
            md:mt-[2%]       max-sm:my-[7%]
            `}>Projetos</span>

            {/* NoShutUp Begins */}

            <div className={`
            flex 
            lg:flex-row     max-[1020px]:flex-col   max-sm:flex-col
            gap-10 mt-[3.5%] 
            items-center
            `}>
                <div>
                    <span className={`
                    text-2xl dark:text-[#ffffff]
                    font-bold text-pink-600
                    `}>NoShutUp</span><br/><br/>
                    NoShutUp é um blog desenvolvido com <span className='font-bold'>Next.js</span> e estilizado com <span className='font-bold'>Tailwind CSS</span>, dedicado a abordar a questão crucial da violência contra a mulher. Este blog oferece uma plataforma para amplificar as vozes das mulheres e conscientizar sobre esse problema global. Com um design responsivo e atraente, o NoShutUp apresenta artigos, histórias pessoais, recursos e informações educacionais relacionados à violência de gênero.<br/><br/>
                    O objetivo principal do NoShutUp é promover a igualdade de gênero e encorajar a ação para erradicar a violência contra as mulheres. Com uma abordagem inclusiva, o blog oferece um espaço seguro para compartilhar experiências e inspirar mudanças. O Next.js proporciona desempenho e otimização, enquanto o Tailwind CSS simplifica a estilização.<br/><br/>
                    NoShutUp é uma valiosa contribuição para a conscientização sobre um problema crítico, empoderando as mulheres e incentivando a sociedade a se unir contra a violência de gênero, tornando-o um recurso essencial na luta pela igualdade e segurança das mulheres.<br/><br/>
                        <div className='flex flex-row gap-4 mt-[2%] items-center'>
                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M147.81,196.31a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM216,88V216a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31ZM80,144H40a8,8,0,0,0,0,16H52v48a8,8,0,0,0,16,0V160H80a8,8,0,0,0,0-16Z"></path>
                            </svg>

                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M128,152a8,8,0,0,1-8,8h-8v48a8,8,0,0,1-16,0V160H88a8,8,0,0,1,0-16h32A8,8,0,0,1,128,152Zm-64-8a8,8,0,0,0-8,8v20H40V152a8,8,0,0,0-16,0v56a8,8,0,0,0,16,0V188H56v20a8,8,0,0,0,16,0V152A8,8,0,0,0,64,144Zm176,56H228V152a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h20a8,8,0,0,0,0-16Zm-45.86-55.71a8,8,0,0,0-9,3.59L168,176.45l-17.14-28.57A8,8,0,0,0,136,152v56a8,8,0,0,0,16,0V180.88l9.14,15.24a8,8,0,0,0,13.72,0L184,180.88V208a8,8,0,0,0,16,0V152A8,8,0,0,0,194.14,144.29ZM208,120a8,8,0,0,1-8-8V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24A8,8,0,0,1,208,120ZM188.69,80,160,51.31V80Z"></path>
                            </svg>

                            <svg className="fill-black dark:fill-white"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z"></path>
                            </svg>

                            <Link target="_blank" href="https://github.com/Lemos0250/NoShutUpNext">
                                <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                            </Link>
                
                            <div className='flex border-2 rounded-2xl p-1 border-[#6b0023] dark:border-white'>    
                                <Link className="flex items-center gap-1" target="_blank" href="https://no-shut-up-next.vercel.app/">
                                    <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path></svg>
                                    <span>Venha Conhecer !</span>    
                                </Link>
                            </div> 
               
                        </div>
                </div>
                
                <Image className={`
                border 
                border-4 border-black 
                hover:border-blue-800    
                `} 
                    src="https://i.imgur.com/HrsU6rI.png" 
                    alt="NoShutUp" 
                    width={550} 
                    height={600}
                    />
            </div>

            {/* NoShutUp Ending */}

            <div className={`
            bg-[#BDBDBD]    dark:bg-gradient-to-r bg-[#BDBDBD] to from-[#212121]
            mt-[3%] 
            w-[95%] p-1
            border rounded-xl 
            `}/>

            {/* Rocket Music Begins */}

            <div className={`
            flex 
            lg:flex-row     max-[1020px]:flex-col
            gap-10 mt-[3.5%]    
            lg:items-start    max-[1020px]:items-center 
            md:space-x-10     
            `}>
                <div className=''>

                    <span className='text-2xl dark:text-white text-[#6C0BA9] font-bold break-normal '>RocketMusic</span><br/><br/>
                    Rocket Music é um site que apresenta uma seleção de músicas em um ambiente fácil de usar. 
                    Os visitantes podem explorar uma variedade de faixas musicais de diferentes gêneros e artistas. 
                    Com uma interface intuitiva,
                    os usuários podem reproduzir as músicas instantaneamente e aproveitar a experiência musical.
                    <br/><br/> Rocket Music é uma plataforma perfeita para descobrir novas canções e curtir seus artistas 
                    favoritos em um só lugar, 
                    proporcionando uma experiência musical envolvente e acessível.

                    <div className='flex flex-row gap-4 mt-[5%] items-center'>
                        <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Zm-12.19,145a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z"></path>
                        </svg>

                        <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M128,152a8,8,0,0,1-8,8h-8v48a8,8,0,0,1-16,0V160H88a8,8,0,0,1,0-16h32A8,8,0,0,1,128,152Zm-64-8a8,8,0,0,0-8,8v20H40V152a8,8,0,0,0-16,0v56a8,8,0,0,0,16,0V188H56v20a8,8,0,0,0,16,0V152A8,8,0,0,0,64,144Zm176,56H228V152a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h20a8,8,0,0,0,0-16Zm-45.86-55.71a8,8,0,0,0-9,3.59L168,176.45l-17.14-28.57A8,8,0,0,0,136,152v56a8,8,0,0,0,16,0V180.88l9.14,15.24a8,8,0,0,0,13.72,0L184,180.88V208a8,8,0,0,0,16,0V152A8,8,0,0,0,194.14,144.29ZM208,120a8,8,0,0,1-8-8V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24A8,8,0,0,1,208,120ZM188.69,80,160,51.31V80Z"></path>
                        </svg>

                        <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z"></path>
                        </svg>

                        <Link target="_blank" href="https://github.com/Lemos0250/RocketMusic">
                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                            </svg>
                        </Link>

                        <div className='flex border-2 rounded-2xl p-1 border-[#6C0BA9] dark:border-white'>    
                            <Link className="flex items-center gap-1" target="_blank" href="https://rocket-music-three.vercel.app/">

                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                                <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                            </svg>

                            <span>Venha Conhecer !</span>    

                            </Link>
                        </div> 

                    </div>
                </div>
                <Image  className={`
                border 
                border-4 border-black 
                hover:border-blue-800
                  hover:
                `} 
                
                src="https://i.imgur.com/hh6v59X.png" 
                alt="NoShutUp" 
                width={550} 
                height={600}
                />
            </div>

            {/* Rocket Music Ending*/}

            <div className={`
            bg-[#BDBDBD]        dark:bg-gradient-to-r bg-[#BDBDBD] to from-[#212121] 
            mt-[3%] 
            w-[95%] p-1
            border rounded-xl 
            `}/>

            {/* Flappy Knucles begins */}

            <div className={`
            flex 
            lg:flex-row     max-[1020px]:flex-col 
            gap-10 mt-[3.5%] mb-[7%]
            lg:items-start  max-[1020px]:items-center 
            md:space-x-10
            `}>
                <div>
                    <span className='text-2xl font-bold break-normal dark:text-white text-[#ff0040]'>Plane Knucles</span><br/><br/>
                    Knuckles Flap é um jogo que criei usando JavaScript, HTML e CSS, 
                    inspirado no Flappy Bird e estrelado pelo personagem Knuckles. 
                    Os jogadores controlam Knuckles, 
                    voando pelo cenário e desviando de obstáculos com cliques ou toques na tela. <br/><br/>
                    O desafio é manter Knuckles no ar e evitar colisões para alcançar a maior pontuação possível. 
                    Com elementos de nostalgia e ação, Knuckles Flap oferece uma experiência divertida e envolvente, 
                    mergulhando os jogadores no universo do Sonic de uma maneira única.
                        <div className='flex flex-row gap-4 mt-[5%] items-center'>

                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Zm-12.19,145a20.82,20.82,0,0,1-9.19,15.23C133.43,215,127,216,121.13,216a61.34,61.34,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.2,15,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.34-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C133.49,174.17,150.05,179,147.81,196.31ZM80,152v38a26,26,0,0,1-52,0,8,8,0,0,1,16,0,10,10,0,0,0,20,0V152a8,8,0,0,1,16,0Z"></path>
                            </svg>

                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M128,152a8,8,0,0,1-8,8h-8v48a8,8,0,0,1-16,0V160H88a8,8,0,0,1,0-16h32A8,8,0,0,1,128,152Zm-64-8a8,8,0,0,0-8,8v20H40V152a8,8,0,0,0-16,0v56a8,8,0,0,0,16,0V188H56v20a8,8,0,0,0,16,0V152A8,8,0,0,0,64,144Zm176,56H228V152a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8h20a8,8,0,0,0,0-16Zm-45.86-55.71a8,8,0,0,0-9,3.59L168,176.45l-17.14-28.57A8,8,0,0,0,136,152v56a8,8,0,0,0,16,0V180.88l9.14,15.24a8,8,0,0,0,13.72,0L184,180.88V208a8,8,0,0,0,16,0V152A8,8,0,0,0,194.14,144.29ZM208,120a8,8,0,0,1-8-8V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24A8,8,0,0,1,208,120ZM188.69,80,160,51.31V80Z"></path>
                            </svg>

                            <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                                <path d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,1,1,85.77,206.4,30,30,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.77,9.6,8,8,0,1,1-11.55,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.26-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.83-.56a8,8,0,0,0,4.07-15.48c-2.12-.55-21-5.22-32.83,2.76a20.55,20.55,0,0,0-9,14.95c-2,15.88,13.64,20.41,23,23.11,12.07,3.49,13.13,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36a8,8,0,0,0-4.3,15.41,61.23,61.23,0,0,0,15.18,2c5.83,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.48,174.17,127.6,171.31Zm64,0c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.54,4.54,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56a8,8,0,0,0,4.07-15.48c-2.11-.55-21-5.22-32.83,2.76a20.58,20.58,0,0,0-8.95,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.15,3.93-4.6,3.06-15.16,1.56-19.54.36A8,8,0,0,0,173.93,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.81,20.81,0,0,0,9.18-15.23C218,179,201.48,174.17,191.59,171.31ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,1,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.68L160,51.31Z"></path>
                            </svg>

                            <Link target="_blank" href="https://github.com/Lemos0250/PlaneKnucles_FlappyBirdProject">
                                <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                            </Link>
                
                <div 
                className='flex border-2 rounded-2xl p-1 border-[#ff0040] dark:border-white'>    
                    <Link className="flex items-center gap-1" target="_blank" href="https://plane-knucles-flappy-bird-project.vercel.app/">
                        
                        <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
                            <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"></path>
                        </svg>

                        <span>Venha Conhecer !</span>    
                    </Link>
                </div> 

                </div>
                </div>
                <Image  className={`
                border 
                border-4 border-black 
                hover:border-blue-800
                  hover:
                `} 
                
                src="https://i.imgur.com/vsM9NuQ.png" 
                alt="NoShutUp" 
                width={550} 
                height={600}
                />
            </div>

            <div id='Tecnologias'></div>

            {/* Flappy Knucles Ending */}
            
        </div>
    )
}