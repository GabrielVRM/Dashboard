

export const Button = (props) => {

    return (
        <>
         <a href={props.link} className="p-4 text-sm bg-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center cursor-pointer hover:bg-blue-400 transition-colors">
            {props.icon}{props.title}
                </a>
                
        </>
    )
}