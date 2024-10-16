import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ConteudoPrincipal from './components/ConteudoPrincipal'
import CardsSidebar from './components/CardsSidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import artista from '../server/Models/Artista'

function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizou a requisição'))
  }, [])

  return (
    <>
        <Header/>

        <div className='w-full h-[750px] bg-red-200 flex flex-row'>

          <SideBar>
            <CardsSidebar/>
            <CardsSidebar/>
            <CardsSidebar/>
          </SideBar>
          <ConteudoPrincipal>
            {
              artistas
              .filter( artista => artista.genero === "Trap")
              .map( artistas => (
                <div className='w-28 h-28 bg-red-600 flex flex-col justify-center items-center'>
                  <p>{artistas.nome}</p>
                </div>
              ))
            }
          </ConteudoPrincipal>

        </div>
    </>
  )
}

export default App