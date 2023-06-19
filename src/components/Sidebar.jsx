import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client" 
import Lesson from "./Lesson";
import { useState } from "react";



const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC) {
    id
    lessonType
    availableAt
    slug
    title
 
  }
}
`



export default function Sidebar() {
const {data} = useQuery(GET_LESSONS_QUERY)
const [lessonType, setLessonType] = useState('Projetos')

const handleChangeButton = () => {
    if (lessonType === "Projetos") {
        setLessonType('Especializacao')
    } else {
        setLessonType('Projetos')
    }
}

    return(

        <aside className="w-[348px] p-6 border-l border-gray-600 bg-gray-700 ">
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500  h-auto block">
                    Overview
                    </span>   
                    <div className="text-lg p-2 border border-blue-300 text-blue-300  rounded-full w-full flex justify-center mb-6">
                        { lessonType !== 'Projetos' ? <button onClick={handleChangeButton}>Clique para ver Projetos</button> : <button onClick={handleChangeButton}>Clique para ver Especializações</button>} 
                    </div>
                    <div className="flex flex-col gap-8">
                        { data?.lessons?.map((item) => {
                            if (item.lessonType === lessonType ){
                                
                                return (
                                    <Lesson key={item.id}
                                    title = {item.title}
                                    slug = {item.slug}
                                    availableAt={new Date(item.availableAt)}
                                    type = {item.lessonType}
                                    />
                                    
                                    )
                                }
                                })}
                   
                     

                    </div>
        </aside>
    )
    
}