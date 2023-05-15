import { GithubLogo, Code } from "phosphor-react";


export const Button = () => {

    return (
        <>
         <a className="p-4 text-sm bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center cursor-pointer hover:bg-blue-400 transition-colors">
            <Code/>Acessar o Projeto
                </a>
            <a className="p-4 t text-sm bg-black text-gray-50 flex items-center rounded font-bold uppercase gap-2 justify-center cursor-pointer hover:bg-white hover:text-black transition-colors">
            <GithubLogo/>Acessar o Repositorio
                </a>
        </>
    )
}