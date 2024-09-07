
// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import produtos from '../data/Produtos'; // Ajuste o caminho conforme necessário
import '../css/ProductDetails.css';
import ProductDetails from './routes/ProductDetails';



const ProductDetails = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Encontre o produto pelo ID
    const produtoEncontrado = produtos.find(p => p.id === parseInt(id));
    setProduto(produtoEncontrado);
  }, [id]);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="product-details container">
      <h1>{produto.name}</h1>
      <img src={produto.image} alt={produto.name} className="product-image" />
      <p className="product-description">{produto.description}</p>
      <p className="product-price">${produto.price.toFixed(2)}</p>
      <button className="btn">Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductDetails;



