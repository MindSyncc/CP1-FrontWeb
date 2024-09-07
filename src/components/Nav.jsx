<<<<<<< HEAD
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import '../css/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav className='container'>
            <h1 className='logo'>Power Sports</h1>
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
             
        <li className="nav-item">
          <a href="/busca" className="nav-link">
            <FontAwesomeIcon icon={faSearch} className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/favoritos" className="nav-link">
            <FontAwesomeIcon icon={faHeart} className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/carrinho" className="nav-link">
            <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
          </a>
        </li>
            </ul>
        </nav>
    );
=======
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
>>>>>>> 6a734f91f57d65a1d6f00d60d75acdfaa517fbd6
};

export default Nav;
