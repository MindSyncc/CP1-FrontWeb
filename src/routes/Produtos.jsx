import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import produtos from '../data/Produtos';
import tenis from './../assets/tenis-de-corrida.png';
import camiseta from './../assets/camiseta-corrida.jpg';
import raquete from './../assets/raquete-de-mesa.webp';
import bicicleta from './../assets/bicicleta.webp';
import bola_pilates from './../assets/bola-pilates.webp';
import cama_elastica from './../assets/cama-elastica.jpg';
import luva_goleiro from './../assets/luva-goleiro.png';
import bola_futebol from './../assets/bola-futebol.png';
import shorts from './../assets/shorts.jpg';
import smart_watch from './../assets/smart-watch.webp';
import kit_elastico from './../assets/kit-elastico.webp';
import step from './../assets/step.jpg';

const Produtos = () => {
    const navigate = useNavigate();

    const col1 = produtos.slice(0, 3);
    const col2 = produtos.slice(3, 6);
    const col3 = produtos.slice(6, 9);
    const col4 = produtos.slice(9, 12);

    const handleClick = (id) => {
        navigate(`/produto/${id}`);
    };

    return (
        
        <div className="produtos-container">
            <div className="produtos-col">
                {col1.map((produto, index) => (
                    <div key={produto.id} className="produto-card">
                        <img
                            src={index === 0 ? tenis : (index === 1 ? bola_pilates : (index === 2 ? shorts : produto.image))}
                            alt={produto.name}
                            className="produto-image"
                        />
                        <h2 className="produto-name">{produto.name}</h2>
                        <p className="produto-price">${produto.price.toFixed(2)}</p>
                        <button className="produto-button" onClick={() => handleClick(produto.id)}>Comprar</button>
                    </div>
                ))}
            </div>
            <div className="produtos-col">
                {col2.map((produto, index) => (
                    <div key={produto.id} className="produto-card">
                        <img
                            src={index === 0 ? camiseta : (index === 1 ? cama_elastica : (index === 2 ? smart_watch : produto.image))}
                            alt={produto.name}
                            className="produto-image"
                        />
                        <h2 className="produto-name">{produto.name}</h2>
                        <p className="produto-price">${produto.price.toFixed(2)}</p>
                        <button className="produto-button" onClick={() => handleClick(produto.id)}>Comprar</button>
                    </div>
                ))}
            </div>
            <div className="produtos-col">
                {col3.map((produto, index) => (
                    <div key={produto.id} className="produto-card">
                        <img
                            src={index === 0 ? raquete : (index === 1 ? luva_goleiro : (index === 2 ? kit_elastico : produto.image))}
                            alt={produto.name}
                            className="produto-image"
                        />
                        <h2 className="produto-name">{produto.name}</h2>
                        <p className="produto-price">${produto.price.toFixed(2)}</p>
                        <button className="produto-button" onClick={() => handleClick(produto.id)}>Comprar</button>
                    </div>
                ))}
            </div>
            <div className="produtos-col">
                {col4.map((produto, index) => (
                    <div key={produto.id} className="produto-card">
                        <img
                            src={index === 0 ? bicicleta : (index === 1 ? bola_futebol : (index === 2 ? step : produto.image))}
                            alt={produto.name}
                            className="produto-image"
                        />
                        <h2 className="produto-name">{produto.name}</h2>
                        <p className="produto-price">${produto.price.toFixed(2)}</p>
                        <button className="produto-button" onClick={() => handleClick(produto.id)}>Comprar</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;

