
export const Cards = (card) => {


    return(
        <>
        <div className="">
            <a href={`card.link:/blob/main/README.md`} className=" bg-gray-700 rounded h-full overflow-hidden flex justify-between items-stretch gap-6" >
                <div className="bg-gray-700 h-full p-6 flex items-center">{card.icon}</div>
                <div className="py-6 leading-relaxed  flex items-center"><strong className="text-2xl">{card.title}</strong>
                {/* <p className="text-sm text-gray-200 mt-2">{card.paragrafo}</p> */}</div>
                <div className="h-full p-6 flex items-center hover:bg-gray-600 transition-colors ">{card.iconArrow}</div>
            </a>

        </div>
        </>
    )
} 