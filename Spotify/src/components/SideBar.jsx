

export default function SideBar({children}){
    return(
        <>
            <nav className='w-1/4 h-[725px] rounded-xl m-3 bg-cinza-claro text-cyan-400 flex flex-col justify-around items-center'>
                {children}
            </nav>
        </>
    )
}