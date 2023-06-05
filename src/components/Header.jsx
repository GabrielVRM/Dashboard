import logo from '../assets/logo.png'

export default function Header() {

    return(
        <>
        <header className='w-full h-[100px]  flex items-center justify-center bg-gray-700 border-b border-gray-600'>
        <img className='w-[200px] h-[200px]' src={logo}/>
        </header>
        </>
    )
    
}