// src/components/Nav.jsx


import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import logo from '../assets/logo.jpg';
import '../css/Nav.css';

const Nav = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="Logo" className='logo'/>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/produtos">
                        <button className='btn'>Nossos Produtos</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
