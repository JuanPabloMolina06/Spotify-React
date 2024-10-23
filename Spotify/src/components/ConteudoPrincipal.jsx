import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ConteudoPrincipal(){

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizou a requisição'))
  }, [])

    return(
        <>
          <div className='flex flex-col justify-around items-center w-full'>
            {
              artistas
              .filter( artista => artista.genero === "Trap")
              .map( artistas => (
                <Link to={`/artistas/${artistas._id}`}>
                <div className='w-28 h-28 bg-red-600 flex flex-col justify-center items-center'>
                  <p>{artistas.nome}</p>
                </div>
                </Link>
              ))
            }
          </div>

                
        </>
    )
}