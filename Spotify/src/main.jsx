import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import DetalhesArtistas from './components/DetalhesArtistas.jsx'
import ConteudoPrincipal from './components/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true,
       element: <ConteudoPrincipal/>
      },
      {path: '/artista/:id',
       element: <DetalhesArtistas/>
       }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
