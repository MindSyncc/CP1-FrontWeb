import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import '../css/Nav.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


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
        <li className='link-home link-responsivo'>
          <Link to="/">Home</Link>
        </li>
        <li className='link-home'>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className='link-home'>
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
};

export default Nav;
