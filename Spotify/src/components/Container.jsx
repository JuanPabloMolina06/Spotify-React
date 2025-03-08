import { Children } from "react";


export default function Container({children}){
    return(
        <>
            <div className='w-screen h-[750px] bg-bg flex flex-row'>
                {children}
            </div>
        </>
    )
}