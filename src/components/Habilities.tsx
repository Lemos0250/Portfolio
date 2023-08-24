export function Habilities () {
    return (

        <div className={`
        flex flex-row
        w-full justify-start
        text-2xl text-black bg-gray-400
        `}>

            <div className={`
            w-[50%]
            flex flex-col gap-5 
            justify-start`}>

                <div className={`
                text-3xl p-2 mt-6
                border-4 border-black rounded-full
                `}>
                    <span>Sobre Min</span>
                </div>

                <div className="text-xl ">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>

            </div>

            <div className={`object-contain`}>
                <img className="object-cover h-72 w-max" src="https://avatars.githubusercontent.com/u/79033128?v=4" alt="Eu"></img>
            </div>

        </div>

    )
}