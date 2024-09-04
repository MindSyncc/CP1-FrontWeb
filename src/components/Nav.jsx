import logo from '../assets/logo.jpg'
import '../css/Nav.css'


const Nav =() => {
    return(
            <nav className='container'>
                <img src={logo} alt="" className='logo'/>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li><button className='btn'>Nossos Produtos</button></li>
                </ul>
            </nav>
    )
}
export default Nav