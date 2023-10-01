import Image from "next/image";
import Link from "next/link"

export function Main () {
    return (

    <div id="Home" className={`
    flex 
    justify-center items-center
    md:flex-row     max-[765px]:flex-col
    h-screen
    bg-white
    text-black 
    md:text-5xl 
    px-[9%] 
    `}>

        <div className={`
        flex flex-col   
        max-[765px]:justify-center
        max-[765px]:text-5xl
        md:gap-6
        w-full item-center
        `}>
            <span className="text-zinc-600 font-thin italic">Hello World</span>
            <span className="font-black">Eu sou um <br/> Desenvolvedor Front-End </span>
            <span className="text-zinc-600 font-thin italic">Seja bem vindo ao meu Portfolio</span>

            <button className={`
            text-3xl p-2
            border-4 border-black rounded-full
            lg:w-[40%] max-[765px]:[100%]
            `}>Mais Sobre Mim</button>

            <div className={`
            flex 
            flex-row 
            md:justify-start    max-[765px]:justify-center
            gap-4               max-[765px]:items-center
            `}>

            <a href="https://www.linkedin.com/in/joão-lemos-781044207/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
            </a>        
            <a href="https://github.com/Lemos0250" target="_blank">   
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
            </a>   
            <a href="https://www.instagram.com/ja1lemos/?next=%2Fjoao_calderaro%2F" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
            </a>

                <div className="border-2 px-2 border-black rounded-lg flex text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"></path></svg>
                    <span>Curriculo</span>
                </div>

            </div>

        </div>

        <div className={`
        
        `}>
            
            <div className="border-4 border-black">
                <Image 
                className="object-cover h-72  w-max" 
                src="https://res.cloudinary.com/dte7upwcr/image/upload/f_auto,w_1200/v1618959177/blog/blog2/curso-de-programacao/curso-de-programacao-img_header.jpg" 
                width={800} height={60}
                alt="Poesia"></Image>
            </div>

            <div className={`
            text-sm
            md:text-start    max-sm:text-center
            `}>
                <span>Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema. <br/><br/><span className="font-semibold"> -Thales Valentim</span></span>
            </div>
            <div id="About"></div>
        </div>
        
    </div>
    )
}