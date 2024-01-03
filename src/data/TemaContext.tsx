import { createContext, useState } from "react";

type Tema = 'dark' | '' 

interface TemaContextProps{
    tema: Tema
    alternarTema: () => void
}

const TemaContext = createContext<TemaContextProps>({} as TemaContextProps)

export function TemaProvider(props: any) {
    const [tema, setTema] = useState<Tema>('dark')

    function alternarTema() {
        setTema(tema === '' ? 'dark' : '')
    }

    return (
        <TemaContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </TemaContext.Provider>
    )
}

export default TemaContext