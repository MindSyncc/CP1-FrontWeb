import { NavStyle } from '../css/NavStyle'

const Nav =() => {
    return(
        
        <NavStyle>
        <header className='headerwrapper'>
            <nav className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
       </NavStyle>
    )
}
export default Nav