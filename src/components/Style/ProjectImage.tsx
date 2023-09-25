import Image from 'next/image';

export function Projectimage () {
    
    return (
        <div className={`
        flex flex-col
        mt-[2%] space-x-10
        `}>
            <span className={`
            text-4xl font-bold 
            `}>Projetos</span>

            <div className={`
            gap-10
            flex mt-[3.5%]
            items-center
            `}>
                <a>
                <span className='text-2xl font-bold break-normal'>NoShutUp</span><br/><br/>
                NoShutUp é um blog desenvolvido com Next.js e estilizado com Tailwind CSS, dedicado a abordar a questão crucial da violência contra a mulher. Este blog oferece uma plataforma para amplificar as vozes das mulheres e conscientizar sobre esse problema global. Com um design responsivo e atraente, o NoShutUp apresenta artigos, histórias pessoais, recursos e informações educacionais relacionados à violência de gênero.<br/><br/>
                O objetivo principal do NoShutUp é promover a igualdade de gênero e encorajar a ação para erradicar a violência contra as mulheres. Com uma abordagem inclusiva, o blog oferece um espaço seguro para compartilhar experiências e inspirar mudanças. O Next.js proporciona desempenho e otimização, enquanto o Tailwind CSS simplifica a estilização.<br/><br/>
                NoShutUp é uma valiosa contribuição para a conscientização sobre um problema crítico, empoderando as mulheres e incentivando a sociedade a se unir contra a violência de gênero, tornando-o um recurso essencial na luta pela igualdade e segurança das mulheres.<br/><br/>
                </a>
                <img className={`
                border 
                border-4 border-black 
                hover:border-blue-800
                  hover:
                `} 
                
                src="https://i.imgur.com/HrsU6rI.png" 
                alt="NoShutUp" 
                width={550} 
                height={600}
                />
            </div>

            <div className={`
            flex my-[3.5%]
            items-start space-x-10
            `}>
                <a>
                <span className='text-2xl font-bold break-normal'>RocketMusic</span><br/><br/>
                Rocket Music é um site que apresenta uma seleção de músicas em um ambiente fácil de usar. 
                Os visitantes podem explorar uma variedade de faixas musicais de diferentes gêneros e artistas. 
                Com uma interface intuitiva,
                os usuários podem reproduzir as músicas instantaneamente e aproveitar a experiência musical.
                <br/><br/> Rocket Music é uma plataforma perfeita para descobrir novas canções e curtir seus artistas 
                favoritos em um só lugar, 
                proporcionando uma experiência musical envolvente e acessível.
                </a>
                <img className={`
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

            <div className={`
            flex my-[3.5%]
            items-start space-x-10
            `}>
                <a>
                <span className='text-2xl font-bold break-normal'>Plane Knucles</span><br/><br/>
                Knuckles Flap é um jogo que criei usando JavaScript, HTML e CSS, 
                inspirado no Flappy Bird e estrelado pelo personagem Knuckles. 
                Os jogadores controlam Knuckles, 
                voando pelo cenário e desviando de obstáculos com cliques ou toques na tela. <br/><br/>
                O desafio é manter Knuckles no ar e evitar colisões para alcançar a maior pontuação possível. 
                Com elementos de nostalgia e ação, Knuckles Flap oferece uma experiência divertida e envolvente, 
                mergulhando os jogadores no universo do Sonic de uma maneira única.
                </a>
                <img className={`
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
            
        </div>
    )
}