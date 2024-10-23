import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ConteudoPrincipal from './components/ConteudoPrincipal'
import CardsSidebar from './components/CardsSidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import artista from '../server/Models/Artista'
import { Outlet } from 'react-router-dom'
import Container from './components/Container'

function App() {



  return (
    <>
        <Header/>

        <Container>

          <SideBar>
            <CardsSidebar/>
            <CardsSidebar/>
            <CardsSidebar/>
          </SideBar>
          <Outlet />

        </Container>
    </>
  )
}

export default App