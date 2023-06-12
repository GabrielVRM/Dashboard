import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Home() {


    return(
        <>
    
        <div className="min-h-screen bg-bluer bg-cover opacity-80">
        <img className='w-[200px] h-[200px]' src={logo}/>


       <div className=' flex justify-center items-center '>
<div className=' block  p-8 bg-transparent  border-range-500 border rounded-full'>
    <strong className='text-white text-xl' > 
        Acessar o conteudo da Dashboard  
    <Link to={`/event`} className='flex justify-center cursor-pointer m-auto'>
        Clique aqui 
    </Link>
    </strong>

</div>
        
       </div>
        </div>
        </>
    )
    
}


