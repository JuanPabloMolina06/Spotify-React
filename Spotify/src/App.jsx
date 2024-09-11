import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import ConteudoPrincipal from './components/ConteudoPrincipal'
import CardsSidebar from './components/CardsSidebar'

function App() {

  return (
    <>
        <Header/>

        <div className='w-full h-[750px] bg-red-200 flex flex-row'>

          <SideBar>
            <CardsSidebar/>
            <CardsSidebar/>
            <CardsSidebar/>
          </SideBar>
          <ConteudoPrincipal/>

        </div>
    </>
  )
}

export default App