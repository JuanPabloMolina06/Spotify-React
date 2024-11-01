import { Link } from "react-router-dom";


export default function Header(){
    return(
        <>
            <header className="w-screen h-32 bg-cinza-claro">
                <Link to='/' className="w-60 h-auto">
                    <img className="w-24" src="logo-spotify.webp" alt="" />
                </Link>
            </header>
        </>
    )
}