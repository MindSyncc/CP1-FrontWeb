import React from 'react';
import '../css/Home.css';
import flecha from './../assets/flecha.svg';
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
import produtos from '../data/Produtos';
import { useNavigate } from 'react-router-dom';

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
        <>
            <div className="hero container">
                <div className="hero-text">
                    <h1>Encontre os melhores produtos esportivos aqui!</h1>
                    <p>
                        Oferecemos uma experiência única e enriquecedora para todos os entusiastas do esporte. Explore nosso site e descubra por que somos a escolha preferida para todos os apaixonados por esportes. Junte-se à nossa comunidade e leve sua prática esportiva para o próximo nível!
                    </p>
                    <button className='btn'>
                        Veja os produtos <img src={flecha} alt="Seta para ver produtos" />
                    </button>
                </div>
            </div>
            <div className="produtos-container">
                <div className="produtos-col">
                    {col1.map((produto) => (
                        <div key={produto.id} className="produto-card">
                            <img
                                src={
                                    produto.image ||
                                    (produto.id === 1 ? tenis : 
                                    (produto.id === 2 ? bola_pilates :
                                    (produto.id === 3 ? shorts : 'default-image.jpg')))
                                }
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
                    {col2.map((produto) => (
                        <div key={produto.id} className="produto-card">
                            <img
                                src={
                                    produto.image ||
                                    (produto.id === 4 ? camiseta : 
                                    (produto.id === 5 ? cama_elastica :
                                    (produto.id === 6 ? smart_watch : 'default-image.jpg')))
                                }
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
                    {col3.map((produto) => (
                        <div key={produto.id} className="produto-card">
                            <img
                                src={
                                    produto.image ||
                                    (produto.id === 7 ? raquete : 
                                    (produto.id === 8 ? luva_goleiro :
                                    (produto.id === 9 ? kit_elastico : 'default-image.jpg')))
                                }
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
                    {col4.map((produto) => (
                        <div key={produto.id} className="produto-card">
                            <img
                                src={
                                    produto.image ||
                                    (produto.id === 10 ? bicicleta : 
                                    (produto.id === 11 ? bola_futebol :
                                    (produto.id === 12 ? step : 'default-image.jpg')))
                                }
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
        </>
    );
};

export default Produtos;
