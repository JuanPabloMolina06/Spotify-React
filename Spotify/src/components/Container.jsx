import { Children } from "react";


export default function Container(props){
    return(
        <>
            <div className='w-full h-[750px] bg-red-200 flex flex-row'>
                {children}
            </div>
        </>
    )
}