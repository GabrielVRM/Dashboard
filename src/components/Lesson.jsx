import {CheckCircle, Lock} from 'phosphor-react'
import {format, isPast} from 'date-fns'
import { ptBR } from 'date-fns/locale';
export default function Lesson(props) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableAtFormat = format(props.availableAt, "EEEE ' ° ' d ' de ' MMMM ' ° ' k'h'mm", 
   { locale: ptBR})
    return (
    <>
      <a href={props.slug}>
        <span className="text-gray-300">{availableAtFormat}</span>
        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
           {isLessonAvailable ? ( <span className="text=sm text-blue-500 font-medium flex items-center gap-2"><CheckCircle size={20}/> Conteúdo Liberado
            </span>) : (
                 <span className="text=sm text-orange-500 font-medium flex items-center gap-2"><Lock size={20}/> Em breve
                 </span>
            )}
            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-blue-300 font-bold">{props.type}</span>
          </header>
          <strong className="text-gray-200 mt-5 block">{props.title}</strong>
        </div>
      </a>
    </>
  );
}
