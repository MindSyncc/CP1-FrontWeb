import Home from './routes/Home'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import Nav from './components/Nav'
import Produtos from './routes/Produtos'
import '../src/index.css'

function App() {
  return (
    <>
      <Nav/>
      {/*O componente Home já está sendo chamado pelo Outlet*/}
      <Outlet/>
      <Produtos/>
      <Footer/>
    </>
  )
}
export default App
