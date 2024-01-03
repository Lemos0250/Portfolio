import { IconeMoon, IconeSol } from "../icons/icons"

interface BotaoAlternarTemaProps {
    tema: string 
    alternarTema: (() => void) 
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    
    return props.tema === 'dark' ? (

        <div onClick={props.alternarTema}>
            {IconeSol}  
        </div>
    ) : (
        
        <div onClick={props.alternarTema}> 
            {IconeMoon}
        </div>
    )
}