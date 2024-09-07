// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Nav.css'; // Verifique se o caminho está correto

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='container'>
      <h1 className='logo'>Power Sports</h1>
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'show' : ''}>
        <li className='link-home'>
          <Link to="/">Home</Link>
        </li>
        <li className='link-home'>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className='link-home'>
          <Link to="/contato">Contato</Link>
        </li>
        <li id='botao-home'>
          <Link to="/produtosdetails">
            <button className='botao'>Nossos Produtos</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
