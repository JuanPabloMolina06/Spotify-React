

export default function SideBar({children}){
    return(
        <>
            <nav className='w-60 h-[750px] bg-cyan-400 text-cyan-400 flex flex-col justify-around items-center'>
                {children}
            </nav>
        </>
    )
}