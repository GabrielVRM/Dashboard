import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client" 
import Lesson from "./Lesson";


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
    return(

        <aside className="w-[348px] p-6 border-l border-gray-600 bg-gray-700 ">
                <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500  h-auto block">
                    Overview de Projetos
                    </span>
                    <div className="flex flex-col gap-8">
                        {data?.lessons.map((item) => {
                            return (
                                <Lesson key={item.id}
                                title = {item.title}
                                slug = {item.slug}
                                availableAt={new Date(item.availableAt)}
                                type = {item.lessonType}
                                />

                            )
                        })}
                   
                     

                    </div>
        </aside>
    )
    
}