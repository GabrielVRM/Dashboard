import logo from '../assets/logo.png'

export default function Home() {


    return(
        <>
    
        <div className="min-h-screen bg-bluer bg-cover opacity-50">
        <img className='w-[200px] h-[200px] opacity-100' src={logo}/>
       <div className=' flex justify-end items-center m-10'>
        <span className='text-4xl   '>
           Meu nome é <strong className='text-5xl text-rose-500'> Gabriel Vieira
            </strong> 
            <p className='text-4xl   '>e aqui está um pouco sobre meus projetos e especializações</p>
        </span>
       </div>
        </div>
        </>
    )
    
}


