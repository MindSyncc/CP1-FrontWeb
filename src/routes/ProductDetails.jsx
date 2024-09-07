// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import produtos from '../data/Produtos'; // Ajuste o caminho conforme necessário
import '../css/ProductDetails.css';


const ProductDetails = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    // Adicione console logs para depuração
    console.log("ID do produto da URL:", id);
    console.log("Lista de produtos:", produtos);

    // Encontre o produto pelo ID
    const produtoEncontrado = produtos.find(p => p.id === parseInt(id, 10)); // Certifique-se de que ID é um número
    console.log("Produto encontrado:", produtoEncontrado);

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



