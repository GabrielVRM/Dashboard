
export const Cards = (card) => {


    return(
        <>
        <div className="">
            <a href={`card.link:/blob/main/README.md`} className="flex items-stretch justify-between h-full gap-6 overflow-hidden rounded bg-gradient-to-r from-indigo-500 " >
                <div className="flex items-center h-full p-6 bg-gradient-to-r from-indigo-500">{card.icon}</div>
                <div className="flex items-center py-6 leading-relaxed"><strong className="text-2xl">{card.title}</strong>
                {/* <p className="mt-2 text-sm text-gray-200">{card.paragrafo}</p> */}</div>
                <div className="flex items-center h-full p-6 transition-colors hover:bg-gray-600 ">{card.iconArrow}</div>
            </a>

        </div>
        </>
    )
} 