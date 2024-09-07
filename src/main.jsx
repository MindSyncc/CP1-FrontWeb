import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Contato from './routes/Contato.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'


const router = createBrowserRouter([
  {
    // Elementos pai
    path:'/', element:<App/>,
    errorElement:<Error/>,


    // Elemento filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/contato', element:<Contato/>},
      {path:'/sobre',element:<Sobre/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
