

export default function ConteudoPrincipal({children}){
    return(
        <>
          <div className='flex flex-col justify-around items-center w-full'>
            {children}
          </div>

                
        </>
    )
}